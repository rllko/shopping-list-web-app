import { Link } from "react-router-dom"

export default function RegisterForm({setUsername, setPassword,setEmail, setRepeatPassword,handleSubmitRegister}) {
    return (
        <form onSubmit={handleSubmitRegister} className="flex flex-col gap-4 p-4">
            <input placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)} className="border border-zinc-700 p-3 w-full text-zinc-900 bg-white rounded-2xl"/>
            <input placeholder="E-mail"  type="email" onChange={(e) => setEmail(e.target.value)} className="border border-zinc-700 p-3 w-full text-zinc-900 bg-white rounded-2xl"/>
            <input placeholder="Password"  type="password" onChange={(e) => setPassword(e.target.value)} className="border border-zinc-700 p-3 w-full text-zinc-900 bg-white rounded-2xl" data-type="password"/>
            <input placeholder="Repeat Password"  type="password" onChange={(e) => setRepeatPassword(e.target.value)} className="border border-zinc-700 p-3 w-full text-zinc-900 bg-white rounded-2xl" data-type="password"/>
            <div className=" md:justify-normal md:flex justify-between items-center mt-2">
            <Link to={"/shopping-list-web-app/login"} className="text-black hidden lg:!block hover:text-black">Already have an account?</Link>
                <button type="submit" className="bg-black w-fit  md:ml-auto text-white font-bold">
                    Register
                </button>
            </div>
            <div className="flex justify-end items-center">
                <Link to={"/shopping-list-web-app/login"} className="text-black lg:hidden hover:text-black">Already have an account? Login in</Link>
            </div>
        </form>)

}

