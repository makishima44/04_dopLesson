import { decksApi } from './decks-api'
import { setDecksAC } from './decks-reducer'
import { Dispatch } from 'redux'

export const getDecksTC = () => (dispatch: Dispatch) => {
  decksApi.getDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}
