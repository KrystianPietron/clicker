import React from 'react'
import Paper from 'material-ui/Paper'
import ButtonStore from '../ButtonStore'
import GameApp from '../GameApp'
import './Game.css'

const Game = props => (
    <Paper className="paper_Game">
        <ButtonStore />
        <GameApp/>
    </Paper>
)
export default Game
