import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import s from './../../components/common/FormsControls/FormsControls.module.css'
import { AppStateType } from '../../redux/redux-store'

type LoginFormOwnProps = {
  captchaUrl: string | null
}

export type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFormValuesTypeKeys = keyof LoginFormValuesType

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>(
        'Email',
        'email',
        [required],
        Input
      )}
      {createField<LoginFormValuesTypeKeys>(
        'Password',
        'password',
        [required],
        Input,
        {
          type: 'password',
        }
      )}
      {createField<LoginFormValuesTypeKeys>(
        undefined,
        'rememberMe',
        [],
        Input,
        { type: 'checkbox' },
        'Запомнить меня'
      )}

      {captchaUrl && <img src={captchaUrl} />}

      {captchaUrl &&
        createField(
          'Введите символы с картинки',
          'captcha',
          [required],
          Input,
          {}
        )}

      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: 'login',
})(LoginForm)

type MapStatePropsType = {
  captchaUrl: string | null
  isAuth: boolean
}
type MapDispatchPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: any) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    )
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
