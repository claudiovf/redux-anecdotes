import React, { useEffect } from 'react'
import AnecdotesList from './components/AnecdotesList'
import AnecdoteForm from './components/AnecdoteForm'
import SearchForm from './components/SearchForm'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
    
  }, [dispatch])


  return (
    <div>
      <h2>Anecdotes</h2>
      <SearchForm />
      <AnecdotesList />
      <AnecdoteForm />
    </div>
  )
}

export default App