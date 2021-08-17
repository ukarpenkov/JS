import React, { useState } from 'react'
import s from './ProfileInfo.module.css'
import { InjectedFormProps, reduxForm } from 'redux-form'
import {
  createField,
  GetStringKeys,
  Input,
  Textarea,
} from '../../common/FormsControls/FormsControls'
import style from './../../../components/common/FormsControls/FormsControls.module.css'
import { ProfileType } from '../../../types/types'

type PropsType = {
  profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>
const ProfileDataForm: React.FC<
  InjectedFormProps<ProfileType, PropsType> & PropsType
> = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Сохранить</button>
      </div>
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <p>
          <b>Полное имя: </b>{' '}
          {createField<ProfileTypeKeys>('Полное имя', 'fullName', [], Input)}
        </p>
      </div>
      <div>
        <b>Обо мне: </b>
        {createField<ProfileTypeKeys>('Обо мне', 'aboutMe', [], Textarea)}
      </div>
      <div>
        <b>Ищу работу:</b>
        {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {
          type: 'checkbox',
        })}
      </div>
      <div>
        <b>Мои профессиональные навыки: </b>
        {createField<ProfileTypeKeys>(
          'Мои профессиональные навыки',
          'lookingForAJobDescription',
          [],
          Textarea
        )}
      </div>
      <div>
        <div>
          <b>Контакты: </b>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key} className={s.contact}>
                //todo create come solution
                <b>
                  {key}: {createField(key, 'contacts.' + key, [], Input)}{' '}
                </b>
              </div>
            )
          })}
        </div>
      </div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({
  form: 'edit-profile',
})(ProfileDataForm)
export default ProfileDataFormReduxForm
