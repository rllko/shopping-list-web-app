export default function RelatedRecipes({recipes,handleSelectRecipe}) {
    return (
        recipes != 0 && 
        <div className="flex flex-col bg-zinc-100 pt-2 pb-4 justify-center items-center">
            <div className="lg:max-w-6xl xl:max-w-7xl flex flex-col  justify-start ">
                <h1 className="text-zinc-900 mx-auto md:mx-0 w-7xl text-2xl font-light p-2">Similar Recipes </h1>
                <div className="flex md:flex-row gap-2 justify-center flex-wrap md:flex-nowrap">
                    {   
                        recipes && recipes.map((recipe) => (
                            <div key={recipe.id} onClick={() => handleSelectRecipe(recipe.id)} className=" border border-black text-sm w-[40%] md:w-1/2 text-black cursor-pointer p-2 rounded-lg  ">
                                <div>
                                    <img className="" src={recipe.image} alt={recipe.image} />
                                </div>
                                <h1 className="text-base font-bold">{recipe.name}</h1>
                                <p className="text-xs">{recipe.difficulty}</p>
                            </div>  
                        ))
                    }
                </div>
            </div>
        </div>)
}