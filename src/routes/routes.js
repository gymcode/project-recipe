// component imports
import {MainComponent, HealthyComponent, CategoryComponent} from "../Pages"

let PageComponents = [
    { name: "Home", 
      path: "/", 
      element: <MainComponent/>
    }, 
    { name: "Healthy", 
      path: "/healthy", 
      element: <HealthyComponent/>
    }, 
    { name: "Category", 
      path: "/category", 
      element: <CategoryComponent/>
    }, 
]

export default PageComponents
