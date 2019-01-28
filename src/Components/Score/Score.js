import React from 'react'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import './Score.css'

const Score = props => (
    <Paper className="paper_Score"
        zDepth={3}>
        <div className="div__Score">
            <h4>Zdobyta Gotówka: </h4>
            <h4>{props.score} ZŁ</h4>
        </div>
    </Paper>
)
const mapStateToProps = state => ({
    score: state.game.score,
})
export default connect(mapStateToProps, null)(Score)