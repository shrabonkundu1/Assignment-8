// import { useLoaderData, useParams } from "react-router-dom";
// import ProductCard from "../ProductCard/ProductCard";
// import { useEffect, useState } from "react";


// const Gadgetscard = () => {
//     // const data = useLoaderData()

//     const {category}= useParams();
//     const [products, setProducts] = useState([]);
    

//     const categories = useLoaderData();
//     // console.log(categories)
   

//     useEffect (()=> {
     
  
//         if(category){
//           const filterByCategory =categories.filter(product => product.category === category);
//           setProducts(filterByCategory)
          
        
//         }
//         else{
//             setProducts(categories)

//         }
//       },[category,categories])

      

  


    

//     return (
    
//     <div className="col-span-4 grid-cols-1 grid md:grid-cols-3 gap-5">
//         {/* {products.map((product,idx) => <ProductCard key={idx}  product={product}></ProductCard>)} */}
//         {
//             categories.length > 0 (
//                 products.map((product,idx) => (<ProductCard key={idx}  product={product}></ProductCard>))
//             ) : (
//                 <p>Lorem ipsum dolor sit amet.</p>
//             )
//         }
        
//     </div>
//     );
// };

// export default Gadgetscard;






import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

const Gadgetscard = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const categories = useLoaderData();

    useEffect(() => {
        if (category) {
            const filterByCategory = categories.filter(product => product.category === category);
            setProducts(filterByCategory);
        } else {
            setProducts(categories);
        }
    }, [category, categories]);

    return (
        <div className="col-span-4 grid-cols-1 grid md:grid-cols-3 gap-5">
            {
                products.length > 0 ? (
                    products.map((product, idx) => (
                        <ProductCard key={idx} product={product}></ProductCard>
                    ))
                ) : (
                    <p>Lorem ipsum dolor sit amet.</p>
                )
            }
        </div>
    );
};

export default Gadgetscard;
