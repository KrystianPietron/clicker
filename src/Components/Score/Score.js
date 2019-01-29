import React from 'react'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import './Score.css'

const Score = props => (
    <section>
        <Paper className="paper_Score"
            zDepth={3}>
            <article className="div__Score">
                <h4>Zdobyta Gotówka: </h4>
                <h4>{props.score} ZŁ</h4>
            </article>
        </Paper>
    </section>
)
const mapStateToProps = state => ({
    score: state.game.score,
})
export default connect(mapStateToProps, null)(Score)