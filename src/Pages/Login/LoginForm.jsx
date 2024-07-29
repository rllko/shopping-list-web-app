import { Link } from "react-router-dom"

export default function LoginForm({setEmail, setPassword,handleSubmitLogin}) {
    return (
        <form onSubmit={handleSubmitLogin} className="flex flex-col gap-3 p-4">
            <input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} type="email" className="border border-zinc-700 p-3 w-full text-zinc-900 bg-white rounded-2xl"/>
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password" className="border border-zinc-700 p-3 w-full text-zinc-900 bg-white rounded-2xl" data-type="password"/>
            <div className="flex md:justify-normal justify-between items-center mt-2">
                <Link className="text-black hidden lg:!block hover:text-black" to={"#forgot"}>Forgot Password?</Link>
                <button type="submit" className="bg-black w-full lg:w-1/3 md:ml-auto text-white font-bold">
                    Login
                </button>
            </div>
            <div className="flex justify-end items-center">
                <Link className="text-black lg:hidden hover:text-black" to={"#forgot"}>Forgot Password?</Link>
                <Link to={"/shopping-list-web-app/register"} className=" p-1 text-black hover:text-black">Register</Link>
            </div>  
            
        </form>)

}

