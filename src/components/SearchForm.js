import React from 'react'
import { useDispatch } from 'react-redux'
import { addFilter } from '../reducers/filterReducer'


const SearchForm = (props) => {
    const dispatch = useDispatch()

    return(
        <>
            Filter
            <input 
                name="search"
                type="text"
                onChange={(event) => {
                    const userInput = event.target.value
                    dispatch(addFilter(userInput))
                }}
            ></input>
        </>
    )
}

export default SearchForm