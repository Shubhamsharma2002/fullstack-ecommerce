import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Product = () =>{
    const router = useRouter()
    console.log(router.query.id);
    const [product,setProduct] = useState([]);
    const getdetails = async() =>{
        if (!router.query.id) return;
       await fetch(`https://dummyjson.com/products/${router?.query?.id}`)
        .then((response)=>response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.log(error)
        )
        
    }
    useEffect(()=>{
        if (router.query.id){
          getdetails()
        }
    },[router.query.id])
    console.log("by usestate",product);
    
    return(
        <div>
            <div>
               <p>{product.title}</p>
               <p>Category:{product.category}</p>
               <p>{product.description}</p>
            </div>
            <div>
                <p>₹{product.price}</p>
                <p>Discount % : {product.discountPercentage}</p>
            </div>
            <p>{product.rating}</p>
            <p>Item Left : {product.stock}</p>
            <div>
                <img src={product.thumbnail} width="100px"/>
            </div>
        </div>
    )
}

export default Product