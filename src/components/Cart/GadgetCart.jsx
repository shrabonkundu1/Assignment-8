import { useLocation } from "react-router-dom";
// import { FaTrashAlt } from "react-icons/fa";
import trashImg from "../../assets/image/trash-bin.png"

const GadgetCart = ({ product,handleRemoveProduct ,handleRemoveWishList}) => {
    const { productImage, productTitle, price,productId,description } = product;
    const { pathname } = useLocation()
  return (
    <div>
      <div className="px-10 flex justify-between items-center  w-[90%] mx-auto mb-10 p-5 bg-white shadow-lg rounded-xl border">
        <div className="flex flex-col gap-4 lg:flex-row justify-start items-center">
          <div className=" ">
          <img className="w-48 h-48 rounded-2xl shadow-xl object-cover   p-3 "
            src={productImage}
          />
          </div>
          <div className="ml-5 space-y-4">
            <h1 className="text-3xl font-bold">{productTitle}</h1>
            <p className="">
             {description}
            </p>
            <p className="font-semibold text-xl">Price: {price}</p>
          </div>
          
        </div>
        <div>
          {pathname === "/dashboard/cart" && (
            <div onClick={()=> handleRemoveProduct(productId)} className="cursor-pointer"><img className="w-11 h-11" src={trashImg} alt="" /></div>
          )}
          {pathname === "/dashboard/wishlist" && (
            <div onClick={()=> handleRemoveWishList(productId)} className="cursor-pointer"><img className="w-11 h-11" src={trashImg} alt="" /></div>
          )}
          </div>
      </div>
      
    </div>
  );
};

export default GadgetCart;
