import * as React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import Grid from "@mui/material/Grid";

function Forms() {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    return (
        <Grid container
              spacing={3}
              sx={{
                  marginTop: "20px"
              }}
            noValidate
            autoComplete="off"
        >
            <Grid item xs={6}>
                <TextField id="standard-basic" label="Input 1" variant="standard"
                           sx={{
                               width: "310px"
                           }}

                    // InputProps={{
                    //     endAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
                    // }}
                />
            </Grid>

            <Grid item xs={6}>
                <TextField id="standard-basic" label="Search..." variant="standard"
                            sx={{
                                width: "310px"
                            }}
                           InputProps={{
                               endAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>
                           }}
                />
            </Grid>

            <Grid item xs={6}>
                <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <TextField
                    error
                    id="standard-error-helper-text"
                    sx={{
                        '& #standard-error-helper-text, #standard-error-helper-text-label, #standard-error-helper-text-helper-text': {
                            color: "#D97708"
                        },
                        '& .Mui-error:after': {
                            borderBottomColor: "#D97708"
                        }
                    }}
                    label="Error"
                    type={values.showPassword ? 'text' : 'password'}
                    defaultValue="Hello World"
                    helperText="Wrong Password"
                    variant="standard"
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                    }
                    }
                />
            </Grid>



        </Grid>
    );
}

export default Forms;