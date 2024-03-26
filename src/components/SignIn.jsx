import NavBar from "./NavBar"
// import "./Signin.css"

const SignIn = () =>{
    return (
        <main className="w-screen h-screen bg-Gradient1">
            <NavBar/>
            <div className="flex justify-center">
                <div className="bg-white rounded-md p-7 mt-8 text-center w-96 shadow-2xl">
                    <span className="font-Principal text-3xl">Create an Account</span> <br />
                    <div className="text-left">
                        Name: <br />
                        <input type="text" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2"/>
                    </div>
                    <div className="text-left">
                        Username: <br />
                        <input type="text" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2"/>
                    </div>
                    <div className="text-left">
                        Email: <br />
                        <input type="text" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2"/>
                    </div>
                    <div className="text-left">
                        Password: <br />
                        <input type="password" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2"/>
                    </div>
                    <div className="text-left">
                        Confirm password: <br />
                        <input type="password" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2"/>
                        <br />
                        <div className="flex justify-center pt-4 pb">
                            <button className="border border-black font-Principal text-xl p-2 w-28  hover:bg-yellow-300">REGISTER</button>
                        </div>
                        <div className="Footer-Login">
                            Do you already have an account?? <br /> <a href="" className="text-indigo-700 font-semibold">Get an Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignIn