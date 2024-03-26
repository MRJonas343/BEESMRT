import NavBar from "./NavBar"
import { Link } from "react-router-dom"

const LogIn = () => {
    return (
        <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
            <NavBar/>
        <div className="flex justify-center">
            <div className="bg-white rounded-md p-7 mt-8 text-center w-96 shadow-2xl">
                <form>
                    <span className="font-Principal text-3xl">LOGIN</span> <br />
                    <div className="text-left">
                        Email: <br />
                        <input type="text" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2"/>
                    </div>
                    <div className="text-left pb-4">
                        Password <br />
                        <input type="password" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2"/>
                    </div>
                    <div>
                        <button className="border border-black font-Principal text-xl p-2 w-28 transition duration-300 hover:bg-yellow-300">LOGIN</button>
                    </div>
                    <Link to="/SignIn">
                    <div className="Footer-Login">
                        Don't you have a account yet? <br /> <a href="" className="text-indigo-700 font-semibold">Get an Account</a>
                    </div>
                    </Link>
                </form>
            </div>
        </div>
        </main>
    )
}
export default LogIn