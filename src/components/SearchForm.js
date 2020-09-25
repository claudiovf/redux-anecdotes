import React from 'react'
import { connect } from 'react-redux'
import { addFilter } from '../reducers/filterReducer'


const SearchForm = (props) => {

    return(
        <>
            Filter
            <input 
                name="search"
                type="text"
                onChange={(event) => {
                    const userInput = event.target.value
                    props.addFilter(userInput)
                }}
            ></input>
        </>
    )
}

const ConnectedSearchForm = connect(null, { addFilter })(SearchForm)
export default ConnectedSearchForm