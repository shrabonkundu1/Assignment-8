
import ReactStars from "react-stars";
import { addToStoredAddToCartList } from "../../utility/addToDb";

import { addToStoredWishListProduct } from "../../utility/addToWishListData";

import heart from "../../assets/image/love.png"







import { useLoaderData, useParams,  } from "react-router-dom";
import { toast } from 'react-toastify';

const Statistics = () => {
    const { productId } = useParams();
    const data = useLoaderData();

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };


    const handleAddtoCart =(id) =>{
      addToStoredAddToCartList(id);
    }
  
    const handleAddToWhichList = (id)=> {
      addToStoredWishListProduct(id)
    }

    const productsToShow = data ? (productId ? data.filter(d => d.productId == productId) : data) : [];

    return (
        <div>
            <div className='bg-[#9538E2] px-5 py-6 pb-60  mt-10 flex justify-center items-center flex-col '>
                <h1 className='text-2xl md:text-4xl font-extrabold text-white mb-5'>Product Details</h1>
                <p className='text-white text-base'>Explore the latest gadgets that will take your experience to the next level. From smart devices to</p>
                <p className='text-white text-base'>the coolest accessories, we have it all!</p>
            </div>

            {productsToShow.length > 0 ? (
                productsToShow.map(product => (
                    <div key={product.productId} className="flex flex-col lg:flex-row w-11/12 mx-auto bg-white px-6 py-8 mb-32 -mt-40 rounded-2xl shadow-xl">
                        <div className="">
                            <img src={product.productImage} className="max-w-sm rounded-lg" />
                        </div>

                        <div className="ml-10">
                            <h1 className="text-4xl font-bold text-black">{product.productTitle}</h1>
                            <p className="py-6 text-black">Price: ${product.price}</p>
                            <button className="border-2 border-[#6bf739] text-[#5cd231] px-2 py-1 rounded-3xl">In stock</button>
                            <p className="text-black my-2 mb-5">{product.description}</p>

                            <h1 className="text-black font-semibold text-xl">Specification:</h1>
                            <ul className="mt-5">
                                {product.specification.map(e => <li key={e} className="list-disc ml-8 text-black text-base">{e}</li>)}
                            </ul>

                            <h1 className="text-black font-semibold text-xl mt-4">Rating:</h1>
                            <div className="flex items-center gap-4 mb-4">
                                <div>
                                    <ReactStars
                                        count={5}
                                        value={product.rating}
                                        size={24}
                                        activeColor="#ffd700"
                                        onChange={ratingChanged}
                                        isHalf={true}
                                        edit={false}
                                    />
                                </div>

                                <div>
                                    <h1 className="font-semibold">{product?.rating}</h1>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button onClick={() => handleAddtoCart(product.productId)} className="text-black font-semibold bg-[#ffffff] hover:text-white hover:bg-[#bd64ea] rounded-full border border-purple-700 px-4 py-3  flex items-center justify-between gap-2">
                                    Add to cart
                                    <img src="https://img.icons8.com/?size=25&id=TmwMMf8vZgfS&format=png" alt="" />
                                </button>

                                <button onClick={() => handleAddToWhichList(product.productId)} className="border rounded-full p-2 hover:bg-[#d079fc]">
                                    <img className="w-8 h-8  object-cover" src={heart} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-700 mt-5 text-4xl font-bold flex justify-center items-center mb-16">No products available.</p>
            )}
        </div>
    );
};

export default Statistics;
