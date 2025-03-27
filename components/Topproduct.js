import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Styles from "../styles/ProductCard.module.css"
const Topproducts = ()=>{
    const [products,setproduct] = useState([])
    const getAllproduct =()=>{
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((res)=>{
             setproduct(res.products.slice(0,8))
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
         <p className={Styles.top_product_title}>Top Products</p>
      
      <div className={Styles.top_product_card}>
        
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
      <div className={Styles.veiw_all}>
         <p>View All</p>
         <ArrowForwardIcon/>
      </div>
      </div>
   )
}


export default Topproducts;