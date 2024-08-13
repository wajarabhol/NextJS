'use client';
import React from "react";
import AddToCart from "./AddToCart";
import style from "./ProductCard.module.css"


const ProductCard = () => {
    return (
        // <div className={style.card}>
        <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
            {/* <button onClick={() => console.log('Click')}>Add to cart</button> */}
            <AddToCart/>
        </div>
    )
}

export default ProductCard;