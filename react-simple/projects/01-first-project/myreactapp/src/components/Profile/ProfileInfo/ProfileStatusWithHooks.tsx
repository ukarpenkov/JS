import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from 'react'
import Preloader from '../../common/preloader/Preloader'

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }
  return (
    <div>
      {!editMode && (
        <div>
          <b>Статус:</b>{' '}
          <span onDoubleClick={activateEditMode}>
            {props.status || '-----'}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          ></input>
        </div>
      )}
    </div>
  )
}

export default ProfileStatusWithHooks
