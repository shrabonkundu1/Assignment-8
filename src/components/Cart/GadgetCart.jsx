const GadgetCart = ({ product }) => {
    console.log(product)
    const { productImage, productTitle, price,productId,description } = product;

  return (
    <div>
      <div className="px-10   w-[90%] mx-auto mb-10 p-5 bg-white shadow-lg rounded-xl border">
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
      </div>
    </div>
  );
};

export default GadgetCart;
