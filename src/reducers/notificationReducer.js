

const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'NOTIF': {
          return action.data
        }
        default:
            return state
      }
}

// export const setTimer = (seconds) => {
//     setTimeout(() => {
//         return async dispatch => {
//             await dispatch({
//                 type: 'NOTIF',
//                 data: null
//             })
//         }
//     },seconds * 1000)
// }

export const setNotification = (message, seconds) => {

    return async dispatch => {
        await dispatch({
            type: 'NOTIF',
            data: {
                message: message,
                seconds: seconds,
            }
        })
    }
}


export default notificationReducer