import { Link } from "react-router-dom"
import { useState } from "react"

interface NavProps {
    imageSrc?: string;
}

const NavBar: React.FC<NavProps> = ({ imageSrc="src/assets/logo_white.png" })=> {
    const [isExpanded, setIsExpanded] = useState(false)

    let btnClassName = isExpanded ? 'bg-close-menu w-6 h-5 bg-cover bg-center cursor-pointer transition-all z-50 md:hidden' : ' w-6 h-5 bg-cover bg-center cursor-pointer transition-all z-50 md:hidden bg-open-menu'

    const handlerClick = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <nav className="w-[95%] px-6 mx-auto overflow-hidden h-20 flex items-center justify-between font-Principal text-3xl text-3d text-white lg:text-4xl xl:w-screen xl:px-12 xl:text-5xl">
            <Link to='/' className="w-1/3 max-w-[240px] hover:scale-110 ease-in-out duration-200">
                <img alt="logo" src={imageSrc} className="w-40 md:w-48"></img>
            </Link>

            <label htmlFor="btn-open-menu" className={btnClassName} onClick={handlerClick}>
                
            </label>

            <input id="btn-open-menu" type="checkbox" className="peer hidden"/>

            <div className="fixed inset-0 translate-x-full peer-checked:translate-x-0 transition-transform md:static  md:translate-x-0 z-40">
                <div className="">
                <ul className="bg-white absolute inset-x-0 top-24 p-12 w-[90%] mx-auto rounded-lg h-max text-center grid gap-10 md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">
                    <li className="hover:scale-110 ease-in-out duration-200 hover:text-purple-500">
                        <Link to='/LogIn'>Log In</Link>
                    </li>
                    <li className="hover:scale-110 ease-in-out duration-200 hover:text-purple-500">
                        <Link to='/SignIn'>Sign In</Link>
                    </li>
                    <li className="hover:scale-110 ease-in-out duration-200 hover:text-purple-500">
                        <Link to='/Contact'>Contact Us</Link>
                    </li>
                    <li className="hover:scale-110 ease-in-out duration-200 hover:text-purple-500">
                        <Link to='/About'>About Us</Link>
                    </li>
                </ul>
                </div>
            </div>

            <Link to="/LogIn" className="hidden xl:block hover:scale-110 ease-in-out duration-200 hover:text-purple-500">
                <button className="hidden lg:block w-max text-3d">Upgrade</button>
            </Link>

        </nav>
    )
}

export default NavBar