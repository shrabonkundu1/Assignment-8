// import { useLoaderData, useParams } from "react-router-dom";
// import { addToStoredAddToCartList } from "../../utility/addToDb";

// import cartImg from "../../assets/image/add-to-cart.png"
// import wishListimg from "../../assets/image/love.png"
// import { addToStoredWishListProduct } from "../../utility/addToWishListData";
import { Helmet } from "react-helmet-async";

const GadgetDetail = () => {
  const { productId } = useParams();
  // const data = useLoaderData();
  // const gadget = data.find((gadget) => gadget.productId === productId);

  // const {
  //   productImage,
  //   productTitle,
  //   price,
  //   availability,
  //   description,
  //   specification,
  //   rating,
  // } = gadget;


  const handleAddToCart =(id) =>{
    addToStoredAddToCartList(id);
  }

  const handleAddToWhichList = (id)=> {
    addToStoredWishListProduct(id)
  }

  return (
    <div>
      {/* <Helmet>
        <title>
          Gadgets | {productId}
        </title>
      </Helmet> */}
      <section className="pt-10 pb-72 bg-[#9538e2] space-y-5 md:mb-[450px] relative">
        <h2 className="text-3xl text-center font-bold text-white">
          Product Details
        </h2>
        <p className="text-center text-white w-[60%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        
      </section>
      <div className="border bg-white w-[1050px]  p-8 rounded-2xl mx-auto absolute right-40 top-[300px]">
          <div className="hero bg-white text-black">
            <div className="flex gap-16 flex-col lg:flex-row">
              <img
                src={productImage}
                className="w-[420px]  bg-slate-500 object-cover  rounded-xl border"
              />
              <div className="space-y-3 border rounded-xl p-5 ">
                <h1 className="text-3xl font-semibold">{productTitle}</h1>
                <p className="font-semibold text-[18px]">Price: {price}Tk</p>
                <p className="text-gray-700"><span className="font-medium text-black text-[18opx]">Description:</span> {description}</p>
                <p className="font-medium ">Specification :</p>
                  <p>{specification}</p>  
                  <span  className="flex gap-2 items-center">
                  <p className="font-medium ">Rating: </p><p>{rating}</p>
                  </span>
                
                 
              <div className="flex items-center gap-5">
              <button onClick={()=>handleAddToCart(productId)} className="border-2 bg-white rounded-full font-semibold text-[#9538e2] py-3 px-6 hover:bg-[#9d4edd] hover:text-white flex items-center gap-2">Add to cart <img className="w-7 h-7" src={cartImg} alt="" /></button>
              <button onClick={()=>handleAddToWhichList(productId)} className="border p-3 hover:bg-[#9b47df]  rounded-full"><img className="w-7 h-7" src={wishListimg} alt="" /></button>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default GadgetDetail;
