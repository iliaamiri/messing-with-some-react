import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ExampleRadioBox() {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Choose one option</FormLabel>
            <RadioGroup
                sx={{
                    '& .MuiRadio-root.Mui-checked':{
                        color: "#069558"
                    }
                }}
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Option 1" />
                <FormControlLabel value="male" control={<Radio />} label="Option 2" />
                <FormControlLabel value="other" control={<Radio />} label="Option 3" />
            </RadioGroup>
        </FormControl>
    );
}