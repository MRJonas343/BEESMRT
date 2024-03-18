import NavBar from "./NavBar"

const LogIn = () => {

    
    
    return (
        <main className="w-screen h-screen bg-Gradient1">
            <NavBar/>
            <h1 className="text-5xl text-center">Log In</h1>
            <section className="flex flex-col items-center">
                <input className="border border-gray-300 rounded-md px-3 py-2 mt-2" placeholder="Email" type="text"></input>
                <input className="border border-gray-300 rounded-md px-3 py-2 mt-2" placeholder="Password" type="password"></input>
                <div className="fb-login-button" data-width="200" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="false"></div>
            </section>
        </main>
    )
}
export default LogIn