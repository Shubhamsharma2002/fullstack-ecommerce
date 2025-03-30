import React, { useEffect, useState } from "react";
import Styles from "../styles/Iteam.module.css"
import ProductCard from "@/components/ProductCard";
const Iteam = () =>{
const [products,setproduct] = useState()
    const getAllitems = () =>{
        fetch('https://dummyjson.com/products')
        .then((resposne) => resposne.json())
        .then((data)=> setproduct(data.products))
        .catch((error)=> console.log(error))
    }

    useEffect(()=>{
         getAllitems()
    },[])
console.log(products);

    return(
        <div>
           <p className={Styles.iteam_title}>All Products</p>
        
        <div className={Styles.item_container}>
          
          {products?.map((p)=>(
              <ProductCard 
              id={p.id} 
              title={p?.title} 
              brand={p?.brand} 
              price={p?.price} 
              image={p?.images} 
              rating={p?.rating}
              />
          ))}
          
         
        </div>
        </div>
     )
}
export default Iteam;