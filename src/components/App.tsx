import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import LogIn from "./LogIn"
import SignIn from "./SignIn"
import Contact from './Contact'
import About from './About'
import MyAccount from './MyAccount'
import TableGame from './games/TableGame'
import HangmanGame from './games/HangmanGame'
import Drag_Drop from './games/Drag_Drop'
import PrivacyPolicy from './PrivacyPolicy'

const App = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/LogIn" Component={LogIn}/>
                <Route path="/SignIn"Component={SignIn}/>
                <Route path="/Contact"Component={Contact}/>
                <Route path="/About"Component={About}/>
                <Route path="/MyAccount" Component={MyAccount}/>
                <Route path="/games/TableGame" Component={TableGame}/>
                <Route path="/games/HangmanGame" Component={HangmanGame}/>
                <Route path="/games/Drag_Drop" Component={Drag_Drop}/>
                <Route path="/PrivacyPolicy" Component={PrivacyPolicy}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App