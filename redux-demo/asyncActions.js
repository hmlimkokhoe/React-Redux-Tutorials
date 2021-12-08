/**
 * Two important packages:
 * Axios - for API endpoint requests
 * redux-thunk - define async action creators, works as middleware for redux store
 */

const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

/**
 * STATE DEFINITION
 */
const initialState = {
  loading: false,
  users: [],
  error: ''
}

/**
 * ACTIONS DEFINITION
 */
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

/**
 * Action creator, so it returns a action
 * @returns non-pure function, so it can have side effects like async API calls. it can also dispatch actions thanks to dispatch param
 */
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest()) //set loading to true
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data.map(user => user.id) //for each user return user.id
        dispatch(fetchUsersSuccess(users)) //store user in state
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

const reducer = (state = initialState, action) => {
  console.log(action.type)

  /**
   * MATCH ACTION FROM API CALL
   */
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state, //copy existing state with spread operator
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default:
      return {
        error: action.payload
      };
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware)) //pass middleware to createStore function, allows method to return function instead of action object
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers()) //dispatch async action creator
