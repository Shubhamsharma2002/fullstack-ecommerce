import React, { useEffect, useState } from "react";

const Banner = () =>{
    const [product,setproduct] = useState([])

    const getAllproduct =()=>{
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((res)=>setproduct(res.products))
        .catch(error => console.log(error)
        )
    }

   useEffect(() =>{
    getAllproduct()
   },[])
//    console.log(product);
   
    return(
        <div>
           {product.map((p)=>(
            <>
            <img src={p.thumbnail} alt={p.name} />
            <h3>{p.title}</h3>
            <p>{p.name}</p>
            <p>ID: {p.id}</p>
          </>
           ))}
        </div>
        

    )
}

export default Banner;