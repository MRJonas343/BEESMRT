import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

const SignIn: React.FC = () =>{

    const { register, formState :{errors}, handleSubmit, reset} = useForm()

    function getForm(data: object){
        console.log(data)
        reset()
    }

    function chekPassword(e: React.ChangeEvent<HTMLInputElement>){
        const password = (document.querySelector('input[name="password"]') as HTMLInputElement).value
        if(e.target.value !== password){
            e.target.setCustomValidity("Passwords don't match")
        }else{
            e.target.setCustomValidity("")
        }
    }

    return (
        <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
            <NavBar/>
            <div className="flex justify-center">
                <div className="bg-white rounded-md p-7 mt-8 text-center w-96 shadow-2xl">
                    <form onSubmit={handleSubmit(getForm)}>
                        <span className="font-Principal text-3xl">Create an Account</span> <br />
                        <div className="text-left">
                            Full Name: <br />
                            <input autoComplete="username" type="text" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2"
                                {...register("fullName",{
                                    required: true, 
                                    minLength: 5, 
                                    maxLength: 50,
                                    pattern: /^[A-Za-z]+$/i
                            })}/>
                            {
                                errors.fullName?.type === "required" && 
                                <p className="text-red-600">This field is required</p>
                            }
                            {
                                errors.fullName?.type === "minLength" && 
                                <p className="text-red-600">Your name should have 5 letters at least</p>
                            }
                            {
                                errors.fullName?.type === "maxLength" && 
                                <p className="text-red-600">Your name can't be longer that 50 letters</p>
                            }
                            {
                                errors.fullName?.type === "pattern" && 
                                <p className="text-red-600">Your name should just have letters</p>
                            }
                        </div>

                        <div className="text-left">
                            Nick Name: <br />
                            <input className="bg-gray-100 border border-black rounded-md w-full h-9 p-2"
                            {...register("nickName",{
                                required: true, 
                                minLength: 5, 
                                maxLength: 50,
                            })}/>
                            {
                                errors.nickName?.type === "required" && 
                                <p className="text-red-600">This field is required, you will be able to change your Nick name later</p>
                            }
                            {
                                errors.nickName?.type === "minLength" && 
                                <p className="text-red-600">Your nickname should have 5 letters at least</p>
                            }
                            {
                                errors.nickName?.type === "maxLength" && 
                                <p className="text-red-600">Your nickname can't be longer that 50 letters</p>
                            }
                        </div>

                        <div className="text-left">
                            Email: <br />
                            <input autoComplete="email" type="text" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2"
                            {...register("email",{
                                required: true, 
                                pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i
                            })}/>
                            {
                                errors.email?.type === "required" && 
                                <p className="text-red-600">This field is required</p>
                            }
                            {
                                errors.email?.type === "pattern" && 
                                <p className="text-red-600">This email is not valid</p>
                            }
                        </div>
                        <div className="text-left">
                            Password: <br />
                            <input type="password" autoComplete="new-password" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2"
                            {...register("password",{
                                required: true, 
                                minLength: 8, 
                                maxLength: 20,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_=+]).{8,}$/i
                            })}/>
                            {
                                errors.password?.type === "required" && 
                                <p className="text-red-600">This field is required</p>
                            }
                            {
                                errors.password?.type === "minLength" && 
                                <p className="text-red-600">Your password should have 8 characters at least</p>
                            }
                            {
                                errors.password?.type === "maxLength" && 
                                <p className="text-red-600">Your password can't be longer that 20 characters</p>
                            }
                            {
                                errors.password?.type === "pattern" && 
                                <p className="text-red-600">Your password should have at least one uppercase letter, one lowercase letter, one number and one special character</p>
                            }
                        </div>
                        <div className="text-left">
                            Confirm password: <br />
                            <input type="password" autoComplete="current-password" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2" onChange={chekPassword}/>
                            <br />
                            <div className="flex justify-center pt-4 pb">
                                <button className="border border-black font-Principal text-xl p-2 w-28  hover:bg-yellow-300">REGISTER</button>
                            </div>
                            <div className="Footer-Login">
                                Do you already have an account?? <br /> <Link to="/LogIn" className="text-indigo-700 font-semibold">Go to LogIn</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>    
    )
}

export default SignIn

