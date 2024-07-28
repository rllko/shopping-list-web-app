import { useParams } from "react-router-dom";
import NotFoundPage from "../components/NotFound";
import NavBar from "../components/NavBar";
import { useState,useEffect } from "react";
import { useFetchSingleRecipe } from "../../hooks/useFetchSingleRecipe";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../../hooks/fetchRecipes";
import Footer from "../components/Footer";
import RelatedRecipes from "./RelatedRecipes";

export default function Recipe() {
    const params = useParams()

    if(isNaN(parseInt(params.recipeId)))
        return (<NotFoundPage/>)

    const [recipeId,setRecipeId] = useState(parseInt(params.recipeId));
    const [isLoading,setLoading] = useState(true);
    const {recipe} = useFetchSingleRecipe({recipeId});
    
    const [relatedRecipes,setRelatedRecipes] = useState(undefined);

    useEffect( () => {
        if(!recipe)
            return;
        async function fetchData(){
            try{
                const data = await fetchRecipes(`/tag/${recipe.cuisine}`);
                const filteredRecipes = data.recipes.filter((r) => r.id != recipe.id);
                setRelatedRecipes(filteredRecipes );
                console.log(data.recipes.filter((r) => r.id != recipe.id));

            }catch(error){
                if(error.name != 'AbortError'){
                    console.log('Failed to fetch books:', error);
                }else{
                    throw error;
                }
            }
        }
        fetchData();
        setLoading(false);
    },[recipe]);
    
    function handleSelectRecipe(id){
        params.recipeId = id;
        setRecipeId(id)
    }

    return (
        <main className="!min-h-screen">
            <NavBar/>
            { recipe && <RecipeCard recipe={recipe}/>}
            { <RelatedRecipes recipes={relatedRecipes} handleSelectRecipe={handleSelectRecipe}/>}
            <Footer/>
        </main>
   )
}