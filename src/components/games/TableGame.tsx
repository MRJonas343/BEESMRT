import React, { useState, useEffect } from "react"
import cardItems from "./cards.json"
import ButtonCard from "./ButtonCard"

interface Card {
  id: number
  src: string
  matched: boolean
}

const TableGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([])
  const [card1, setCard1] = useState<Card | null>(null)
  const [card2, setCard2] = useState<Card | null>(null)

  const chooseCard = (card: Card) => {
    card1 ? setCard2(card) : setCard1(card)
  };

  const initGame = () => {
    const allCards = [...cardItems, ...cardItems]
      .map((item, index) => ({ ...item, id: index }))
      .sort(() => Math.random() - 0.5)
    setCards(allCards)
  };

  useEffect(() => {
    initGame()
  }, [])

  useEffect(() => {
    if (card1 && card2) {
      if (card1.src === card2.src) {
        setCards((prevCards) =>
          prevCards.map((item) =>
            item.src === card1.src ? { ...item, matched: true } : item
          )
        );
      }
      setTimeout(() => {
        setCard1(null)
        setCard2(null)
      }, 1500);
    }
  }, [card1, card2])

  return (
    <div>
      <h1 className="text-4xl font-Principal2 text-white pb-5 text-3d lg:text-7xl text-center xl:ml-[30%] xl:text-start">
        Memory Game
      </h1>

      <section className="grid grid-cols-4 bg-white/40 p-5 mx-5 justify-items-center rounded-xl gap-4 md:grid-cols-6 xl:p-10">
        {cards.map((card) => (
          <ButtonCard
            key={card.id}
            card={card}
            chooseCard={chooseCard}
            flipped={card === card1 || card === card2 || card.matched}
          />
        ))}
      </section>
    </div>
  );
};

export default TableGame


