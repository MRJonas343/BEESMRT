import { Link } from "react-router-dom"
import { useState } from "react"


const NavBar = ()=> {
    const [isExpanded, setIsExpanded] = useState(false)

    let btnClassName = isExpanded ? 'bg-close-menu w-6 h-5 bg-cover bg-center cursor-pointer transition-all z-50 md:hidden' : ' w-6 h-5 bg-cover bg-center cursor-pointer transition-all z-50 md:hidden bg-open-menu'

    const handlerClick = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <nav className="w-[90%] mx-auto overflow-hidden h-20 flex items-center justify-between font-Principal text-3xl text-3d text-white lg:text-4xl xl:w-screen xl:px-12 xl:text-5xl">
            <Link to='/' className="w-1/3 max-w-[240px]">
                <img alt="logo" src="src/assets/logo_white.png" className="w-40 md:w-48"></img>
            </Link>

            <label htmlFor="btn-open-menu" className={btnClassName} onClick={handlerClick}>
                
            </label>

            <input id="btn-open-menu" type="checkbox" className="peer hidden"/>

            <div className="fixed inset-0 translate-x-full peer-checked:translate-x-0 transition-transform md:static  md:translate-x-0 z-40">
                <ul className="bg-white absolute inset-x-0 top-24 p-12 w-[90%] mx-auto rounded-lg h-max text-center grid gap-10 md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/LogIn'>Log In</Link>
                    </li>
                    <li>
                        <Link to='/SignIn'>Sign Up</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/About'>About Us</Link>
                    </li>
                </ul>
            </div>

            <Link to="/LogIn" className="hidden lg:block">
                <button className="hidden lg:block w-max rounded-full text-3d">Get Started</button>
            </Link>

        </nav>
    )
}

export default NavBar