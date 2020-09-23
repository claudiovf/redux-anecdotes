import React from 'react'
import AnecdotesList from './components/AnecdotesList'
import AnecdoteForm from './components/AnecdoteForm'
import SearchForm from './components/SearchForm'


const App = () => {

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