import React from 'react';
const GadgetCart = ({ product, handleRemoveWishList }) => {
    if (!product) {
      return <p className="text-center text-gray-500">No product found.</p>;
    }
  
    return (
      <div className="px-10 w-[90%] mx-auto mb-10 p-5 bg-white shadow-lg rounded-xl border">
        <div className="flex flex-col gap-4 lg:flex-row justify-start items-center">
          <div>
            <img
              src={product?.productImage}
              alt={product?.productTitle}
              className="w-48 h-48 rounded-2xl shadow-xl object-cover p-3"
            />
          </div>
  
          <div>
            <h1 className="text-2xl mb-4">{product?.productTitle}</h1>
            <p className="text-gray-600">{product?.description}</p>
            <h1 className="text-base font-bold mt-4">Price: ${product?.price}</h1>
          </div>
  
          <div>
            <button onClick={() => handleRemoveWishList?.(product?.productId)}>
              <img
                src="https://img.icons8.com/?size=24&id=98131&format=png"
                alt="Delete"
              />
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default GadgetCart;
  