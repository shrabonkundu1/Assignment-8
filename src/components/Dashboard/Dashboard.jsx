
import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation, useLoaderData, useNavigate } from "react-router-dom";
import { getStoredAddToCartList } from "../../utility/addToDb";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const [cartList, setCartList] = useState([]);
    const allData = useLoaderData();
    const location = useLocation();
    const navigate = useNavigate();

   
    useEffect(() => {
        if (location.pathname === "/dashboard") {
            navigate("/dashboard/cart");
        }
    }, [location.pathname, navigate]);

    useEffect(() => {
        if (location.pathname === "/dashboard/cart") {
            const storeCardList = getStoredAddToCartList();
            const addToCardList = allData.filter((product) =>
                storeCardList.includes(product.productId)
            );
            setCartList(addToCardList);
        }
    }, [location.pathname, allData]);

    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadgets Heaven</title>
            </Helmet>
            <section className="pt-10 pb-16 bg-[#9538e2] space-y-5 md:mb-16 relative">
                <h2 className="text-3xl text-center font-bold text-white">Dashboard</h2>
                <p className="text-center text-white w-[60%] mx-auto">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="flex gap-4 justify-center items-center text-white font-semibold">
                    <NavLink to="/dashboard/cart">
                        <button 
                            className={`border px-4 py-2 rounded-xl ${location.pathname === "/dashboard/cart" ? "bg-white text-[#9538e2]" : ""}`}
                        >
                            Cart
                        </button>
                    </NavLink>

                    <NavLink to="/dashboard/wishlist">
                        <button 
                            className={`border px-4 py-2 rounded-xl ${location.pathname === "/dashboard/wishlist" ? "bg-white text-[#111112]" : ""}`}
                        >
                            Wishlist
                        </button>
                    </NavLink>
                </div>
            </section>

            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
