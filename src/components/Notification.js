import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const style = {
    border: '1px solid rgb(150, 150, 150)',
    padding: 8,
    margin: 8,
    color: 'rgb(50, 200, 50)'
  }

  const notification = useSelector(state => state.notification)
  if(notification === null) return null

  return (
    <div style={style}>
      {notification}
    </div>
  )

}

export default Notification