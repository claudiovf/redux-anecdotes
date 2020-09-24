import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const createNew = async (anecdote) => {
    const res = await axios.post(baseUrl, anecdote)
    return res.data
}

const update = async (id, newObject) => {
    const res = await axios.put(`${baseUrl}/${id}`, newObject)
    return res.data
}

export default { getAll, createNew, update }