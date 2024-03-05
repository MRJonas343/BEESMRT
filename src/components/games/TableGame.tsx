import React, { useState, useEffect } from "react"
import cardItems from "./cards.json"
import ButtonCard from "./ButtonCard"
import Stats from "./Stats"
import NavBar from "../NavBar"
import Modal from "./Modal"
interface Card {
  id: number
  src: string
  matched: boolean
  question : string
  correctAnswer : string
  incorrectAnswers : any
}

const TableGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([])
  const [card1, setCard1] = useState<Card | null>(null)
  const [card2, setCard2] = useState<Card | null>(null)
  const [isPlayer1Active, setIsPlayer1Active] = useState(true)
  const [player1Points, setPlayer1Points] = useState(0)
  const [player2Points, setPlayer2Points] = useState(0)
  const [resetGame, setResetGame] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  
  //State para las preguntas
  let [question, setQuestion] = useState("")
  let [imageSrc, setImageSrc] = useState("")
  let [correctAnswer, setCorrectAnswer] = useState("")
  let [incorrectAnswer1, setIncorrectAnswer1] = useState("")
  let [incorrectAnswer2, setIncorrectAnswer2] = useState("")
  let [incorrectAnswer3, setIncorrectAnswer3] = useState("")


  function openModal(){
    setShowModal(!showModal)
  }

  function handleSubmit(e : any){
    e.preventDefault()
    //obtener los radios
    const Form = new FormData(e.target)
    let answer =  Form.get('Answer')
    //correctAnswer
    if(correctAnswer === answer){
      if(isPlayer1Active){
        setPlayer1Points( player1Points + 1)
      }else{
        setPlayer2Points(player2Points + 1)
      } 
    }else{
      console.log(imageSrc)
      
      setCards((prevCards) =>
          prevCards.map((item) =>
            item.src === imageSrc ? { ...item, matched: false } : item
          )
        )
      
    }
    setShowModal(!showModal)
  }

  const chooseCard = (card: Card) => {
    card1 ? setCard2(card) : setCard1(card)
  }

  const initGame = () => {
    const allCards = [...cardItems, ...cardItems]
      .map((item, index) => ({ ...item, id: index }))
      .sort(() => Math.random() - 0.5)
    setCards(allCards)
  }

  useEffect(() => {
    initGame()
  }, [])

  function playAgain(){
    setResetGame(!resetGame)
    setPlayer1Points(0)
    setPlayer2Points(0)
    setCard1(null)
    setCard2(null)
    setIsPlayer1Active(true)
    initGame()
  }

  useEffect(() => {
    if (card1 && card2) {
      if (card1.src === card2.src) {


        setCards((prevCards) =>
          prevCards.map((item) =>
            item.src === card1.src ? { ...item, matched: true } : item
          )
        )

        question = card1.question
        imageSrc = card1.src
        correctAnswer = card1.correctAnswer
        incorrectAnswer1 = card1.incorrectAnswers[0]
        incorrectAnswer2 = card1.incorrectAnswers[1]
        incorrectAnswer3 = card1.incorrectAnswers[2]
        setQuestion(question)
        setImageSrc(imageSrc)
        setCorrectAnswer(correctAnswer)
        setIncorrectAnswer1(incorrectAnswer1)
        setIncorrectAnswer2(incorrectAnswer2)
        setIncorrectAnswer3(incorrectAnswer3)
        openModal()
    
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
      alert("Juego finalizado")
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
            <button onClick={openModal}>Open Modal</button>
            <Modal
              showModal={showModal}
              Question={question}
              imageSrc={imageSrc}
              answer1={correctAnswer}
              answer2={incorrectAnswer1}
              answer3={incorrectAnswer2}
              answer4={incorrectAnswer3}
              handleSubmit={handleSubmit}
            />
        </main>
    
    </>
  );
};

export default TableGame


