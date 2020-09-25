import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import Notification from './Notification'

const AnecdotesList = (props) => {

    return(
        <>  
            <Notification />
            {props.anecdotes
                .sort((a,b) => b.votes - a.votes )
                .map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes} votes
                    <button onClick={() => {
                        props.voteFor(anecdote)

                    }}>vote</button>
                </div>
                </div>
            )}    
      </>   
    )
}

const mapStateToProps = state => {
    if(state.filter !== '') {
        return {
            anecdotes: state.anecdotes.filter(anecdote => {
                const lowerCaseContent = anecdote.content.toLowerCase()

                return lowerCaseContent.indexOf(state.filter.toLowerCase()) !== -1
            })
        }
    }
    return { anecdotes: state.anecdotes }
}



const ConnectedAnecdotesList = connect(
    mapStateToProps,
    { voteFor }
)(AnecdotesList)

export default ConnectedAnecdotesList
