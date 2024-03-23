import NavBar from "./NavBar"
import Card from "./Card"
import { Link } from "react-router-dom"
import MemoryGameImg from '../assets/perdida-de-memoria.png'
import HangmanImg from '../assets/verdugo.png'
import DragImg from '../assets/arrastra-y-suelta.png'
import DomainImg from '../assets/brasil.png'


const Home: React.FC = () => { 
  return(
    <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
      <NavBar/>
      
      <h1 className="animate-tilt animate-duration-1000 animate-iteration-count-infinite  text-4xl text-center pb-3 text-white text-3d2 font-Principal2 from-neutral-400 md:text-4xl md:py-5 lg:text-6xl xl:py-6">BEESMRT GAMES</h1>
      <section className="grid grid-cols-2 justify-items-center gap-4 h-[77vh] lg:flex lg:justify-center lg:items-center lg:gap-6 lg:h-[70vh]">

        <Link to="/games/TableGame" className="flex">
          <Card
          imageSrc={MemoryGameImg}
          title="Memory Game"
          text="When you find a couple of cards you will have to complete a sentence or answer a question."/>
        </Link>

        <Link to="/games/HangmanGame" className="flex">
        <Card
        imageSrc={HangmanImg} 
        title="Hangman"
        text="Practice your vocabulary with a hangman, try to solve it before he is executed."/>
        </Link>

        <Link to="/games/Drag_Drop" className="flex">
        <Card
        imageSrc={DragImg}
        title="Drag and Drop"
        text="Drag and drop cards in fewer attempts than your opponent and win the game"/>
        </Link>
        
        <Card
        imageSrc={DomainImg}
        title="Domain"
        text="Conquer your opponent's territories, enjoy a game similar to Chinese checkers while practicing your English."/> 
      </section>
      
    </main>
  )
}
export default Home
