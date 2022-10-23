import * as React from 'react'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'

import UsersPanel from './UsersPanel'
import UsersForm from './UsersForm'

const useStyles = makeStyles({
  grid: {
    overflowY: 'hidden',
    maxHeight: 500,
    maxWidth: 750,
    background: '#fff',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'whitesmoke',
    width: '100vw',
    height: '100vh',
  },
})

const url = 'https://my-json-server.typicode.com/tsevdos/epignosis-users/users'

const call = async (url, method) => {
  const response = await fetch(url, { method })
  return response.json()
}

const fetchUsers = async () => {
  return await call(url, 'GET')
}

const App = () => {
  const [users, setUsers] = React.useState([])
  const classes = useStyles()
  React.useEffect(() => {
    fetchUsers().then((users) => setUsers(users))
  }, [])

  return (
    <div className={classes.container}>
      <Grid container className={classes.grid}>
        <UsersPanel users={users} />
        <UsersForm />
      </Grid>
    </div>
  )
}

export default App
