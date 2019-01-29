import React from 'react'
import Button from '../../Elements/Button'
import { connect } from 'react-redux'
import { buttonClickAction } from '../../state/game'
import './ButtonClick.css'
import zdjecie from '../../img.png'

const ButtonClick = props => (
    <section>
        <article className="ButtonClick">
            <img src={zdjecie} alt="click image"
                onClick={props.buttonClick}
            />
        </article>
        <article className="ButtonLevelUp">
            <Button
                label="Podnieś Poziom"
            />
        </article>
    </section>
)
const mapDispatchToProps = dispatch => ({
    buttonClick: () => dispatch(buttonClickAction())
})

export default connect(null, mapDispatchToProps)(ButtonClick)