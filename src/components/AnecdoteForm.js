import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import anecdotesServices from '../services/anecdotes'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.inputAnecdote.value
        event.target.inputAnecdote.value = ''
        
        dispatch(createAnecdote(content))
      }

    return(
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="inputAnecdote" /> </div>
                <button type="submit">create</button>
            </form>
        </>
    )
}

export default AnecdoteForm


