import React from 'react'
import Paper from 'material-ui/Paper'
import Button from '../../Elements/Button'
import './ButtonStore.css'

const style = {
    buttons: {
        width: '100%',
        margin: '1px 0 1px 0'
    }
}
const ButtonStore = props => (
    <Paper className='paper__ButtonStore'>
        <Button
            style={style.buttons}
            label=" 100zł"
        />
        <Button
            style={style.buttons}
            label="1 000zł"
        />
        <Button
            style={style.buttons}
            label=" 10 000zł"
        />
        <Button
            style={style.buttons}
            label=" 100 000zł"
        />
        <Button
            style={style.buttons}
            label="1 000 000zł"
        />
        <Button
            style={style.buttons}
            label=" 10 000 000zł"
        />
        <Button
            style={style.buttons}
            label="100 000 000zł"
        />
        <Button
            style={style.buttons}
            label="1 000 000 000zł"
        />
    </Paper>
)
export default ButtonStore