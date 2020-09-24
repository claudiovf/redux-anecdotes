import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { voteFor } from '../reducers/anecdoteReducer'
import Notification from './Notification'

const AnecdotesList = (props) => {
    const notification = useSelector(state => state.notification)


    const anecdotes = useSelector(state => {

        if(state.filter !== '') {
            return state.anecdotes.filter(anecdote => {
                const lowerCaseContent = anecdote.content.toLowerCase()

                return lowerCaseContent.indexOf(state.filter.toLowerCase()) !== -1
            })
        }
        return state.anecdotes
    })
 
    const dispatch = useDispatch()

    return(
        <>  
            <Notification />
            {anecdotes
                .sort((a,b) => b.votes - a.votes )
                .map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes} votes
                    <button onClick={() => {
                        dispatch(voteFor(anecdote))

                    }}>vote</button>
                </div>
                </div>
            )}    
      </>   
    )
}

export default AnecdotesList
