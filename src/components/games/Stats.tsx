import { useState,useEffect } from "react"
interface StatProps {
    isPlayer1Active : boolean
    player1Points : number
    player2Points : number
    playAgain : () => void
}

const Stats : React.FC<StatProps> = ({ isPlayer1Active, player1Points, player2Points, playAgain }) =>{

    //*Intentemos hacerlo como estado

    let [Player1Class, setPlayer1Class] = useState("")
    let [Player2Class, setPlayer2Class] = useState("")

    useEffect(() => {
        if (isPlayer1Active) {
            setPlayer1Class("text-base rounded-sm p-1 mb-2 outline outline-blue-600")
            setPlayer2Class("text-base rounded-sm p-1 mb-2")
        } else {
            setPlayer1Class("text-base rounded-sm p-1 mb-2")
            setPlayer2Class("text-base rounded-sm p-1 mb-2 outline outline-blue-600")
        }
    }, [isPlayer1Active])

    

    return (
    <section className="flex justify-evenly xl:flex-col xl:h-[80vh]">
        <div className="bg-white/80 px-8 py-2 font-Principal2 text-center rounded-xl md:w-56">
            <h2 className="text-lg mb-2">TURN: </h2>
            <p className={Player1Class}>PLAYER 1</p>
            <p className={Player2Class}>PlAYER 2</p>
        </div>
        <div className="bg-white/80 px-8 py-3 font-Principal2 text-center rounded-xl md:w-56">
            <h2 className="text-lg mb-2">SCORE</h2>
            <p className="text-base p-1 mb-2">PlAYER 1: {player1Points}</p>
            <p className="text-base p-1 mb-2">PlAYER 2: {player2Points}</p>
            <button className="text-base bg-red-600 rounded-md p-1 w-full text-white" onClick={playAgain}>RESET</button>
        </div>
    </section>
    )
}

export default Stats