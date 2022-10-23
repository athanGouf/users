import React from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import styles from './styles'

const useStyles = makeStyles(styles)

const UsersForm = ({}) => {
  const classes = useStyles()
  return (
    <Grid item xs={6} className={classes.container}>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel
          shrink
          htmlFor="bootstrap-input"
          sx={{ position: 'relative' }}
        >
          Name
        </InputLabel>
        <TextField fullWidth name="name" size="small" />
      </FormControl>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel
          shrink
          htmlFor="bootstrap-input"
          sx={{ position: 'relative' }}
        >
          Email address
        </InputLabel>
        <TextField fullWidth name="email" size="small" />
      </FormControl>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel
          shrink
          htmlFor="bootstrap-input"
          sx={{ position: 'relative' }}
        >
          Phone
        </InputLabel>
        <TextField fullWidth name="phone" size="small" />
      </FormControl>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel
          shrink
          htmlFor="bootstrap-input"
          sx={{ position: 'relative' }}
        >
          Address
        </InputLabel>
        <TextField fullWidth name="address" size="small" />
      </FormControl>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel
          shrink
          htmlFor="bootstrap-input"
          sx={{ position: 'relative' }}
        >
          Company
        </InputLabel>
        <TextField fullWidth name="Company" size="small" />
      </FormControl>
      <div className={classes.btnContainer}>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">Save</Button>
      </div>
    </Grid>
  )
}

export default UsersForm
