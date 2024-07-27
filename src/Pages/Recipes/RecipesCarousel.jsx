import Card from "./Card"

export default function RecipesCarousel({title,recipes}) {
    return (
    <div className="flex flex-col bg-white/80 ">
        <h1 className="text-zinc-900 text-3xl font-bold p-2 pl-10">{title}</h1>
        <div className="flex md:flex-row flex-col">
            {
                recipes.map((recipe) => (
                    <Card id={recipe.id} title={recipe.name} image={recipe.image} key={recipe.id}/>
                ))
            }
        </div>
    </div>)
}