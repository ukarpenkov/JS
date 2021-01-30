import React, { useState } from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.jpg'
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false)


  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })




  }


  return (
    <div>

      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} classNames={s.mainPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {

  return <div>
    {isOwner && <div><button onClick={goToEditMode}>Редактировать</button></div>}
    <div>
      <p><b>Полное имя: {profile.fullName}</b></p>
    </div>
    <div>
      <p><b>Обо мне: </b>{profile.aboutMe}</p>
    </div>
    <div>
      <p><b>Ищу работу:</b> {profile.lookingForAJob ? 'Да' : 'Нет'}</p>
    </div>
    <div>
      {profile.lookingForAJob &&
        <div><b>Мои профессиональные навыки: </b>{profile.lookingForAJobDescription}</div>}
    </div>
    <div>
      <div><b>Контакты: </b>{Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}</div>
    </div>

  </div>
}


export const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.contact}>
    <b>{contactTitle}: </b> {contactValue}
  </div>
}
export default ProfileInfo;