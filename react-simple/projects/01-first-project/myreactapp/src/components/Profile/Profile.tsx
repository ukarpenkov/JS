import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';


const Profile = (props) => {

  return <div>
    <ProfileInfo savePhoto={props.savePhoto}
      isOwner={props.isOwner}
      profile={props.profile}
      status={props.status}
      saveProfile={props.saveProfile}
      updateStatus={props.updateStatus} />
    <MyPostsContainer />
  </div>
}

export default Profile