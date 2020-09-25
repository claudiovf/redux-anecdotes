import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'


const Notification = (props) => {
  const style = {
    border: '1px solid rgb(150, 150, 150)',
    padding: 8,
    margin: 8,
    color: 'rgb(50, 200, 50)'
  }

  let seconds = props.notification ? props.notification.seconds : 0

  useEffect(() => {

    if(props.notification !== null &&
      props.notification.message !== null ) {
        
        const timer = setTimeout(() => {
          props.setNotification(null)
        }, seconds * 1000)

        return () => clearTimeout(timer)
      }
  }, [props, seconds])

  console.log(props.notification)
  
 if(props.notification === null ||
    props.notification.message === null ) return null


  return (
    <div style={style}>
      {props.notification.message}
    </div>
  )
}

const mapStateToProps = state => {
  return { notification: state.notification }
}

const ConnectedNotification = connect(mapStateToProps, {setNotification})(Notification)
export default ConnectedNotification