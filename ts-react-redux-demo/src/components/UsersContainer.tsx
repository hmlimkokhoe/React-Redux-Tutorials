import React, { useEffect } from "react"
import { usersSelector, getUsers } from "../features/users/UsersSlice"
import { useSelector, useDispatch } from "react-redux"

function UsersContainer() {
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector(usersSelector)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return loading? (
      <h2>Loading users</h2>
  ) : error? (
      <h2>{error}</h2>
  ) : (
      <div>
          <h2>Users List</h2>
          <ul>
              {users && users.map(
                  (user, i) => <li key={i}>{user.name}</li>)
              }
          </ul>
      </div>
  )
}

export default UsersContainer;