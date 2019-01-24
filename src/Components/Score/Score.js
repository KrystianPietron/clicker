import React from 'react'
import Paper from 'material-ui/Paper'
import './Score.css'

const Score = props => (
    <Paper className="paper_Score"
        zDepth={3}>
        <div className="div__Score">
            <h4>Zdobyta Gotówka: </h4>
            <h4>Score</h4>
        </div>
    </Paper>
)
export default Score