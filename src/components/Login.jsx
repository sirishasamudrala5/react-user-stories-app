import React, {useState} from "react";
import { Card, Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import {LoginAction} from '../Services';

const Login = () => {
  const [toggleUser, setToggleUser] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      isadmin: toggleUser
    }
    console.log("event", data);
    LoginAction(data)
  }

  return (
    <Card style={{ marginTop: '8em', display:'flex', justifyContent:'center', width: '24em' }}>
      <form style={{ marginTop: '1em', display: "flex", flexDirection:"column", justifyContent:'center', width:'22em' }} onSubmit={handleSubmit}>
        <TextField id="email" name="email" label="Email" variant="outlined" required style={{margin: "0.5em"}} />
        <TextField id="password" name="password" label="Password" type="password" variant="outlined" required minLength={5} style={{margin: "0.5em"}} />
        <FormControlLabel
        style={{margin: "0.5em"}}
          control={<Switch checked={toggleUser} onChange={() => setToggleUser(!toggleUser)} />}
          label="Login as Admin"
        />
        <Button variant="contained" color="secondary" style={{margin: "2.5em"}} type="submit">Login</Button>
      </form>
    </Card>
  );
}

export default Login;