//import a css file
import "./css/mystyle.css"
//import the components
import Header from "./components/Header"
import Hero from "./components/Hero"
import Main from "./components/Main"
import Footer from "./components/Footer"



function App(){
//sometimes this component get data from backend application and pass it to other components as props. e.g
//let's assume we sent a request to back end that fetch list of categories from database and we want to display it in the Hero section
const pageVisit = 20 //this comes from backend application
const categories = ["Pizza", "Burger", "Pasta", "Salad", "Dessert", "Soup"] //this comes from backend application

//let's assume we sent a request to a backend|api and what came back is array of object
const products = [{
  id: 1,
  name: "Tomato Ketchup",
  price: 4000,
  image: "hero.png"
},
{
  id: 2,
  name: "Apple Ketchup",
  price: 10000,
  image: "hero.png"
},
{
  id: 3,
  name: "Lemon Ketchup",
  price: 2000,
  image: "hero.png"
}]

  return(
    <div className="container">
      <Header xyz = {pageVisit} />
      <Hero cats = {categories} />
      <Main abc = {pageVisit} products={products} />
      <Footer />
    </div>
  )
}
export default App
