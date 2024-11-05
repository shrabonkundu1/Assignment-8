import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import GadgetCategory from "../GadgetCategory/GadgetCategory";


const Home = () => {
    const categories = useLoaderData();
    console.log(categories)
    return (
        <div >
            <Banner></Banner>
           <Gadgets categories={categories}></Gadgets>
           
           {/* <GadgetCategory categories={categories}></GadgetCategory> */}
        </div>
    );
};

export default Home;