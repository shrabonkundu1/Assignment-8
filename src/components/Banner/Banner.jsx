import bannerImg from "../../assets/image/banner.jpg"
const Banner = () => {
  return (
    <div className="relative md:mb-[450px]">
      <div className="text-center flex flex-col items-center justify-center space-y-8 rounded-b-xl pt-20 bg-[#9538e2] pb-56">
        <h2 className="text-5xl font-bold text-white md:w-[70%] leading-tight">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-white font-medium md:w-[50%]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="border-2 bg-white rounded-full font-semibold text-[#9538e2] py-3 px-6 hover:bg-[#9538e2] hover:text-white">
          Shop Now
        </button>
      </div>
      <div className="md:w-[1050px] md:h-[550px] object-cover border-2 border-white absolute p-4 rounded-xl right-32 top-[400px] ">
        <img className=" w-full h-full object-cover rounded-xl " src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
