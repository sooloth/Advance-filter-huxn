import { useState } from "react";
import Navigation from "./Navigation/Navigation";
import Product from "./Products/Product";
import './index.css'
import Rec from "./Recommended/Rec";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
//Database
import products from './db/data'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  //input filter
  const [query, setQuery] = useState("")

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const filteredItems = products
  .filter((product) => product.title.toLowerCase()
  .indexOf(query.toLowerCase()) !== -1);

  //radio filter
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  // button 
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  const filteredData = (products, selected, query) =>{
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredProducts = filteredItems
    }

    //selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title}) =>
        category === selected || 
        color === selected || 
        company === selected || 
        newPrice === selected || 
        title === selected
        );
    }

    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice}) =>(
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      
      />
    ))
  }
  const result = filteredData(products,selectedCategory,query)
  return (
    <>
    <Sidebar handleChange={handleChange}/>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Rec handleClick={handleClick}/>
    <Product result={result}/>
    </>
  );
}

export default App;
