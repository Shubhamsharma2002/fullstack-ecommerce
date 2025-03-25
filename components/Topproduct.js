import React, { useEffect } from "react";

const Topproducts = ()=>{
    const getAllproduct =()=>{
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((res)=>console.log(res))
        .catch(error => console.log(error)
        )
    }

 useEffect(()=>{
       getAllproduct()
 },[])
   return(
       <h1>to products</h1>
   )
}


export default Topproducts;