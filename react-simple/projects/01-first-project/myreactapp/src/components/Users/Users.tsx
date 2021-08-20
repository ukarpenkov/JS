import React from 'react'
import s from './Users.module.css'
import Paginator from '../common/Paginator/Paginator'
import UserItem from './UserItem'
import { UserType } from '../../types/types'
import { Field, Form, Formik } from 'formik'

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

let Users: React.FC<PropsType> = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  ...props
}) => {
  return (
    <div>
      <div></div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <UserItem
            user={u}
            followingInProgress={props.followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  )
}

const usersSearchFormValidate = (values: any) => {
  const errors = {}

  return errors
}

type UsersSearchFormObjectType = {
  term: string
}

const UsersSearchForm = () => {
  const submit = (
    values: UsersSearchFormObjectType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }
  return (
    <div>
      <Formik
        initialValues={{ term: '' }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <button type="submit" disabled={isSubmitting}>
              Найти
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default Users
