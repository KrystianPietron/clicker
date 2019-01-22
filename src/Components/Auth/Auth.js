import React from 'react'
import Paper from 'material-ui/Paper'
import Input from '../../Elements/Input'
import Button from '../../Elements/Button'
import './Auth.css'

const style = {
    button: {
        margin: '5px 5px 5px 5px',
        width: '30vh',
    }
}
const Auth = props => (
    <Paper className="paper">
        <h3>Zaloguj się!</h3>
        <Input
            className="input"
            hintText="Email" />
        <Input
            className="input"
            hintText="Hasło" />
        <Button
            style={style.button}
            label="Zaloguj"
            primary={true}
        />
        <Button
            style={style.button}
            label="Przypomnij Hasło"
            primary={true}
        />
        <Button
            style={style.button}
            label="Zaloguj przez Google"
            primary={true}
        />
        <h3>Nie masz jeszcze konta? </h3>
        <h3>Zarejestruj się!!</h3>
        <hr></hr>
        <Input
            className="input"
            hintText="Email"
        />
        <Input
            className="input"
            hintText="Hasło" />
        <Input
            className="input"
            hintText="Powtórz Hasło" />
        <Button
            style={style.button}
            label="Zarejestruj się!"
            primary={true}
        />
    </Paper>
)
export default Auth