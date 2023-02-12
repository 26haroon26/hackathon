import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  let { state, dispatch } = useContext(GlobalContext);
  const [result, setresult] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      let response = await axios.post(
        `${state.baseUrl}/login`,
        {
          Email: data.get("Email"),
          Password: data.get("Password"),
        },
        {
          withCredentials: true,
        }
      );
      dispatch({
        type: "USER_LOGIN",
        payload: response.data.profile,
      });
      setresult("signin successful");
    } catch (err) {
      console.log("error", err);
      setresult(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h5" variant="h5" style={{ color: "green" }}>
            SAYLANI WELFARE
          </Typography>
          <Typography component="p" style={{ color: "blue" }}>
            ONLINE DISCOUNT STORE
          </Typography>
          <Typography component="p" style={{ color: "green" }}>
            {result}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email"
                  name="Email"
                  autoComplete="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="Password"
                  id="Password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, bgcolor: "green" }}
            >
              Sign Up
            </Button>
            <Typography
              component="p"
              style={{ fontSize: 15, textAlign: "center" }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create an account
            </Typography>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
