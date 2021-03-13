let arr = []

const drawLine = (str) => {
    let i = 0
    for (i; i < str - 1; i) {
        arr.push('_', '#')
    }
    console.log(arr.join(''))
    console.log(arr.reverse().join(''))
}

const drawTable = (str, col) => {
    drawLine(str  1)
    for (i = 0; i < (col / 2); i) {
        drawLine()
    }
}

drawTable(3, 3)



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);