import { useState } from "react";
import { toast } from "react-toastify";

const getStoredWishListProduct = ()=>{
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return[];
    }
}

const addToStoredWishListProduct = (id)=> {
    const storedList = getStoredWishListProduct();
    if(storedList.includes(id)){
        toast.error("This product is already in your whichlist")
    }
    else {
        storedList.push(id)
        const storedListStr   =  JSON.stringify(storedList);
        localStorage.setItem('wish-list',storedListStr)
        toast.success('This Product Added to your Wishlist')
    }
}




const removeWishList = id => {
    const storedList = getStoredWishListProduct();
    const remaining = storedList.filter(product => product != id)
    localStorage.setItem('wish-list' ,JSON.stringify(remaining))
    toast.success('Removed Successfully')
}

export {addToStoredWishListProduct,getStoredWishListProduct,removeWishList}