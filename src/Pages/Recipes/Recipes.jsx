import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import RecipesCarousel from "./RecipesCarousel";
import { useFetchRecipes } from "../../hooks/useFetchRecipes";

export default function Recipes() {
    document.title = "MixList - Recipes"
    const {recipes:RecentRecipes,Recenterror:error,isLoading:RecentisLoading} = useFetchRecipes("sortBy=id&order=desc&limit=5");
    const {recipes:PopularRecipes,error:PopularError,isLoading:PopularisLoading} = useFetchRecipes("sortBy=reviewCount,rating&order=asc&limit=5");

    return (
        <div className="grid grid-rows-[0.05fr,1fr] bg-gradient-to-tl min-h-screen  from-orange-300 to-orange-500">
            <NavBar />
            <main className="max-w-7xl mx-auto">
                {!RecentisLoading &&<RecipesCarousel title={"Most Recent"} recipes={RecentRecipes} />}
                {!PopularisLoading &&<RecipesCarousel title={"Most Popular"} recipes={PopularRecipes} />}
                
            </main>
            <Footer />
        </div>
    )
}