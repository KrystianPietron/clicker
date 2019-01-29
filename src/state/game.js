import React from 'react'
import Dialog from '../Elements/Dialog'

const CLICK_ACTION = "game/CLICK_ACTION"
const BUTTON_STORE1 = "game/BUTTON_STORE1"
const BUTTON_STORE2 = "game/BUTTON_STORE2"
const BUTTON_STORE3 = "game/BUTTON_STORE3"
const BUTTON_STORE4 = "game/BUTTON_STORE4"
const BUTTON_STORE5 = "game/BUTTON_STORE5"
const BUTTON_STORE6 = "game/BUTTON_STORE6"
const BUTTON_STORE7 = "game/BUTTON_STORE7"
const BUTTON_STORE8 = "game/BUTTON_STORE8"

const INITIAL_STATE = {
    score: 0,
    buttonClick: 1,
    buttonStore1: 0,
    buttonStore2: 0,
    buttonStore3: 0,
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
        alert("zbyt mało Gotówki")
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

const buttonStore3Action = () => ({
    type: BUTTON_STORE3
})
export const buttonStore3 = () => (dispatch, getState) => {
    const { game: { score } } = getState();
    (score >= 10000) ?
        dispatch(buttonStore3Action())
        :
        alert("zbyt mało Gotówki")
}

const buttonStore4Action = () => ({
    type: BUTTON_STORE4
})
export const buttonStore4 = () => (dispatch, getState) => {
    const { game: { score } } = getState();
    (score >= 100000) ?
        dispatch(buttonStore4Action())
        :
        alert("zbyt mało Gotówki")
}

const buttonStore5Action = () => ({
    type: BUTTON_STORE5
})
export const buttonStore5 = () => (dispatch, getState) => {
    const { game: { score } } = getState();
    (score >= 1000000) ?
        dispatch(buttonStore5Action())
        :
        alert("zbyt mało Gotówki")
}

const buttonStore6Action = () => ({
    type: BUTTON_STORE6
})
export const buttonStore6 = () => (dispatch, getState) => {
    const { game: { score } } = getState();
    (score >= 10000000) ?
        dispatch(buttonStore6Action())
        :
        alert("zbyt mało Gotówki")
}

const buttonStore7Action = () => ({
    type: BUTTON_STORE7
})
export const buttonStore7 = () => (dispatch, getState) => {
    const { game: { score } } = getState();
    (score >= 100000000) ?
        dispatch(buttonStore7Action())
        :
        alert("zbyt mało Gotówki")
}

const buttonStore8Action = () => ({
    type: BUTTON_STORE8
})
export const buttonStore8 = () => (dispatch, getState) => {
    const { game: { score } } = getState();
    (score >= 1000000000) ?
        dispatch(buttonStore8Action())
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
        case BUTTON_STORE3:
            return {
                ...state,
                score: state.score - 10000,
                buttonClick: state.buttonClick + 100
            }
        case BUTTON_STORE4:
            return {
                ...state,
                score: state.score - 100000,
                buttonClick: state.buttonClick + 1000,
            }
        case BUTTON_STORE5:
            return {
                ...state,
                score: state.score - 1000000,
                buttonClick: state.buttonClick + 10000,
            }
        case BUTTON_STORE6:
            return {
                ...state,
                score: state.score - 10000000,
                buttonClick: state.buttonClick + 100000,
            }
        case BUTTON_STORE7:
            return {
                ...state,
                score: state.score - 100000000,
                buttonClick: state.buttonClick + 1000000,
            }
        case BUTTON_STORE8:
            return {
                ...state,
                score: state.score - 1000000000,
                buttonClick: state.buttonClick + 10000000,
            }
        default:
            return state
    }
}