import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import firebase from '../../Config/Config'
import  {BrowserRouter as Link, useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'
export default function Branchmanager() {
  const theme = createTheme();
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    let email = data.get('email')
    let password = data.get('password')
    console.log({
      email,
      password,
    });
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user.uid;
            console.log('User :', user)
            firebase.firestore().collection("Users").doc(userCredential.user.uid).set({
            email: email,
            uid:user,
            password: password
        })
    })
// Add a new document in collection "cities"
.then(()=>{
  Swal.fire(
    'Login Successfull',
    'Continue',
    'success'
  ) 
  history.push('/adminpanel') 
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message; 
  })}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PersonOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Create Branch Manager
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
           <Link to='/adminpanel'> <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Create Account
            </Button></Link>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
// import React, { Component } from "react";
// import "./styles.css";
// import CustomInput from "./components/CustomInput";
// import Button from "./components/Button";

// export default class App extends Component {
//   state = {
//     email: "",
//     password: ""
//   };

//   handleChange = e => {
//     this.setState({ [e.currentTarget.id]: e.currentTarget.value });
//   };

//   render() {
//     return (
//       <div className="App">
//         <form className="form">
//           <CustomInput
//             labelText="Email"
//             id="email"
//             formControlProps={{
//               fullWidth: true
//             }}
//             handleChange={this.handleChange}
//             type="text"
//           />
//           <CustomInput
//             labelText="Password"
//             id="password"
//             formControlProps={{
//               fullWidth: true
//             }}
//             handleChange={this.handleChange}
//             type="password"
//           />

//           <Button type="button" color="primary" className="form__custom-button">
//             Log in
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }