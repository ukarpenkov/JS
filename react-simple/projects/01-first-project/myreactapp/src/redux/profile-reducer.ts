import { FormAction, stopSubmit } from 'redux-form'
import { profileAPI } from '../api/profileAPI'

import { PhotosType, PostType, ProfileType } from '../types/types'
import { BaseThunkType, InferActionsTypes } from './redux-store'

let initialState = {
  posts: [
    { id: 1, message: 'Hi! How are you???', likesCount: 12 },
    { id: 2, message: 'You looking good!!!', likesCount: 386 },
    { id: 3, message: 'You looking good!!!', likesCount: 386 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: '',
}

const profileReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'SN/PROFILE/ADD-POST': {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    }
    // case UPDATE_NEW_POST_TEXT: {
    //     return {
    //         ...state,
    //         newPostText: action.newText
    //     }
    // }
    case 'SN/PROFILE/SET_STATUS': {
      return {
        ...state,
        status: action.status,
      }
    }
    case 'SN/PROFILE/SET_USER_PROFILE': {
      return { ...state, profile: action.profile }
    }
    case 'SN/PROFILE/DELETE_POST': {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      }
    }
    case 'SN/PROFILE/SAVE_PHOTO_SUCCESS': {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      }
    }
    default:
      return state
  }
}

export const actions = {
  addPostActionCreator: (newPostText: string) =>
    ({
      type: 'SN/PROFILE/ADD-POST',
      newPostText,
    } as const),
  setUserProfile: (profile: ProfileType) =>
    ({
      type: 'SN/PROFILE/SET_USER_PROFILE',
      profile,
    } as const),
  setStatus: (status: string) =>
    ({
      type: 'SN/PROFILE/SET_STATUS',
      status,
    } as const),
  deletePost: (postId: number) =>
    ({
      type: 'SN/PROFILE/DELETE_POST',
      postId,
    } as const),
  savePhotoSuccess: (photos: PhotosType) =>
    ({
      type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS',
      photos,
    } as const),
}

export const getUserProfile =
  (userId: number): ThunkType =>
  async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
  }

export const getStatus =
  (userId: number): ThunkType =>
  async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
  }

export const updateStatus =
  (status: string): ThunkType =>
  async (dispatch) => {
    try {
      let data = await profileAPI.updateStatus(status)
      if (data.resultCode === 0) {
        dispatch(actions.setStatus(status))
      }
    } catch (error) {
      //
    }
  }

export const savePhoto =
  (file: File): ThunkType =>
  async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
      dispatch(actions.savePhotoSuccess(data.data.photos))
    }
  }

export const saveProfile =
  (profile: ProfileType): ThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
      if (userId != null) {
        dispatch(getUserProfile(userId))
      } else {
        throw new Error("userId can't be null")
      }
    } else {
      dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }))
      return Promise.reject(data.messages[0])
    }
  }
export default profileReducer

export type InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
