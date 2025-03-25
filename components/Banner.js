import React, { useEffect, useState } from "react";
import Styles from "../styles/Banner.module.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Banner = () =>{
    const [product,setproduct] = useState([])
    const [selectedproduct, setSeletecdproduct] = useState(null)
    const [index,setindex] = useState(0);
    const getAllproduct =()=>{
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((res) => {
            setproduct(res.products.slice(0,5));
            setSeletecdproduct(res.products[0]);
        })
        .catch(error => console.log(error)
        )
    }
    // console.log(product);
    

   useEffect(() =>{
    getAllproduct()
   },[])
  
   const handleNextArrowclick = () =>{
    if(index == product.length-1){
        setSeletecdproduct(product[0])
        setindex(0)
        return;
    }
     setSeletecdproduct(product[index+1])
     setindex(index+1)
   }
   const handlePreviousArrowclick = () =>{
    if(index == 0){
        setSeletecdproduct(product[product.length-1])
        setindex[index-1]
        return
    }
    setSeletecdproduct(product[index-1])
    setindex(index-1)
    
    
   }
   
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

        <div className={Styles.banner}>
            <ArrowBackIosIcon onClick={handlePreviousArrowclick} />
        <img className={Styles.banner_img} src={selectedproduct?.thumbnail}  />
        <ArrowForwardIosIcon onClick={handleNextArrowclick} />
        </div>
        

    )
}

export default Banner;