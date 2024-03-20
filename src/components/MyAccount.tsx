import NavBar from "./NavBar"
import Man from "../assets/brunette-man-isolated-white-background.jpg"

const MyAccount = () => {

  const backgroundImg = "w-11/12 h-56 mx-auto my-10 bg-white rounded-2xl p-10"

  return (
    <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
      <NavBar />
      <section className={backgroundImg}>
        <div className="bg-transparent-400 w-full justify-center flex h-52 items-end">
          <div className="bg-red-500 w-28 h-28 rounded-full">
            <img className="rounded-full" src={Man}></img>
          </div>
        </div>
      </section>
    </main>
  )
}
export default MyAccount