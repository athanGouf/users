import React from 'react';
import Grid from '@mui/material/Grid';
import styles from './styles';
import Avatar from '@mui/material/Avatar';
import {makeStyles} from '@mui/styles';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(styles);

const User = ({email, id, isUserSelected, name, onSelectUser, photo}) => {
  const classes = useStyles();
  const onClick = () => {
    onSelectUser(id);
  };

  const selected = isUserSelected(id) ? 'selected' : '';
  const textColor = isUserSelected(id) ? classes.textColor : '';
  return (
    <Grid
      container
      className={`${classes.userContainer} ${selected}`}
      onClick={onClick}
    >
      <Grid item xs={12} sm={2} className={classes.avatarContainer}>
        <Avatar src={photo} />
      </Grid>
      <Grid item sm={10} display={{xs: 'none', sm: 'block'}}>
        <Typography variant="h6" className={textColor}>
          {name}
        </Typography>
        <Typography variant="subtitle" className={textColor}>
          {email}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default User;
