import NavBar from "../NavBar"
const Hangman: React.FC = () => {
    
    return (
    <>
    <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
        <NavBar/>
        <h1 className="text-3xl font-Principal2 text-white text-3d text-center">Hangman</h1>
    </main>
    </>    
    )
}

export default Hangman