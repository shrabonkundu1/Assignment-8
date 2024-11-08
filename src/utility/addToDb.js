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
export {addToStoredAddToCartList, getStoredAddToCartList}