import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function ButtonSizes(props) {
    return (
        <Box sx={{ '& button': { m: 1 } }}>
            <div>
                <Button onClick={props.onClick} variant="outlined" size="small">
                    {props.text}
                </Button>

            </div>
        </Box>
    );
}


export function TextFieldHiddenLabel(props) {
    return (
        <Stack
            sx={{
                width: '25ch',
                margin: 'auto',

            }}
        >
            <TextField
                onChange={props.onChange} value={props.value} name={props.name} type={props.type}
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="Small"
                variant="filled"
                size="small"
            />

        </Stack>
    );
}