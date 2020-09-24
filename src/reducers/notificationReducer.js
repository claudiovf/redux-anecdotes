
const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'NOTIF': {
          return action.data
        }
        default:
            return state
      }
}


export const setNotification = (message, seconds) => {
    return async dispatch => {
        const sentNotif = await dispatch({
            type: 'NOTIF',
            data: message,
        })
        
        if (sentNotif) {
            setTimeout(() => {
                dispatch({
                    type: 'NOTIF', 
                    data: null
                })
            }, seconds * 1000 )
        }
    }
}

export default notificationReducer