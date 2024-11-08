import { toast } from "react-toastify";

const getStoredWhichListProduct = ()=>{
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
    const storedList = getStoredWhichListProduct();
    if(storedList.includes(id)){

    }
    else {
        storedList.push(id)
        const storedListStr   =  JSON.stringify(storedList);
        localStorage.setItem('wish-list',storedListStr)
        toast.success('This Product Added to your Wishlist')
    }
}
export {addToStoredWishListProduct,getStoredWhichListProduct}