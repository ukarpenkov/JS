import React, { ChangeEvent, useState } from 'react'
import Preloader from '../../common/preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.jpg'
import ProfileDataForm from './ProfileDataForm'
import { ContactsType, ProfileType } from '../../../types/types'

type PropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0])
    }
  }
  const onSubmit = (formData: ProfileType) => {
    //todo - del then
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true)
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}
      </div>
    </div>
  )
}

type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({
  profile,
  isOwner,
  goToEditMode,
}) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Редактировать</button>
        </div>
      )}
      <div>
        <p>
          <b>Полное имя: {profile.fullName}</b>
        </p>
      </div>
      <div>
        <p>
          <b>Обо мне: </b>
          {profile.aboutMe}
        </p>
      </div>
      <div>
        <p>
          <b>Ищу работу:</b> {profile.lookingForAJob ? 'Да' : 'Нет'}
        </p>
      </div>
      <div>
        {profile.lookingForAJob && (
          <div>
            <b>Мои профессиональные навыки: </b>
            {profile.lookingForAJobDescription}
          </div>
        )}
      </div>
      <div>
        <div>
          <b>Контакты: </b>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key as keyof ContactsType]}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

type ContactsPropsType = {
  contactTitle: string
  contactValue: string
}

export const Contact: React.FC<ContactsPropsType> = ({
  contactTitle,
  contactValue,
}) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}: </b> {contactValue}
    </div>
  )
}
export default ProfileInfo
