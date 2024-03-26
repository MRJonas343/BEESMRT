import NavBar from "./NavBar"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { FacebookLoginButton, XLoginButton } from "react-social-login-buttons"
// @ts-ignore
import { LoginSocialFacebook, LoginSocialTwitter } from 'reactjs-social-login'


const LogIn: React.FC = () => {

    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    function getForm(data: object) {
        console.log(data)
        reset()
        navigate("/MyAccount")
    }

    return (
        <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
            <LoginSocialFacebook></LoginSocialFacebook>
            <NavBar/>
        <div className="flex justify-center">
            <div className="bg-white rounded-md p-7 mt-8 text-center w-96 shadow-2xl">
                <form onSubmit={handleSubmit(getForm)}>
                    <span className="font-Principal text-3xl">LOGIN</span> <br />
                    <div className="text-left">
                        Email: <br />
                        <input type="text" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2" autoComplete="email"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i
                        })} />
                        {
                            errors.email?.type === "required" &&
                            <p className="text-red-600">This field is required</p>
                        }
                        {
                            errors.email?.type === "pattern" &&
                            <p className="text-red-600">This email is not valid</p>
                        }
                    </div>
                    <div className="text-left pb-4">
                        Password <br />
                        <input type="password" className="bg-gray-100 border border-black rounded-md w-full h-9 p-2" autoComplete="current-password"
                        {...register("password", {
                            required: true,
                            minLength: 8
                        })} />
                        {
                            errors.password?.type === "required" &&
                            <p className="text-red-600">This field is required</p>
                        }
                        {
                            errors.password?.type === "minLength" &&
                            <p className="text-red-600">This password is not valid</p>
                        }
                    </div>
                    <div>
                        <button className="border border-black font-Principal text-xl p-2 w-28 transition duration-300 hover:bg-yellow-300">LOGIN</button>
                    </div>
                    <Link to="/SignIn">
                    <div className="Footer-Login">
                        Don't you have a account yet? <br /> <span className="text-indigo-700 font-semibold">Get an Account</span>
                    </div>
                    </Link>
                </form>
                <div>
                <LoginSocialFacebook
                    appId='1563554197766018' 
                    onResolve={(response: any) => {
                    console.log(response)
                    navigate("/MyAccount")
                    }}
                    onReject={(error : any) => console.log(error)}
                >
                    <FacebookLoginButton />
                </LoginSocialFacebook>
                </div>
                <div>
                <LoginSocialTwitter
                    consumerKey="al9HcVl6M1NKWEhwY1BRN19xdkM6MTpjaQ"
                    consumerSecret="afIQjcqN3c2pYTl4s0WfCG6WPbASWuovmsvSFKa_va1IzpGTJB"
                    onSuccess={console.log("Twitter Success")}
                    onFailure={console.log("Twitter Failure")}
                    />
                <XLoginButton/>
                </div>
            </div>
        </div>
        </main>
    )
}
export default LogIn