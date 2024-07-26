import { useParams } from "react-router-dom";
import NotFoundPage from "../components/NotFound";

export default function Recipe() {
    const params = useParams()

    if(isNaN(parseInt(params.recipeId)))
        return (<NotFoundPage/>)

    return (
    <div>
        recipe number {params.recipeId}
    </div>)
}