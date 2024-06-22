import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem'
import { useFetchDecks } from './useFetchDesk'

export const DecksList = () => {
  const { decks } = useFetchDecks()

  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
