import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import {
  maxLengthCreator,
  required,
} from '../../../utils/validators/validators'
import {
  createField,
  GetStringKeys,
  Input,
  Textarea,
} from '../../common/FormsControls/FormsControls'
import { PostType } from '../../../types/types'

type MyPostPropsType = {
  posts: Array<PostType>
  addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MyPostPropsType> = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ))

  let onAddPost = (values: AddPostFormValuesType) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

const MyPostsMemorized = React.memo(MyPosts)
const maxLength10 = maxLengthCreator(10)

type PropsType = {}

export type AddPostFormValuesType = {
  newPostText: string
}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

let AddNewPostForm: React.FC<
  InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<AddPostFormValuesTypeKeys>(
          'Your Post',
          'newPostText',
          [required],
          Input
        )}
        {/* <Field
          name="newPostText"
          component={Textarea}
          placeholder="Post your message"
          validate={[required, maxLength10]}
        /> */}
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm<AddPostFormValuesType, PropsType>({
  form: 'ProfileAddNewPostForm',
})(AddNewPostForm)

export default MyPostsMemorized
