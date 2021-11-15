import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function ExampleButton() {
    return (
        <Grid container spacing={1} sx={{
            '& .MuiButton-contained': {
                borderRadius: '30px'
            }
        }}>
            <Grid item xs={6}>
                    <Button
                        variant="contained"
                        sx={{
                            background: "#0B6389",
                            '&:hover': {
                                background: "#153593"
                            }
                        }}


                    >button</Button>
            </Grid>
            <Grid item xs={6}>
                <Button
                    variant="contained"
                    sx={{
                        background: "#153593"
                    }}


                >Hovered button</Button>
            </Grid>

            <Grid item xs={6}>
                <Button
                    variant="contained"
                    sx={{
                        background: "#FFA137",
                        '&:hover': {
                            background: "#D97708"
                        }
                    }}


                >Button</Button>
            </Grid>
            <Grid item xs={6}>
                <Button
                    variant="contained"
                    sx={{
                        background: "#D97708"
                    }}


                >Hovered Button</Button>
            </Grid>
            <Grid item xs={6}>

            </Grid>
        </Grid>
)
    ;
}