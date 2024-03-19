import NavBar from "./NavBar"
import Card from "./Card"
import { Link } from "react-router-dom"
import MemoryGameImg from '../assets/perdida-de-memoria.png'
import HangmanImg from '../assets/verdugo.png'
import DragImg from '../assets/arrastra-y-suelta.png'
import DomainImg from '../assets/brasil.png'

const Home: React.FC = () => { 
  console.log("Por que no funciona?" + MemoryGameImg)
  return(
    <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
      <NavBar/>
      
      <h1 className="text-center pb-3 text-white text-3d2 font-Principal2 text-2xl from-neutral-400 md:text-5xl md:py-5 xl:text-4xl xl:py-14">BEESMRT GAMES</h1>
      <section className="grid grid-cols-2 justify-items-center gap-6 h-[80vh] lg:flex lg:justify-center lg:items-center lg:gap-9 lg:h-[70vh]">

        <Link to="/games/TableGame" className="flex">
          <Card
          imageSrc={MemoryGameImg}
          title="Memory Game"
          text="When you find a couple of cards you will have to complete a sentence or answer a question."/>
        </Link>

        <Card
        imageSrc={HangmanImg} 
        title="Hangman"
        text="Practice your vocabulary with a hangman, try to solve it before he is executed."/>

        <Card
        imageSrc={DragImg}
        title="Drag and Drop"
        text="Drag and drop cards in fewer attempts than your opponent and win the game"/>

        <Card
        imageSrc={DomainImg}
        title="Domain"
        text="Conquer your opponent's territories, enjoy a game similar to Chinese checkers while practicing your English."/> 
      </section>
      
    </main>
  )
}
export default Home
