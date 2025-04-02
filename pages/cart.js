import CartItemcard from "@/components/CartItemcard";
import React, { useEffect, useState } from "react";

const Cartpage = () =>{
      const [items,setItem] = useState([])
      const getItem =() =>{
          const data = JSON.parse(sessionStorage.getItem("items"));
          setItem(data);
      }

      useEffect(()=>{
          getItem();
      },[])
      console.log(items);
      
    return(
        <div>
            <p>Items Are : -</p>
            {items.map((p)=>(
                <CartItemcard 
                id={p.id}
                brand={p.brand}
                category={p.category}
                description={p.description}
                price={p.price}
                discountPercentage={p.discountPercentage}
                rating={p.rating}
                title={p.title}
                image={p.
                    image
                    }
                />
            ))}
        </div>
    )
}

export default Cartpage;