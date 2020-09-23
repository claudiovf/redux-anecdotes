
const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'NOTIF': {
          return action.message
        }
        default:
            return state
      }
}

export const notify = (message) => {
    
    return {
        type: 'NOTIF',
        message
    }
}

export default notificationReducer