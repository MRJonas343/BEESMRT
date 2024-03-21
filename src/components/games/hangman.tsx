import NavBar from "../NavBar"
import { useState,useEffect } from "react"
import ModalMessage from "./ModalMessage"
import Key from "./Key"
import Words from "../games/wordList.json"
import Swords from './img/espadas.png'
import confetti from  'canvas-confetti'
import HangmanImg0 from "./img/hangman-0.svg"
import HangmanImg1 from "./img/hangman-1.svg"
import HangmanImg2 from "./img/hangman-2.svg"
import HangmanImg3 from "./img/hangman-3.svg"
import HangmanImg4 from "./img/hangman-4.svg"
import HangmanImg5 from "./img/hangman-5.svg"
import HangmanImg6 from "./img/hangman-6.svg"


const Hangman: React.FC = () => {
    
    //* Valores para el efecto confeti
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    
    //*Estados
    let [espacios, setEspacios] = useState<null[]>([])
    let [attemps, setAttemps] = useState(0)
    let [hangmanImg, setHangmanImg] = useState("")
    let [imageSrc, setImageSrc] = useState("")
    let [message, setMessage] = useState("")
    let [mainMessage, setMainMessage] = useState("")
    let [showModal, setShowModal] = useState(false)
    let [points, setPoints] = useState(0)
    const [wordToGess, setWordToGess] = useState("")
    const [hint, setHint] = useState("")

    //*Variables
    let Keys = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
                "P","Q","R","S","T","U","V","_","W","X","Y","Z"]

    //*Funciones
    function randomInRange(min : any, max : any) {
        return Math.random() * (max - min) + min;
    }

    function getWord(){
        return Words[Math.floor(Math.random() * Words.length)]
    }

    function playAgain(){
        let wordObject = getWord()
        setWordToGess(wordObject.word)
        setHint(wordObject.hint)
        let wordLength = wordObject.word.length
        espacios = Array(wordLength).fill(null)
        setEspacios(espacios)
        setAttemps(0)
        hangmanImg = HangmanImg0
        setHangmanImg(hangmanImg)
        setShowModal(false)
    }

    function handleKeyClick(e : any){
        let letter = (e.target.innerHTML).toLowerCase()
        let Word = wordToGess.toLocaleLowerCase()
        let indexes = [];
        for (let i = 0; i < Word.length; i++) {
            if (Word[i] === letter) {
                indexes.push(i)
            }
        }
        if (indexes.length > 0){
            let newEspacios = [...espacios]
            indexes.forEach(index => {
                setPoints(points + 1)
                newEspacios[index] = letter
            })
            setEspacios(newEspacios)
            let todosNoSonNull = newEspacios.every(function(elemento) {
                return elemento !== null
            })
            if (todosNoSonNull) {
                setMessage("You Win")
                setMainMessage("Congratulations")
                setImageSrc(Swords)
                setShowModal(true)
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

        } else{
            setAttemps(attemps + 1)
            if(attemps === 0){
                hangmanImg = HangmanImg1
                setHangmanImg(hangmanImg)
            } else if(attemps === 1){
                hangmanImg = HangmanImg2
                setHangmanImg(hangmanImg)
            } else if(attemps === 2){
                hangmanImg = HangmanImg3
                setHangmanImg(hangmanImg)
            } else if(attemps === 3){
                hangmanImg = HangmanImg4
                setHangmanImg(hangmanImg)
            } else if(attemps === 4){
                hangmanImg = HangmanImg5
                setHangmanImg(hangmanImg)
            } else if(attemps === 5){
                hangmanImg = HangmanImg6
                setHangmanImg(hangmanImg)
            }
        }
    }

    //*Efectos
    useEffect(() => {
        hangmanImg = HangmanImg0
        setHangmanImg(hangmanImg)
        let wordObject = getWord()
        setWordToGess(wordObject.word)
        setHint(wordObject.hint)
        let wordLength = wordObject.word.length
        espacios = Array(wordLength).fill(null)
        setEspacios(espacios)
    },[])

    useEffect(() => {
        if(attemps === 6){
            setImageSrc(Swords)
            setMessage("You Lose")
            setMainMessage("Game Over")
            setShowModal(true)
        }
    },[attemps])

    return (
    <>
    <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
        <NavBar/>
        <h1 className="text-3xl font-Principal2 text-white text-3d text-center my-2">Hangman</h1>
        <div className="bg-white w-11/12 h-auto rounded-lg mx-auto">
            <div className="flex w-full justify-center pt-4 pb-4">
                <img src={hangmanImg} className="w-48"></img>
            </div>
            <div className="font-bold h-16 items-end flex w-full justify-center gap-3">
                {espacios.map((element, index) => {
                    return (
                        <div key={index} className="text-center pt-7">
                                {element}
                            <div className="outline outline-black w-4 h-0 m-1 mb-4">
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mt-3 text-xl flex flex-col w-10/12 items-center mx-auto">
                <p className="font-Secundaria text-lg">{hint}</p>
                <p className="font-Secundaria text-lg mt-3">Incorrect Attempts: {attemps}/6</p>
            </div>
                <div onClick={handleKeyClick} className="grid grid-cols-9 gap-2 mt-4 mx-4">
                    {Keys.map((element, index) => {
                        return <Key key={index} element={element}/>
                    })}
                </div>
                <div className="flex w-full justify-around pt-5 pb-5">
                    <button className="text-base bg-red-600 rounded-md p-2 w-20 text-white" onClick={playAgain}>RESET</button>
                    <p className="text-base bg-green-500 rounded-md p-2 w-20 text-white">Points : {points}</p>
                </div>
            </div>
            <ModalMessage showModal={showModal} imageSrc={imageSrc} message={message} mainMessage={mainMessage} playAgain={playAgain} showModalWin={()=>setShowModal(!showModal)}/>
    </main>
    </>    
    )
}

export default Hangman