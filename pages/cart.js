import React, { useEffect, useState } from "react";

const Cartpage = () =>{
      const [items,setItem] = useState()
      const getItem =() =>{
          const data = JSON.parse(sessionStorage.getItem("items"));
          setItem(data);
      }

      useEffect(()=>{
          getItem();
      },[])
      console.log(items);
      
    return(
        <h1>welcome to cart page</h1>
    )
}

export default Cartpage;