import * as React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

import UsersPanel from './components/UsersPanel';
import UsersForm from './components/UsersForm';
import { getSingleUser, getUsers, updateUser } from './utils';

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
});

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [singleUser, setSingleUser] = React.useState(null);
  const classes = useStyles();

  React.useEffect(() => {
    getUsers().then(users => {
      setUsers(users);
    });
  }, []);

  const onSelectUser = id => {
    getSingleUser(id).then(user => {
      setSingleUser(user);
    });
  };

  const onSaveUser = data => {
    updateUser(singleUser.id, data);
  };

  const isUserSelected = id => id === singleUser?.id;

  return (
    <div className={classes.container}>
      <Grid container className={classes.grid}>
        <UsersPanel
          isUserSelected={isUserSelected}
          onSelectUser={onSelectUser}
          users={users}
        />
        {singleUser && (
          <UsersForm singleUser={singleUser} onSaveUser={onSaveUser} />
        )}
      </Grid>
    </div>
  );
};

export default App;
