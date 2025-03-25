import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Topproducts = ()=>{
    const [products,setproduct] = useState([])
    const getAllproduct =()=>{
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((res)=>{
             setproduct(res.products[0])
        })
        .catch(error => console.log(error)
        )
    }
    console.log(products);
    

 useEffect(()=>{
       getAllproduct()
 },[])
   return(
      <div>
        <p>Top Products</p>
        <ProductCard id={products.id} title={products.title} brand={products.brand} price={products.price} image={products.images}/>
      </div>
   )
}


export default Topproducts;