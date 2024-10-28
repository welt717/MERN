import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles'; 
import SendToMobileTwoToneIcon from '@mui/icons-material/SendToMobileTwoTone';

const useStyles = makeStyles({
    btn: {
        color: 'red',
        backgroundColor: 'pink',
        padding: '10px',
        fontSize: '20px', // Adjust font size if needed
    }
});

function Home() {
    const classes = useStyles();

    return (
        <Container className="home">
            <Typography variant="h4">
                Hello, this is the home component
            </Typography>

            <Button
                color="primary" 
                sx={{ marginTop: 2 }}
                variant="outlined"
                className={classes.btn} // Ensure class is applied
            >
                Click Here
            </Button>

            <Button
                 sx={{
                    color: 'red',
                    backgroundColor: 'pink',
                    padding: '10px',
                    fontSize: '70px',
                }}

                onClick={() => {
                    console.log({
                        message: "My name is Peter Mumo"
                    });
                }}  
                type="submit"
                variant="contained" 
                startIcon={<SendIcon />}
                endIcon={<SendIcon />}
                color="secondary"
            >
                Click To See My Name
            </Button>

            <br />

            <SendToMobileTwoToneIcon color="secondary" fontSize="large" /> <br />
            <SendToMobileTwoToneIcon color="secondary" fontSize="small" /> <br />
            <SendToMobileTwoToneIcon color="error" fontSize="medium" /> <br />
            <SendToMobileTwoToneIcon color="disabled" fontSize="small" /> <br />
        </Container>
    );
}

export default Home;
