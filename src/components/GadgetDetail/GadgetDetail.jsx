import { useLoaderData, useParams } from "react-router-dom";

const GadgetDetail = () => {
  const { productId } = useParams();
  const data = useLoaderData();
  const gadget = data.find((gadget) => gadget.productId === productId);
  console.log(gadget);
  const {
    productImage,
    productTitle,
    price,
    availability,
    description,
    specification,
    rating,
  } = gadget;

  return (
    <div>
      <section className="pt-10 pb-72 bg-[#9538e2] space-y-5 md:mb-[450px] relative">
        <h2 className="text-3xl text-center font-bold text-white">
          Product Details
        </h2>
        <p className="text-center text-white w-[60%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        
      </section>
      <div className="border bg-white w-[1050px] h-[550px] p-8 rounded-2xl mx-auto absolute right-40 top-[300px]">
          <div className="hero bg-white text-black">
            <div className="flex gap-16 flex-col lg:flex-row">
              <img
                src={productImage}
                className="w-[420px] h-[500px]  p-5 rounded-lg shadow-2xl"
              />
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold">{productTitle}</h1>
                <p className="font-semibold text-[18px]">price: {price}Tk</p>
                <p>{description}</p>
                <p className="font-medium ">Specification :</p>
                  <p>{specification}</p>  
                
                 
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default GadgetDetail;
