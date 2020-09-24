import anecdotesService from '../services/anecdotes'
import {setNotification} from '../reducers/notificationReducer'

const anecdoteReducer = (state = [], action) => {

  switch(action.type) {
    case 'VOTE': {
      const id = action.data.id
      const anecdoteBeforeVote = state.find(a => a.id === id)
      const votedAnecdote = {...anecdoteBeforeVote, votes: anecdoteBeforeVote.votes + 1}
      
      return state.map(a => a.id !== id ? a : votedAnecdote)

    }
    case 'ADD_ANECDOTE': {
      return [...state, action.data]
    }
    case 'GET_ANECDOTES': {
      return action.data
    }
    default: 
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdotesService.getAll()
    dispatch({
      type: 'GET_ANECDOTES',
      data: notes,
    })
  }
}

export const voteFor = (anecdote) => {
  return async dispatch => {
    const updatedObj = {...anecdote, votes: anecdote.votes + 1}
    const sentObj = await anecdotesService.update(updatedObj.id, updatedObj)
    const dispatchedObj = await dispatch({
      type: 'VOTE',
      data: sentObj,
    })
    if (dispatchedObj) {
      dispatch(setNotification(`you voted for ${sentObj.content}`, 5))
    }
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = {
      content: content,
      votes: 0,
    }

    const sentAnecdote = await anecdotesService.createNew(anecdote)
    dispatch({
      type:'ADD_ANECDOTE',
      data: anecdote,
    })

    dispatch(setNotification(`${anecdote.content} was added to list`, 5))
  }
}

export default anecdoteReducer