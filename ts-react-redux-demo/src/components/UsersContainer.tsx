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
          <div>
              {users && users.map(
                  (user, i) => <p key={i}>{user.name}</p>)
              }
          </div>
      </div>
  )
}

export default UsersContainer;