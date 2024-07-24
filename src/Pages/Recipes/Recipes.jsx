import { useEffect, useState } from "react";
import { fetchRecipes } from "../../api-client";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MostPopular from "./MostPopular";

export default function Recipes() {
    const [PopularRecipes,setPopularRecipes] = useState([]);
    const [NewestRecipes,setNewestRecipes] = useState([]);  
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => async () => {
        document.title = "MixList - Recipes"

        async function fetchData(){
            try{
                const NewestRecipes = await fetchRecipes("sortBy=id&order=desc&limit=5")
                setNewestRecipes(NewestRecipes.recipes)

                const PopularRecipes = await fetchRecipes("sortBy=reviewCount,rating&order=asc&limit=5")
                setPopularRecipes(PopularRecipes.recipes)

                // I'll need a hook for this one
                const response = await fetchRecipes(" ")
                setRecipes(response.recipes)
            }catch(error){
                if(error.name != 'AbortError'){
                    console.log('Failed to fetch data:', error);
                }else{
                    throw error;
                }
            }

        }

        await fetchData();

    }, []);
    console.log(NewestRecipes,PopularRecipes,recipes)
    return (
        <div className="grid grid-rows-[0.05fr,1fr] bg-gradient-to-tl min-h-screen from-orange-300 to-orange-500">
            <NavBar />
            <main>
                <MostPopular recipes={recipes} />
            </main>
            <Footer />
        </div>
    )
}