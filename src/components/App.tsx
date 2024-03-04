import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import LogIn from "./LogIn"
import SignIn from "./SignIn"
import Contact from './Contact'
import About from './About'
import TableGame from './games/TableGame'

const App = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/LogIn" Component={LogIn}/>
                <Route path="/SignIn"Component={SignIn}/>
                <Route path="/Contact"Component={Contact}/>
                <Route path="/About"Component={About}/>
                <Route path="/games/TableGame/" Component={TableGame}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App