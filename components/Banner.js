import React, { useEffect, useState } from "react";
import Styles from "../styles/Banner.module.css"
const Banner = () =>{
    const [product,setproduct] = useState([])
    const [selectedproduct, setSeletecdproduct] = useState(null)
    const getAllproduct =()=>{
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((res) => {
            setproduct(res.products);
            setSeletecdproduct(res.products[0]);
        })
        .catch(error => console.log(error)
        )
    }

   useEffect(() =>{
    getAllproduct()
   },[])
//    console.log(product);
   
    return(
        // <div>
        //    {product.map((p)=>(
        //     <>
        //     <img src={p.thumbnail} alt={p.name} />
        //     <h3>{p.title}</h3>
        //     <p>{p.name}</p>
        //     <p>ID: {p.id}</p>
        //   </>
        //    ))}
        // </div>

        <div>
        <img className={Styles.banner_img} src={selectedproduct?.thumbnail}  />
        </div>
        

    )
}

export default Banner;