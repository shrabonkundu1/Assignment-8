import { Outlet, useLoaderData } from "react-router-dom";
// import settings from "../../assets/image/settings.png"
import { useEffect, useState } from "react";
import { getStoredAddToCartList } from "../../utility/addToDb";
import { NavLink } from "react-router-dom";
const Dashboard = () => {


    const [cartList, setCartList] = useState([]);
   

    const allData = useLoaderData();


    useEffect(()=>{
        const storeCardList = getStoredAddToCartList();
        // console.log(storeCardList, allData)



        const addToCardList = allData.filter(product=> storeCardList.includes(product.productId));
        
        setCartList(addToCardList)
        // console.log(addToCardList)
        // console.log(cartList)
    
    },[])



    return (
        <div>
            <section className="pt-10 pb-16 bg-[#9538e2] space-y-5 md:mb-16 relative">
        <h2 className="text-3xl text-center font-bold text-white">
          Dashboard
        </h2>
        <p className="text-center text-white w-[60%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-4 justify-center items-center text-white font-semibold">
        <NavLink to= "/dashboard/cart"  className={({isActive}) => `${isActive? "bg-white text-[#9538e2] py-2 px-4 rounded-lg font-semibold " : "border px-4 py-2 rounded-xl"}`}>Cart</NavLink>
        <NavLink to= "/dashboard/wishlist" className={({isActive}) => `${isActive? "bg-white text-[#111112] py-2 px-4 rounded-lg font-semibold" : "border px-4 py-2 rounded-xl"}`}>WishList</NavLink>
        </div>
      </section>


      
      <div>
        <Outlet></Outlet>
      </div>
        </div>
    );
};

export default Dashboard;
// 