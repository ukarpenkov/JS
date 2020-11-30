import React from 'react';
import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps,
        {
            sendMessage,
            updateNewMessageBody
        }
    ),
    withAuthRedirect
)
    (Dialogs)

