const CLICK_ACTION = "game/CLICK_ACTION"
const BUTTON_STORE1 = "game/BUTTON_STORE1"
const BUTTON_STORE2 = "game/BUTTON_STORE2"

const INITIAL_STATE = {
    score: 0,
    buttonClick: 1,
    buttonStore1: 2,
    buttonStore2: 10
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
        alert("za mało Gotówki")
}

const buttonStore2Action = () => ({
    type: BUTTON_STORE2
})

export const buttonStore2 = () => (dispatch, getState) => {
    const { game: { score } } = getState();
    (score >= 1000) ?
        dispatch(buttonStore2Action())
        :
        alert("zbyt mało Gotówki")
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
        case BUTTON_STORE2:
            return {
                ...state,
                score: state.score - 1000,
                buttonClick: state.buttonClick + 50
            }
        default:
            return state
    }
}