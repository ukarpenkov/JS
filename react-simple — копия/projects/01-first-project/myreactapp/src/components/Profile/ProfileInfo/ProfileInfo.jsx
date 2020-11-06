import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>
    <div className={s.wall}>
      <img src='https://gdb.rferl.org/896C5DE4-4A05-4ABF-8A65-98757BCE519C_w1080_h608.jpg'></img>
    </div>
    <div className={s.descriptionBlock}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' width='50px'></img>
      Decription about me
    </div>
  </div>
    
}

export default ProfileInfo;