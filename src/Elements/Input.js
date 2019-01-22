import React from 'react'
import TextField from 'material-ui/TextField'

const Input = props => (
    <TextField
        hintText={props.hintText}
        onChange={props.onChange}
        type={props.type}
    />
)

export default Input