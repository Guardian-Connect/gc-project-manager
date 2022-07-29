import React from "react";
// import { Paper, TextField, Typography } from "@mui/core";
import {
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  FormControlLabel,
  Box,
} from "@mui/material";
import { LockClockOutlined } from "@mui/icons-material";
import { loginUser, registerUser } from "../api";
const Login = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const paperStyle = {
    padding: 20,
    height: "35vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // e.preventDefault();
      handleLogin();
    }
  };
  const handleLogin = () => {
    loginUser(login, password).then((resp) => {
      window.location.reload();
    });
    // registerUser(login, password);
  };

  const handleUser = (e) => {
    setLogin(e.target.value.toLowerCase());
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", m: 1 }}
    >
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>{<LockClockOutlined />}</Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          sx={{ mb: 1 }}
          label="Username"
          placeholder="Enter username"
          variant="outlined"
          defaultValue={password}
          fullWidth
          required
          onKeyPress={handleKeyPress}
          onChange={handleUser}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
          defaultValue={login}
          onChange={handlePassword}
          onKeyPress={handleKeyPress}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleLogin}
        >
          Sign in
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
