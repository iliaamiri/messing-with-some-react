import './App.css';
import * as React from 'react'
import Forms from "./components/Forms";
import Container from "@mui/material/Container";
import ExampleButton from "./components/ExampleButton";
import CheckboxExample from "./components/CheckboxExample";
import ExampleRadioBox from "./components/ExampleRadioBox";
import Grid from "@mui/material/Grid";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function App() {
    return (
        <Container maxWidth="md">
            <Grid container spacing={3}>
                <Forms/>

                <Grid container spacing={4} sx={{
                    marginTop: "10px",
                    marginBottom: "10px"
                }}>
                    <Grid item xs={6}>
                        <CheckboxExample/>
                    </Grid>
                    <Grid item xs={6}>
                        <ExampleRadioBox/>
                    </Grid>


                </Grid>

                <ExampleButton/>
            </Grid>


        </Container>

    );
}

export default App;
