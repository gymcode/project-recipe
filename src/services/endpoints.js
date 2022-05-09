import config from "../../config/config"

const SEARCH = "https://api.spoonacular.com/recipes/complexSearch?number=${Number}&query=${query}"
const RANDOM_RECIPES =  `https://api.spoonacular.com/recipes/random?number=3?apiKey=${config.api.key}`

export {
    SEARCH,
    RANDOM_RECIPES
}