import React from 'react'
import TextField from 'material-ui/TextField'

export default Input = props => (
    <TextField
        hintText={props.hintText}
        onChange={props.onChange}
        type={props.type}
    />
)