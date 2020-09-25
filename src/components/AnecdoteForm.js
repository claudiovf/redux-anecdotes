import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'



const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.inputAnecdote.value
        event.target.inputAnecdote.value = ''
        
        props.createAnecdote(content)
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


const ConnectedAnecdoteForm = connect(null, { createAnecdote })(AnecdoteForm)
export default ConnectedAnecdoteForm


