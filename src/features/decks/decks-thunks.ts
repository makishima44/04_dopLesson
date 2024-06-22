import { AddDeckParams, decksApi } from './decks-api'
import { addDeckAC, setDecksAC } from './decks-reducer'
import { Dispatch } from 'redux'

export const getDecksTC = () => (dispatch: Dispatch) => {
  decksApi.getDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDecksTC = (params: AddDeckParams) => (dispatch: Dispatch) => {
  return decksApi.createDeck(params).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}
