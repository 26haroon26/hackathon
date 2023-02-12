import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
const theme = createTheme();


export default function Started() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          
           <img src='./Logo.png' alt="Profile" />
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        
          </Avatar>
          <Box sx={{ mt: 1 }}  >
            <Button
            onClick={()=>{
              navigate('/signin')
            }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,bgcolor:'green' }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
