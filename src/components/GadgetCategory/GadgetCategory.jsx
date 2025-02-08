import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const GadgetCategory = () => {
   

    const [categoryData,setCategoryData] = useState([])
    useEffect(()=>{
        fetch('/categoryData.json')
        .then(res => res.json())
        .then(data => setCategoryData(data))
    },[])
    

    const location = useLocation()

       return(
        <div className="w-[90%] mx-auto border rounded-xl p-3">
            <NavLink to={"/category"} >
                <button className={`border-2  rounded-full font-semibold text-gray-500 py-3 px-6  w-full text-left my-3 bg-gray-200 ${location.pathname === "/category" ? 'bg-[#9835ea] text-white font-semibold' : ""}`}>
                    All Product
                </button>
            </NavLink>
          

            {
                categoryData.map((category,idx)=> (
                    
                    <NavLink 
                    
                    key={idx}
                    to={`/category/${category.categoryItem}`}>

                    {({isActive}) => (
                        <button className={`border-2  rounded-full font-semibold text-left text-gray-500 py-3 px-6  w-full  my-3 bg-gray-200 ${isActive ? "bg-[#8c35d2] text-white font-semibold" : ""}`}>
                        {category.categoryItem}
                    </button>
                    )}
                    
                        
                    </NavLink>
                ))
            }
        </div>
    );
};


export default GadgetCategory;