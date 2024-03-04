import React, { useState, useEffect } from "react"
import cardItems from "./cards.json"
import ButtonCard from "./ButtonCard"
import Stats from "./Stats"
import NavBar from "../NavBar"
interface Card {
  id: number
  src: string
  matched: boolean
}

const TableGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([])
  const [card1, setCard1] = useState<Card | null>(null)
  const [card2, setCard2] = useState<Card | null>(null)
  const [isPlayer1Active, setIsPlayer1Active] = useState(true)
  const [player1Points, setPlayer1Points] = useState(0)
  const [player2Points, setPlayer2Points] = useState(0)
  const [resetGame, setResetGame] = useState(false)



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

  useEffect(()=>{
    initGame()
  }, [resetGame])

  function playAgain(){
    setResetGame(!resetGame)
    setPlayer1Points(0)
    setPlayer2Points(0)
    setCard1(null)
    setCard2(null)
    setIsPlayer1Active(true)
  }

  useEffect(() => {
    if (card1 && card2) {
      if (card1.src === card2.src) {
        setCards((prevCards) =>
          prevCards.map((item) =>
            item.src === card1.src ? { ...item, matched: true } : item
          )
        )
        if(isPlayer1Active){
          setPlayer1Points( player1Points + 1)
        }else{
          setPlayer2Points(player2Points + 1)
        } 
        console.log(player1Points + player2Points)
      } else {
        setTimeout(()=>{
          setIsPlayer1Active((prevIsPlayer1Active) => !prevIsPlayer1Active); // Cambiar el turno
        }, 1500) 
      }
      setTimeout(() => {
        setCard1(null)
        setCard2(null) 
      }, 1500);
    }
    if(player1Points + player2Points === 12){
      playAgain()
    }
  }, [card1, card2])

  

  return (
    <>
    <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
            <NavBar imageSrc="/src/assets/logo_white.png"/>
            <div className="flex flex-col gap-8 mb-3 xl:flex-row xl:justify-center">
                <Stats
                isPlayer1Active={isPlayer1Active}
                player1Points={player1Points}
                player2Points={player2Points}
                playAgain={playAgain}
                />
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
            </div>
        </main>
    
    </>
  );
};

export default TableGame


