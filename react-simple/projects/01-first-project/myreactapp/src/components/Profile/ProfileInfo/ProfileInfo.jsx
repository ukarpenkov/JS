import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.wall}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/2/20/Tokyo_Tower_and_Tokyo_Sky_Tree_2011_January.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <div>
          <p>
            {props.profile.aboutMe}
          </p>
        </div>
        <div>
          <p>
            {props.profile.lookingForAJobDescription}
          </p>
        </div>
        <div>
          <p>
            {props.profile.fullName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;