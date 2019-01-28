const CLICK_ACTION = "game/CLICK_ACTION"
const BUTTON_STORE1 = "game/BUTTON_STORE1"


const INITIAL_STATE = {
    score: 0,
    buttonClick: 1,
    buttonStore1: 2,
}
export const buttonClickAction = () => ({
    type: CLICK_ACTION
})

const buttonStore1Action = () => ({
    type: BUTTON_STORE1
})

export const buttonStore1 = () => (dispatch, getState) => {
    const { game: { score } } = getState();
        (score >= 100) ?
        dispatch(buttonStore1Action())
        :
        alert("za mało kasy")
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLICK_ACTION:
            return {
                ...state,
                score: state.score + state.buttonClick
            }
        case BUTTON_STORE1:
            return {
                ...state,
                score: state.score - 100,
                buttonClick: state.buttonClick + 1
            }
        default:
            return state
    }
}