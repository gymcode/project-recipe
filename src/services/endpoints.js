const Key = process.env.REACT_APP_API_KEY;

const Endpoints = {
    SEARCH: () => `https://api.spoonacular.com/recipes/complexSearch?apiKey=${Key}`,
    RANDOM_RECIPES: () => `https://api.spoonacular.com/recipes/random?number=2&apiKey=${Key}`,
    RECIPE_INFO: (id) => `https://api.spoonacular.com/recipes/${id}/information?apiKey=${Key}`
}

export { Endpoints }
