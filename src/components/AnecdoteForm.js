import React from 'react'
import { asObject } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.inputAnecdote.value
        event.target.inputAnecdote.value = ''
      
        const newAnecdote = {
          type: 'ADD_ANECDOTE',
          data: asObject(content)
        }
        dispatch(newAnecdote)
        dispatch(notify('New Note Added'))
        setTimeout(() => {
            dispatch(notify(null))
        }, 3000)
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


