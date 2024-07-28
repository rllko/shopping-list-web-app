import { Link } from "react-router-dom"


export default function RelatedRecipes({recipes,handleSelectRecipe}) {

    return (
        recipes != 0 && <div className="flex flex-col bg-zinc-100 pt-2 pb-4 justify-center items-center">

        <div className="max-w-7xl mx-auto">
        <h1 className="text-zinc-900 text-2xl font-light p-2">Similar Recipes </h1>
            <div className="flex md:flex-row gap-2 flex-col">
                {   
                    recipes && recipes.map((recipe) => (
                        <div key={recipe.id} onClick={() => handleSelectRecipe(recipe.id)} className="border border-black text-sm w-1/3 text-black cursor-pointer p-2 rounded-lg  ">
                            <div>
                                <img className="w-[70%]" src={recipe.image} alt={recipe.image} />
                            </div>
                            <h1 className="text-base font-bold">{recipe.name}</h1>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    </div>)
}