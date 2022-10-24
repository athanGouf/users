import React from 'react'
import Grid from '@mui/material/Grid'
import styles from './styles'
import { makeStyles } from '@mui/styles'
import User from './User'

const useStyles = makeStyles(styles)

const UsersPanel = ({ onSelectUser, users }) => {
  const classes = useStyles()

  return (
    <Grid item xs={3} sm={6} className={classes.container}>
      {users.map(({ email = '', id, name = '', photo }) => (
        <User
          email={email}
          id={id}
          name={name}
          onSelectUser={onSelectUser}
          photo={photo}
        />
      ))}
    </Grid>
  )
}

export default UsersPanel
