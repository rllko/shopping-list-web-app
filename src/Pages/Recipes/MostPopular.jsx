import Card from "./Card"

export default function MostPopular({recipes}) {
    return (
    <div>
        <h1>Most Popular Recipes</h1>
        {
            recipes.map((recipe) => {
                return (
                    <Card recipe={recipe} key={recipe.id}/>
                )
            })
        }
    </div>)
}