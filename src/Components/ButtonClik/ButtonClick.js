import React from 'react'
import Button from '../../Elements/Button'
import { connect } from 'react-redux'
import './ButtonClick.css'

const ButtonClick = props => (
    <div className="ButtonClick">
        <Button
            label="Klik!"
        />
    </div>
)
const mapDispatchToProps = dispatch => ({

})

export default connect()(ButtonClick)