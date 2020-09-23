import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { notify } from '../reducers/notificationReducer'
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


    const vote = (id) => {
        return {
          type: 'VOTE',
          data: { id }
        }
    }

    useEffect(() => {
        if(notification === null) return 

        const timer = setTimeout(() => {
            dispatch(notify(null))
        }, 3000)
        
        return () => clearTimeout(timer)
    })




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
                        dispatch(vote(anecdote.id))
                        dispatch(notify(`you voted for ${anecdote.content}`, 'Vote'))

                    }}>vote</button>
                </div>
                </div>
            )}    
      </>   
    )
}

export default AnecdotesList
