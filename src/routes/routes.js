// component imports
import {MainComponent, HealthyComponent} from "../Pages"

let PageComponents = [
    { name: "Home", 
      path: "/", 
      element: <MainComponent/>
    }, 
    { name: "Healthy", 
      path: "/healthy", 
      element: <HealthyComponent/>
    }, 
]

export default PageComponents
