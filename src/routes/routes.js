// component imports
import { MainComponent, HealthyComponent, CategoryComponent, RecipeComponent, GalleryComponent, DashboardComponent, HomeCategory } from "../Pages";

let PageComponents = [
  { name: "Home", path: "/", element: <MainComponent /> },
  { name: "Healthy", path: "/healthy", element: <HealthyComponent /> },
  { name: "Category", path: "/category", element: <CategoryComponent /> },
  { name: "Receipe", path: "/recipe/:id", element: <RecipeComponent /> },
  { name: "Gallery", path: "/gallery", element: <GalleryComponent /> },
  { name: "Dashboard", path: "/dashboard", element: <DashboardComponent/>},
  { name: "HomeCat", path: "/dashboard/home", element: <HomeCategory/>}
];

export default PageComponents;
