import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

/**
 * fetchUsers() is defined here and mapped to React component
 * 
 * Returns list of users. Depending on our state object userData, it returns 
 * only a header saying 'loading' or list of users
 * @param {*} userData: object by mapStateToProps, 
 *            fetchUsers: function by mapDispatchToProps
 * @returns 
 */
function UsersContainer ({ userData, fetchUsers }) { //destructure fetchUsers from props
  
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  /*useEffect(() => {
    fetchUsers()
  }, [])*/
  useEffect(fetchUsers, [])

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user, i) => <p key={i}>{user.name}</p>)}
      </div>
    </div>
  )
}

/*
 * Map state data as props for consumption by Component
 */
const mapStateToProps = state => {
  const obj = {
    userData: state.user
  }
  
  console.log('mapStateToProps()');
  console.log(obj);
  console.log('====');
  
  return obj
}

/*
 * Map dispatching actions to store
 */
const mapDispatchToProps = dispatch => {
  const obj = {
      fetchUsers: () => dispatch(fetchUsers())
  }

  console.log('mapDispatchToProps()');
  console.log(obj);
  console.log('====');

  return obj
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
