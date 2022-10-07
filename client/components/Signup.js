import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {signup} from '../store'
import {useDispatch} from 'react-redux'

const Signup = props => {
  const {name, displayName, error} = props
  const dispatch = useDispatch()

  const handleSubmit = evt => {
    evt.preventDefault()
    const firstName = evt.target.firstName.value
    const lastName = evt.target.lastName.value
    const email = evt.target.email.value
    const phone = evt.target.countryCode.value + evt.target.phone.value
    const password = evt.target.password.value
    dispatch(signup(firstName, lastName, email, phone, password, 'signup'))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} name="signup">
        <div>
          <input name="firstName" type="text" placeholder="First Name" />
          <input name="lastName" type="text" placeholder="Last Name" />
          <input name="email" type="text" placeholder="Email" />
          <input name="countryCode" type="text" placeholder="+1" />
          <input name="phone" type="text" placeholder="Phone" />
          <input
            name="password"
            type="password"
            placeholder="Create Password"
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Repeat Password"
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  )
}
export default Signup
/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.user.error
//   }
// }

// const mapSignup = state => {
//   return {
//     name: 'signup',
//     displayName: 'Sign Up',
//     error: state.user.error
//   }
// }

// export const Login = connect(mapLogin, mapDispatch)(AuthForm)
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
// AuthForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// }
