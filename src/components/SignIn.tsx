import NavBar from "./NavBar"

const SignIn = () =>{
    return (
        <main className="w-screen h-screen bg-Gradient1">
            <NavBar/>
            <h1 className="text-5xl text-center">Sign in</h1>
            <div className="container mx-auto max-w-sm p-4">
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium mb-1">
                            Username
                        </label>
                        <input type="text" id="username" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email address
                </label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                    Password
                </label>
                <input type="password" id="password" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                    Confirm Password
                </label>
                <input type="password" id="confirmPassword" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
        <button type="submit" className="w-full px-3 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign Up
        </button>
      </form>
    </div>
        </main>
    )
}

export default SignIn