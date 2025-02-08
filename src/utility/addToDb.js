
import { toast } from "react-toastify";


const getStoredAddToCartList = () =>{
    const storedListStr =  localStorage.getItem('card-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}


const addToStoredAddToCartList = (id) => {
    const storedList = getStoredAddToCartList();
    
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('card-list' , storedListStr)
        toast.success('This Product Added to your Cart list')
    }



    const removeProduct = id => {
        console.log(id)
        const storedList = getStoredAddToCartList();
        const remaining = storedList.filter(product => product != id)
        localStorage.setItem('card-list' ,JSON.stringify(remaining))
        toast.success('Removed Successfully')
    }






// add to wishList functionality

// const getStoredWhichListProduct = ()=>{
//     const storedListStr = localStorage.getItem('which-list');
//     if(storedListStr){
//         const storedList = JSON.parse(storedListStr);
//         return storedList;
//     }
//     else{
//         [];
//     }
// }

// const addToStoredWishListProduct = (id)=> {
//     const storedList = getStoredWhichListProduct();
//     if(storedList.includes(id)){

//     }
//     else {
//         storedList.push(id)
//         const storedListStr   =  JSON.stringify(storedList);
//         localStorage.setItem('wish-list',storedListStr)
//     }
// }

 const clearCart = () => {
    localStorage.removeItem("card-list");
  };
export {addToStoredAddToCartList, getStoredAddToCartList ,removeProduct,clearCart}