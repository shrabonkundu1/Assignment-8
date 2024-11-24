




import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import GadgetCategory from "../GadgetCategory/GadgetCategory";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>
                    Gadgets | Gadgets Heaven
                </title>
            </Helmet>
            <Banner />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-24">
           
                            <div className="col-span-1 rounded-xl">
                                <GadgetCategory categories={categories} />
                            </div>
                            <div className="col-span-4 grid grid-cols-1 md:grid-cols-3 gap-5">
                                <Outlet />
                            </div>
                   
            </div>
        </div>
    );
};

export default Home;
