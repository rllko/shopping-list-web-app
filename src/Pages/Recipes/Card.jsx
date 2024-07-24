export default function Card({recipe}) {
    return (
    <div className="bg-orange-light p-4 m-4 rounded-lg shadow-solid">
        <h1 className="text-2xl font-bold">{recipe.title}</h1>
        <p className="text-lg">{recipe.description}</p>
    </div>)
}