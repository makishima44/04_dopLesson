import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { getDecksTC } from '../decks-thunks'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector((state) => state.decksReducer.decks)

  useEffect(() => {
    dispatch(getDecksTC())
  }, [dispatch])

  return  {
    decks,
  }
}
