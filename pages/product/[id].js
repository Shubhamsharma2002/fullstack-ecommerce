import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Styles from "../../styles/ProductDetails.module.css"
import StarIcon from '@mui/icons-material/Star';
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

    const handdleAddtoCart = () =>{
        const getitems = JSON.parse(sessionStorage.getItem("items")) || [];
        console.log(getitems);
        
        const data = {
            id: product.id,
            brand:product.brand,
            category:product.category,
            description:product.description,
            price:product.price,
            discountPercentage:product.discountPercentage,
            rating:product.rating,
            title:product.title,
            image:product.thumbnail
        }
        getitems.push(data)
        sessionStorage.setItem("items",JSON.stringify(getitems))
    }
    console.log("by usestate",product);
    // {product?.images?.map((img, id) => {
    //     console.log(img);  
    //     return id;
    // })}
    
    return(
        <div className={Styles.product_details}>
            <div className={Styles.product_details_data}>
               <p className={Styles.product_details_data_title}>{product.title}</p>
               <p className={Styles.product_details_data_brand}>Brand:{product.brand}</p>
               <p className={Styles.product_details_data_category}>Category:{product.category}</p>
               <p className={Styles.product_details_data_discription}>{product.description}</p>
            <div className={Styles.product_details_data_pricing}>
                <p className={Styles.product_details_data_price}>₹{(product.price*90).toFixed(2)}</p>
                <p className={Styles.product_details_data_discount}>Discount % : {product.discountPercentage}</p>
            </div>
             <div className={Styles.product_details_data_last}>
             <p className={Styles.product_details_data_last_iteleft}>Item Left : {product.stock}</p>
             <p className={Styles.product_details_data_last_rating}><StarIcon/>{product.rating}</p>
             </div>
             <button onClick={handdleAddtoCart} className={Styles.add_to_cart}>Add to Cart</button>
            </div>
            <div className={Styles.images}>
                
                <img src={product.thumbnail} />
                {/* {product?.images?.map((img,id)=>(
                     <img src={img} alt={`Product image ${id}`}/>
                ))} */}
            </div>
        </div>
    )
}

export default Product