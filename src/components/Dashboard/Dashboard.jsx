import settings from "../../assets/image/settings.png"
const Dashboard = () => {
    return (
        <div>
            <section className="pt-10 pb-16 bg-[#9538e2] space-y-5 md:mb-16 relative">
        <h2 className="text-3xl text-center font-bold text-white">
          Dashboard
        </h2>
        <p className="text-center text-white w-[60%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-4 justify-center text-white font-semibold">
        <button className="border rounded-full px-7 py-3">Cart</button>
        <button className="border rounded-full px-7 py-3">WishList</button>
        </div>
      </section>


      <section className="flex justify-between items-center mb-8">
        <div>
            <p className="text-2xl font-bold text-left mb-5">Cart</p>
        </div>

        <div className="flex gap-3 items-center justify-center">
            <p className="text-3xl font-semibold "> Total cost:</p>
            <span >
            <button className="font-semibold text-black bg-[#dfdee0] border border-gray-800 rounded-full px-7 py-3 flex items-center gap-2">Sort by Price  <img className="w-5 h-5" src={settings} alt="" /></button>
           
            </span>

            <button className="font-semibold text-white bg-[#9538e2] border rounded-full px-7 py-3">Purchase</button>
        </div>
      </section>
        </div>
    );
};

export default Dashboard;
// 