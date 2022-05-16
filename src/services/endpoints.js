const Key = process.env.REACT_APP_API_KEY

const SEARCH = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${Key}`
const RANDOM_RECIPES =  `https://api.spoonacular.com/recipes/random?number=3&apiKey=${Key}`

export {
    SEARCH,
    RANDOM_RECIPES
}