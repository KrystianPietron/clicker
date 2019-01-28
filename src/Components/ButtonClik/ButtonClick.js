import React from 'react'
import Button from '../../Elements/Button'
import { connect } from 'react-redux'
import {buttonClickAction} from '../../state/game'
import './ButtonClick.css'

const ButtonClick = props => (
    <div className="ButtonClick">
        <Button
            label="Klik!"
            onClick={props.buttonClick}
        />
    </div>
)
const mapDispatchToProps = dispatch => ({
    buttonClick: () => dispatch(buttonClickAction())
})

export default connect(null, mapDispatchToProps)(ButtonClick)