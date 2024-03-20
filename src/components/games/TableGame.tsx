import { useState, useEffect } from "react"
import cardItems from "./cards.json"
import ButtonCard from "./ButtonCard"
import Stats from "./Stats"
import NavBar from "../NavBar"
import Modal from "./Modal"
import ModalMessage from "./ModalMessage"
import confetti from  'canvas-confetti'
import TrofeoImg from './img/trofeo.png'
import Swords from './img/espadas.png'

//*Objetos obtenidos del JSON
interface Card {
  id: number
  src: string
  matched: boolean
  question : string
  correctAnswer : string
  incorrectAnswers : any
}
  
const TableGame: React.FC = () => {
  //* Valores para el efecto confeti
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
  function randomInRange(min : any, max : any) {
    return Math.random() * (max - min) + min;
  }
  
  //*Estados del juego
  const [cards, setCards] = useState<Card[]>([])
  const [card1, setCard1] = useState<Card | null>(null)
  const [card2, setCard2] = useState<Card | null>(null)
  const [isPlayer1Active, setIsPlayer1Active] = useState(true)
  const [player1Points, setPlayer1Points] = useState(0)
  const [player2Points, setPlayer2Points] = useState(0)
  const [resetGame, setResetGame] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isModalWinOpen, setModalWinOpen] = useState(false)
  
  
  //*Estados para las modales !No cambiar a const
  let [question, setQuestion] = useState("")
  let [imageSrc, setImageSrc] = useState("")
  let [correctAnswerRef, setcorrectAnswerRef] = useState("")
  let [correctAnswer, setCorrectAnswer] = useState("")
  let [incorrectAnswer1, setIncorrectAnswer1] = useState("")
  let [incorrectAnswer2, setIncorrectAnswer2] = useState("")
  let [incorrectAnswer3, setIncorrectAnswer3] = useState("")
  let [mainMessage, setMainMessage] = useState("")
  let [message, setMessage] = useState("")
  let [imageMessage, setImageMessage] = useState("")

  //*Efectos
  useEffect(() => {
    initGame()
  }, [])

  useEffect(()=>{
    if(player1Points + player2Points === 12){
      if(player1Points > player2Points){
        mainMessage = "Victory"
        message = "Player 1 has won!!!"
        imageMessage = TrofeoImg
        setMainMessage(mainMessage)
        setMessage(message)
        setImageMessage(imageMessage)
        shoModalWin()
        
        let interval = setInterval(function() {
          let timeLeft = animationEnd - Date.now()
          if (timeLeft <= 0) {
            return clearInterval(interval)
          }
          let particleCount = 50 * (timeLeft / duration);
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
        }, 250)

        
      }else if(player1Points < player2Points){
        mainMessage = "Victory"
        message = "Player 2 has won!!!"
        imageMessage = TrofeoImg
        setMainMessage(mainMessage)
        setMessage(message)
        setImageMessage(imageMessage)
        shoModalWin()

        let interval = setInterval(function() {
          let timeLeft = animationEnd - Date.now()
          if (timeLeft <= 0) {
            return clearInterval(interval)
          }
          let particleCount = 50 * (timeLeft / duration)
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
        }, 250);
      }else{
        mainMessage = "Tiee!!!"
        message = "Good match"
        imageMessage = Swords
        setMainMessage(mainMessage)
        setMessage(message)
        setImageMessage(imageMessage)
        let interval = setInterval(function() {
          let timeLeft = animationEnd - Date.now()
          if (timeLeft <= 0) {
            return clearInterval(interval)
          }
          let particleCount = 50 * (timeLeft / duration);
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
        }, 250)
      }      
    }
  },[player1Points, player2Points])

  useEffect(() => {
    if(card1 && card2){
      if(card1.id === card2.id){
      setCard2(null)
      }else{
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
          correctAnswerRef = card1.correctAnswer
          setcorrectAnswerRef(correctAnswerRef)
          let shuffledAnswersArray = [correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3].sort(() => Math.random() - 0.5)
          setQuestion(question)
          setImageSrc(imageSrc)
          setCorrectAnswer(shuffledAnswersArray[0])
          setIncorrectAnswer1(shuffledAnswersArray[1])
          setIncorrectAnswer2(shuffledAnswersArray[2])
          setIncorrectAnswer3(shuffledAnswersArray[3])
          openModal()
        } else {
          setTimeout(()=>{
            setIsPlayer1Active((prevIsPlayer1Active) => !prevIsPlayer1Active) // Cambiar el turno
          }, 1000) 
        }
        setTimeout(() => {
          setCard1(null)
          setCard2(null) 
        }, 1000);
      }
    }
  }, [card1, card2])

  //*Funciones
  const openModal = () => {
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

  const shoModalWin = () =>{
    setModalWinOpen(!isModalWinOpen)
  }

  const playAgain = () => {
    setResetGame(!resetGame)
    setPlayer1Points(0)
    setPlayer2Points(0)
    setCard1(null)
    setCard2(null)
    setIsPlayer1Active(true)
    initGame()
    if (isModalWinOpen){
      setModalWinOpen(!isModalWinOpen)
    }
  }

  const handleSubmit =(e : any) =>{
    e.preventDefault()
    //obtener los radios
    const Form = new FormData(e.target)
    let answer =  Form.get('Answer')
    if(correctAnswerRef === answer){
      if(isPlayer1Active){
        setPlayer1Points( player1Points + 1)
      }else{
        setPlayer2Points(player2Points + 1)
      } 
    } else {
      setCards((prevCards) =>
          prevCards.map((item) =>
            item.src === imageSrc ? { ...item, matched: false } : item
          )
        )
        setIsPlayer1Active((prevIsPlayer1Active) => !prevIsPlayer1Active)
    }
    setShowModal(!showModal)
  }

  return (
    <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
            <NavBar/>
            <div className="flex mt-4 flex-col gap-3 mb-1 xl:flex-row xl:justify-center">
                <Stats
                isPlayer1Active={isPlayer1Active}
                player1Points={player1Points}
                player2Points={player2Points}
                playAgain={playAgain}
                />
                  <div>
                    <h1 className="text-2xl font-Principal2 text-white pb-3 text-3d lg:text-4xl text-center xl:ml-[30%] xl:text-start">
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
            <ModalMessage 
              imageSrc={imageMessage} 
              message={message} 
              showModal={isModalWinOpen} 
              mainMessage={mainMessage}
              playAgain={playAgain}
              showModalWin={shoModalWin}/>
        </main>
  )
}

export default TableGame


