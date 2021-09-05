import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import { FilterType } from '../../redux/users-reducer'
import { getUsersFilter } from '../../redux/users-selectors'

const usersSearchFormValidate = (values: any) => {
  const errors = {}
  return errors
}

type FormType = {
  term: string
  friend: 'true' | 'false' | 'null'
}
type FriendFormType = 'true' | 'false' | 'null'

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
  const filter = useSelector(getUsersFilter)
  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const filter: FilterType = {
      term: values.term,
      friend:
        values.friend === 'null'
          ? null
          : values.friend === 'true'
          ? true
          : false,
    }
    props.onFilterChanged(filter)
    setSubmitting(false)
  }

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          term: filter.term,
          friend: String(filter.friend) as FriendFormType,
        }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <Field as="select" name="friend">
              <option value="null">Все</option>
              <option value="true">Только друзья</option>
              <option value="false">Только не друзья</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Найти
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
})

export default UsersSearchForm
