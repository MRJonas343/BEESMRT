import NavBar from "../NavBar"
import TableGame from "./TableGame"
import Stats from "./Stats"

const MemoryGame = () => {
    return (
        <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
            <NavBar imageSrc="/src/assets/logo_white.png"/>
            <div className="flex flex-col gap-8 mb-3 xl:flex-row xl:justify-center">
                <Stats/>
                <TableGame/>
            </div>
        </main>
    )
}
export default MemoryGame