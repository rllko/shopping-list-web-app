import { useParams,Link } from "react-router-dom";
import NotFoundPage from "../components/NotFound";
import { fetchSingleRecipe } from "../../hooks/fetchRecipes";
import { useState,useEffect } from "react";

export default function Recipe() {
    const params = useParams()

    if(isNaN(parseInt(params.recipeId)))
        return (<NotFoundPage/>)
    
    const recipeId = parseInt(params.recipeId);
    const [recipe,setRecipe] = useState(null);

    useEffect(() => {
        async function fetchData(recipeId){
            try{
                const data = await fetchSingleRecipe(recipeId);
                setRecipe(data)
            }catch(error){
                if(error.name != 'AbortError'){
                    console.log('Failed to fetch books:', error);
                }else{
                    throw error;
                }
            }
        }

        fetchData(recipeId);
        console.log(recipe)

    }, []);
    if(recipe)
    return (
    <div className="lg:max-w-2xl xl:max-w-6xl 2xl:max-w-7xl bg-white m-auto  py-5 px-8">
        <div className=" border-8 border-orange-500 h-full px-5">
            <div className="relative -top-1 border-b-2 border-orange-500  w-full">
                <div className="relative flex items-center">
                    <header className="relative text-black md:text-xl 2xl:text-2    xl mx-auto mb-[2%]">
                        <span>Recipe</span> 
                        <span className="bg-orange-500 px-1 mx-2 text-white">
                            MixList
                        </span> 
                        <span>Page</span>
                        <span className=" absolute top-[91.1%] left-[35.1%] w-0 h-0 
                        border-l-[20px] border-l-transparent
                        border-t-[15px] border-t-orange-500
                        border-r-[20px] border-r-transparent"></span>
                        <span className=" absolute top-[91.1%] right-[27%] w-0 h-0 
                        border-l-[20px] border-l-transparent
                        border-t-[15px] border-t-orange-500
                        border-r-[20px] border-r-transparent"></span>
                    </header>
                </div>       
            </div>
            <main className=" grid gap-1 divide-x-1 grid-cols-1  md:grid-cols-[0.35fr,0.65fr] xl:grid-cols-[0.30fr,0.70fr]">
                <section>
                    <div className="mt-2">                        
                        <img src={recipe.image} className="border border-black mx-auto w-[80%] md:mx-0 md:w-full  xl:w-full mb-2" width={400} alt="" />
                    </div>
                    <div className="text-black font-bold text-[0.8em] xl:text-sm 2xl:text-xl flex md:hidden my-2">
                        <span className="mx-auto">{recipe.name}</span>
                    </div>

                    <div className="relative mb-4">
                        {/* Middle line */}
                        <div className=" absolute w-[1px] h-full bg-black bottom-0  top-0 left-[48%] "></div>

                        <div className=" text-black grid text-[0.8em] xl:text-sm 2xl:text-xl grid-cols-2">
                            {/* First Column */}
                            <div className="flex flex-col my-2 ">
                                <div className="w-[90%] border-b-[1px] border-black" >
                                    <p className="font-light">
                                        Serves
                                    </p>
                                    <span>
                                        {recipe.servings} servings 
                                    </span>
                                </div>
                                
                            </div>

                            {/* Second Column */}
                            <div className="w-full my-2 border-b-[1px] border-black" >
                                <p className="font-light">
                                    Prep Time
                                </p>
                                    <span>
                                        {recipe.prepTimeMinutes} minutes
                                    </span>
                            </div>

                            {/* First Column */}    
                            <div className="w-[90%] border-b-[1px] border-black" >
                                <p className="font-light">
                                    cals per serving
                                </p>
                                <span>
                                    {recipe.caloriesPerServing} kcal
                                </span>
                            </div>

                            {/* Second Column */}
                            <div className="w-full border-b-[1px] border-black" >
                                <p className="font-light">
                                    Cook Time
                                </p>
                                <span>
                                    {recipe.cookTimeMinutes} minutes
                                </span>
                            </div>

                            {/* First Column */}    
                            <div className="w-[90%] my-2 border-b-[1px] border-black" >
                                <p className="font-light">
                                    Difficulty
                                </p>
                                <span>
                                    {recipe.difficulty}
                                </span>
                            </div>

                            {/* Second Column */}
                            <div className="w-full my-2 border-b-[1px] border-black" >
                                <p className="font-light">
                                   Rating
                                </p>
                                <span>
                                    {recipe.rating} ⭐
                                </span>
                            </div>

                            {/* First Column */}    
                            <div className="w-[90%] border-b-[1px] border-black" >
                                <p className="font-light">
                                    Cuisine
                                </p>
                                <span>
                                    {recipe.cuisine}
                                </span>
                            </div>

                            {/* Second Column */}
                            <div className="w-full border-b-[1px] border-black" >
                                <p className="font-light">
                                   Total Time
                                </p>
                                <span>
                                {recipe.cookTimeMinutes + recipe.prepTimeMinutes} minutes
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className="text-black flex space-y-2 flex-col md:pl-2 border-black">
                    <div className="hidden md:!flex flex-col md:p-1">
                        <div className="w-full mb-2  border-black" >
                        <h2 className="text-base w-full font-light">Recipe Name</h2>
                            <p className="text-sm md:text-base font xl:text-lg 2xl:text-xl">
                                {recipe.name}
                            </p>
                        </div>

                    </div>
                    <div className="md:p-1">
                        <h2 className="text-lg font-light mb-2">Ingredients</h2>
                        <ul className="list-disc text-sm md:text-base xl:text-lg 2xl:text-lg list-inside">
                            {recipe.ingredients.map((ingredient,index) => (
                                <>
                                <div className="flex gap-2 items-center">
                                <input type="checkbox" style={{backgroundColor: 'white'}} className="accent-orange-500 invert checked:invert-0 text-emerald-500 checked:bg-sky-700 border-white h-6 w-6 bg-white"/>
                                <li className="list-none border-b-[1px] mb-1 w-full border-black" key={index}>{ingredient}</li>
                                </div>
                                </>
                            ))}
                        </ul>
                    </div>
                    <div className="md:p-1 mb-4 w-full">
                        <h2 className="text-xl font-light">Directions</h2>
                        <ul className="list-disc text-sm md:text-base xl:text-lg 2xl:text-lg list-inside">
                            {recipe.instructions.map((instruction,index) => (
                                <>
                                <li className="list-decimal my-2 w-full border-black" key={index}>{instruction}</li>
                                </>
                            ))}
                        </ul>
                    </div>
                </section>
                </main>
        </div>
        <div className="my-2 flex justify-center">
            <Link className="bg-orange-300 p-2 block w-fit hover:font-bold hover:text-black border border-black text-black rounded-md" to={'/shopping-list-web-app/recipes/'}>Back</Link>
        </div>
    </div>)
}