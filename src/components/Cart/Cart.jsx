

import { useEffect, useState } from "react";
import settings from "../../assets/image/settings.png"
import {  getStoredAddToCartList, removeProduct } from "../../utility/addToDb";
import GadgetCart from "./GadgetCart";
import ProductCard from "../ProductCard/ProductCard";
import { useLoaderData } from "react-router-dom";
const Cart = () => {

    

    const [cartList,setCartList] = useState([]);
    const allData = useLoaderData();


    useEffect(()=>{
        const gadgets = getStoredAddToCartList()
        const addToCardList = allData.filter(cart => gadgets.includes(cart.productId));
        setCartList (addToCardList)
    },[])
    console.log(cartList);

    const handleRemoveProduct = id => {
        removeProduct(id)
        const gadgets = getStoredAddToCartList()
        const addToCardList = allData.filter(cart => gadgets.includes(cart.productId));
        setCartList (addToCardList)
    }



    return (
        <div>
            <section className="flex justify-between items-center mb-8">
        <div>
            <p className="text-2xl font-bold text-left mb-5">Cart</p>
        </div>

        <div className="flex gap-3 items-center justify-center">
            <p className="text-3xl font-semibold "> Total cost:</p>
            <span >
            <button className="font-semibold text-black bg-[#dfdee0] border border-gray-800 rounded-full px-7 py-3 flex items-center gap-2">Sort by Price  <img className="w-5 h-5" src={settings} alt="" /></button>
           
            </span>

            <button className="font-semibold text-white bg-[#9538e2] border rounded-full px-7 py-3">Purchase</button>
        </div>
      </section>


      <section>
       { cartList.map((product,idx)=> (
        <GadgetCart handleRemoveProduct={handleRemoveProduct} key={idx} product={product}></GadgetCart>
       ))}


      </section>
        </div>
    );
};

export default Cart;