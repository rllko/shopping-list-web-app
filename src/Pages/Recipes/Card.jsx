import { Link } from "react-router-dom"

export default function Card({id,title,image}) {
    return (
    <Link to={'./'+id} className="bg-orange-900  text-black cursor-pointer p-2 m-4 rounded-lg shadow-solid w-[20%]">
        <div>
            <img src={image} alt={image} />
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
    </Link>)
}