const Key = process.env.REACT_APP_API_KEY;

const Endpoints = {
    SEARCH: () => `https://api.spoonacular.com/recipes/complexSearch?apiKey=${Key}`,
    RANDOM_RECIPES: (size) => `https://api.spoonacular.com/recipes/random?number=${size}&apiKey=${Key}`,
    RECIPE_INFO: (id) => `https://api.spoonacular.com/recipes/${id}/information?apiKey=${Key}`,
    GENERALSEARCH: () => `https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=20&apiKey=${Key}`
}

export { Endpoints }
