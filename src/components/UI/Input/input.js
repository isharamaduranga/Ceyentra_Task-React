import React from 'react';
import TextField from "@mui/material/TextField";

const Input = (props) => {
    return (
        <div>
            <TextField
                label={props.label}
                id={props.id}
                name={props.name}
                value={props.value}
                size={props.size}
                onChange={props.onChange}
                onBlur={props.onBlur}
                helperText={props.helperText}
                type={props.type}
                autoComplete={props.autoComplete}
                fullWidth={props.fullWidth}
            />
        </div>
    );
};

export default Input;
