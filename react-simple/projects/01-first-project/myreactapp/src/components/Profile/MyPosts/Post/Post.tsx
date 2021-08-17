import React from 'react'
import { PostType } from '../../../../types/types'
import s from './Post.module.css'

type PropsType = {
  message: string
  likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png"
        alt=""
      />
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post
