import React, { useEffect, useState } from "react";

const Banner = () =>{
    const [product,setproduct] = useState()

    const getAllproduct =()=>{
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((res)=>console.log(res))
        .catch(error => console.log(error)
        )
    }

   useEffect(() =>{
    getAllproduct()
   },[])
    return(
        <p>Banner</p>
    )
}

export default Banner;