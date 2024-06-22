import { Deck } from './decks-api'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

type setDecksActionType = ReturnType<typeof setDecksAC>
type addDecksActionType = ReturnType<typeof addDeckAC>

type DecksActions = setDecksActionType | addDecksActionType

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS': {
      return {
        ...state,
        decks: action.decks,
      }
    }

    case 'ADD-DECK': {
      return {
        ...state,
        decks: [action.deck, ...state.decks],
      }
    }

    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) =>
  ({
    type: 'SET-DECKS',
    decks,
  }) as const

export const addDeckAC = (deck: Deck) => ({
  type: 'ADD-DECK' as const,
  deck,
})
