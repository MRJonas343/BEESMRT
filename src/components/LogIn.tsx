import NavBar from "./NavBar"

const LogIn = () => {
    return (
        <main className="w-screen h-screen bg-Gradient1">
            <NavBar/>
            <h1 className="text-5xl text-center">Log In</h1>
            <section className="flex flex-col items-center">
                <input className="border border-gray-300 rounded-md px-3 py-2 mt-2" placeholder="Email" type="text"></input>
                <input className="border border-gray-300 rounded-md px-3 py-2 mt-2" placeholder="Password" type="password"></input>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit">Log in</button>
            </section>
        </main>
    )
}
export default LogIn