import React from 'react'
import Grid from '@mui/material/Grid'
import styles from './styles'
import Avatar from '@mui/material/Avatar'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles(styles)

const UsersPanel = ({ users }) => {
  const classes = useStyles()
  return (
    <Grid item xs={6} className={classes.container}>
      {users.map(({ email = '', id, name = '', photo }) => (
        <Grid container key={id} className={classes.userContainer}>
          <Grid
            item
            xs={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar src={photo} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="subtitle">{email}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default UsersPanel
