export async function fetchRecipes(query){
    try{
        const response = await fetch(`https://dummyjson.com/recipes?${query}`)
        if(!response.ok){
            throw new Error(`API call failed: ${response.status}`)
        }
        const data = response.json();
        return data || [];
    }catch(error){
        if(error.name === 'AbortError'){
            console.error("Fetch aborted");
        }else{
            console.error("Error fetching books:",error.message);
        }
    }
}