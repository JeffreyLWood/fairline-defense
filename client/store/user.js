import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const UPDATE_USER = 'UPDATE_USER'
/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const updateUser = user => ({type: UPDATE_USER, user})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}
export const signup = (
  firstName,
  lastName,
  email,
  phone,
  password,
  method
) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {
      firstName,
      lastName,
      email,
      phone,
      password
    })
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/verifyemail')
  } catch (dispatchOrHistoryErr) {
    dispatch(getUser(dispatchOrHistoryErr))
  }
}
export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const update = body => async dispatch => {
  try {
    await axios.put(`/api/users/${body.id}`, body)
    dispatch(updateUser(body))
  } catch (error) {
    console.error(error)
  }
}
export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case UPDATE_USER:
      const {user} = action
      return {...state, ...user}
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
