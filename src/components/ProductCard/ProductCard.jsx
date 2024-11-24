import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  

  const { productImage, productTitle, price, productId } = product;

  return (
    <div className="">
      <div className="card  shadow-xl">
        <figure className="px-4 pt-4">
          <img
            src={productImage}
            alt={productTitle}
            className="rounded-xl w-[300px] h-[300px] object-cover border-2 bg-gray-600"
          />
        </figure>
        <div className="card px-4 py-4 text-left space-y-4">
          <h2 className="text-2xl font-semibold">{productTitle}</h2>
          <p className="text-gray-600 font-semibold text-[18px]">
            Price: {price}
          </p>
          <div className="">
            <Link to={`/Statistics/${productId}`}>
              <button className="border-2 bg-white rounded-full font-semibold text-[#9538e2] py-3 px-6 hover:bg-[#9538e2] hover:text-white">
                View Deatails
              </button>
            </Link>
          </div>
        </div>
        
      </div>

      
    </div>
  );
};

export default ProductCard;
