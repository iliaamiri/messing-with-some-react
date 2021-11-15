import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from "@mui/material/FormLabel";

export default function CheckboxExample() {
    return (
        <FormGroup>
            <FormLabel component="legend">Choose at least one option</FormLabel>
            <FormControlLabel
                sx={{
                    '& .MuiCheckbox-root.Mui-checked': {
                        color: "#069558"
                    }
                }}
                control={<Checkbox defaultChecked />} label="Option 1" />
            <FormControlLabel control={<Checkbox />} label="Option 2" />
        </FormGroup>
    );
}