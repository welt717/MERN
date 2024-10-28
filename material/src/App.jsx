import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Typography, Button } from '@mui/material';
import Home from "./components/home"; // Adjust your imports as needed
import "./App.css";

const theme = createTheme({
    palette: {
        primary: {
            main: '#00ff11',
        },
        secondary: {
            main: 'orange',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Typography variant="h4">Welcome to My App</Typography>
                <Home /> {/* Assuming you want to render the Home component */}
                <Button variant="contained" color="primary">
                    Click Me
                </Button>
            </Container>
        </ThemeProvider>
    );
}

export default App;
