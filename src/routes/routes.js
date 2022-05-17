// component imports
import { MainComponent, HealthyComponent, CategoryComponent, RecipeComponent } from "../Pages";

let PageComponents = [
  { name: "Home", path: "/", element: <MainComponent /> },
  { name: "Healthy", path: "/healthy", element: <HealthyComponent /> },
  { name: "Category", path: "/category", element: <CategoryComponent /> },
  { name: "Receipe", path: "/recipe/:id", element: <RecipeComponent /> },
];

export default PageComponents;
