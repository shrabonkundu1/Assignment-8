import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";


const Gadgetscard = () => {
    const data = useLoaderData()

    const {category}= useParams();
    const [products, setProducts] = useState([]);
    useEffect (()=> {
     
        if(category!= "All Product"){
            const filterByCategory =data.filter(product => product.category === category)
        setProducts(filterByCategory)
        }
        else{
            setProducts(data)
        }
    },[category,data])


    

    return (
    <div className="col-span-4 grid-cols-1 grid md:grid-cols-3 gap-5">
        {products.map((product,idx) => <ProductCard key={idx}  product={product}></ProductCard>)}
    </div>
    );
};

export default Gadgetscard;