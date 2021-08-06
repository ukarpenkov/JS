import { FormAction, stopSubmit } from 'redux-form'
import { ResultCodeEnum, ResultCodeForCaptchaEnum } from '../api/api'
import { authAPI } from '../api/authAPI'
import { securityAPI } from '../api/securityAPI'
import { BaseThunkType, InferActionsTypes } from './redux-store'

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null, //если ноль, то каптча не обязательна
}

export type InitialStateType = typeof initialState

const authReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType2 => {
  switch (action.type) {
    case 'SN/auth/SET_USER_DATA':
    case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: 'SN/auth/SET_USER_DATA',
      payload: { userId, email, login, isAuth },
    } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS',
      payload: { captchaUrl },
    } as const),
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let meData = await authAPI.me()
  if (meData.resultCode === ResultCodeEnum.Success) {
    let { id, login, email } = meData.data
    dispatch(actions.setAuthUserData(id, email, login, true))
  }
}

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ): ThunkType =>
  async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodeEnum.Success) {
      //success get auth data
      dispatch(getAuthUserData())
    } else {
      if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
        dispatch(getCaptchaUrl())
      }
      let message = data.messages.length > 0 ? data.messages[0] : 'Some Error'
      dispatch(stopSubmit('login', { _error: message }))
    }
  }
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false))
  }
}

export default authReducer

export type InitialStateType2 = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl: string | null //если ноль, то каптча не обязательна
}
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
