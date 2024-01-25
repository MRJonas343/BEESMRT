import { Link } from "react-router-dom"

const NavBar = ()=>{
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <Link to='/'>Ir al Home</Link>
                </li>
                <li>
                    <Link to='/LogIn'>Ir al Login</Link>
                </li>
                <li>
                    <Link to='/SignIn'>Ir al Sign In</Link>
                </li>
                <li>
                    <Link to='/Contact'>Ir al Contacto Us</Link>
                </li>
                <li>
                    <Link to='/About'>Ir al About Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar