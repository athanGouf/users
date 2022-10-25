import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import {makeStyles} from '@mui/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from './styles';

const useStyles = makeStyles(styles);
const initialFormState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  company: '',
};

const UsersForm = ({onSaveUser, singleUser}) => {
  const [form, setForm] = useState(initialFormState);
  const [edit, setEdit] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (!singleUser) return;
    setForm(singleUser);
  }, [singleUser]);

  const handleChange = ({name, value}) => {
    setEdit(true);
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChange = ({target}) => {
    handleChange(target);
  };
  const onSave = () => {
    setEdit(false);
    onSaveUser(form);
  };

  const onCancel = () => {
    setEdit(false);
    setForm(singleUser);
  };

  const saveDisabled = !edit || !form.name || !form.phone;
  return (
    <Grid item xs={8} sm={6} className={classes.container}>
      <Box component="form" onChange={onChange}>
        <FormControl
          fullWidth
          variant="outlined"
          margin="normal"
          required
          error={!form.name}
        >
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            sx={{position: 'relative'}}
          >
            Name
          </InputLabel>
          <TextField
            fullWidth
            name="name"
            size="small"
            value={form.name}
            error={!form.name}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            sx={{position: 'relative'}}
          >
            Email address
          </InputLabel>
          <TextField fullWidth name="email" size="small" value={form.email} />
        </FormControl>
        <FormControl
          fullWidth
          variant="outlined"
          margin="normal"
          required
          error={!form.phone}
        >
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            sx={{position: 'relative'}}
          >
            Phone
          </InputLabel>
          <TextField
            fullWidth
            name="phone"
            size="small"
            value={form.phone}
            error={!form.phone}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            sx={{position: 'relative'}}
          >
            Address
          </InputLabel>
          <TextField
            fullWidth
            name="address"
            size="small"
            value={form.address}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            sx={{position: 'relative'}}
          >
            Company
          </InputLabel>
          <TextField
            fullWidth
            name="company"
            size="small"
            value={form.company}
          />
        </FormControl>
      </Box>
      <div className={classes.btnContainer}>
        {edit && (
          <Button variant="text" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button variant="contained" onClick={onSave} disabled={saveDisabled}>
          Save
        </Button>
      </div>
    </Grid>
  );
};

export default UsersForm;
