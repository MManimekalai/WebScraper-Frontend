import { useEffect, useState } from 'react';
import './App.css';
import Base from './base/Base';
import Header from './header/Header';
import axios from 'axios';


function App() {
  const [products,setProducts] = useState();
 

// Fetch priduct from my-API
useEffect(()=>{
  async function getProducts(){ 
    const response = await axios.get("https://webscraper-ur93.onrender.com/api/fetch")
    //const response = await axios.get("http://localhost:4000/api/fetch")
    const { amazonProducts, flipkartProducts, snapdealProducts } = response.data;
    const FinalProducts = [...amazonProducts, ...flipkartProducts, ...snapdealProducts];
  
    setProducts(FinalProducts)
    //console.log("products", products)
  };
   
  getProducts();
},[products]);

  return (
    <div className="App">
        <Base
        products={products}
        setProducts={setProducts}
        /> 
        <Header
        products={products}
        setProducts={setProducts}
        />    
    </div>
  );
}

export default App;