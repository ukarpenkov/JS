import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import style from './../../../components/common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Сохранить</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <p><b>Полное имя: </b> {createField('Полное имя', 'fullName', [], Input)}</p>
        </div>
        <div>
            <b>Обо мне: </b>
            {createField('Обо мне', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Ищу работу:</b>
            {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </div>
        <div>
            <b>Мои профессиональные навыки: </b>
            {createField('Мои профессиональные навыки', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <div><b>Контакты: </b>{Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)} </b>
                </div>
            })}</div>
        </div>

    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)
export default ProfileDataFormReduxForm