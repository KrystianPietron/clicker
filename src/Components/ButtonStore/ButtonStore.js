import React from 'react'
import Paper from 'material-ui/Paper'
import Button from '../../Elements/Button'
import './ButtonStore.css'
import { NavigationFullscreenExit } from 'material-ui/svg-icons';

const style = {
    buttons: {
        width: '100%',
        margin: '1px 0 1px 0',
        height: "11.11vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}
const ButtonStore = props => (
    <Paper className='paper__ButtonStore'
    zDepth={5}
    >
            <Button
                style={style.buttons}
                label=" 100zł"
                backgroundColor="gray"
            />
            <Button
                style={style.buttons}
                label="1 000zł"
                backgroundColor="gray"
            />
            <Button
                style={style.buttons}
                label=" 10 000zł"
                backgroundColor="gray"
            />
            <Button
                style={style.buttons}
                label=" 100 000zł"
                backgroundColor="gray"
            />
            <Button
                style={style.buttons}
                label="1 000 000zł"
                backgroundColor="gray"
            />
            <Button
                style={style.buttons}
                label=" 10 000 000zł"
                backgroundColor="gray"
            />
            <Button
                style={style.buttons}
                label="100 000 000zł"
                backgroundColor="gray"
            />
            <Button
                style={style.buttons}
                label="1 000 000 000zł"
                backgroundColor="gray"
            />
            <Button
                style={style.buttons}
                label="Tablica Rekordów"
                backgroundColor="gray"
            />
    </Paper>
)
export default ButtonStore