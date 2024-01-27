import NavBar from "./NavBar"
import Card from "./Card"

const Home = () => { 
  return(
    <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">

      <NavBar/>
      
      <h1 className="text-center py-2 text-white text-3d2 font-Principal2 text-4xl from-neutral-400 md:text-6xl md:py-5">BEESMRT GAMES</h1>

      <section className="flex flex-wrap justify-center gap-8 md:justify-items-center md:h-[80vh]">

        <Card
        imageSrc="src/assets/perdida-de-memoria.png"
        title="Memory Game"
        text="A classic memory game, but when you find a couple of cards you will have to complete a sentence or answer a question."/>

        <Card
        imageSrc="src/assets/verdugo.png" 
        title="Hangman"
        text="Practice your vocabulary with a hangman, try to solve it before he is executed."/>

        <Card
        imageSrc="src/assets/arrastra-y-suelta.png"
        title="Drag and Drop"
        text="Drag and drop cards in fewer attempts than your opponent and win the game"/>

        <Card
        imageSrc="src/assets/brasil.png"
        title="Domain"
        text="Conquer your opponent's territories, enjoy a game similar to Chinese checkers while practicing your English."/> 
      </section>
      
    </main>
  )
}
export default Home

