import React, { useEffect, useState } from 'react';
import Preloader from '../../common/preloader/Preloader';



const ProfileStatusWithHooks = (props) => {

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

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            { !editMode &&
                <div>
                    <b>Статус:</b> <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
                </div>}
            { editMode &&
                <div>
                    <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status}></input>
                </div>
            }
        </div >
    )
}


export default ProfileStatusWithHooks;