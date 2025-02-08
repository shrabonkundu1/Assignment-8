
import GadgetCategory from "../GadgetCategory/GadgetCategory";
import Gadgetscard from "../Gadgetscard/Gadgetscard";


// import Gadgetscard from "../Gadgetscard/Gadgetscard";

const Gadgets = ({categories}) => {


  return (
    <div className="mx-auto md:mb-24 mb-8">
      <h2 className="text-center text-4xl font-semibold mb-16">Explore Cutting-Edge Gadgets</h2>
      <section className=" grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="col-span-1  rounded-xl ">


          <GadgetCategory ></GadgetCategory>
          
        </div>

        <div className="col-span-4 grid-cols-1 grid md:grid-cols-3 gap-5 ">
          
        <Gadgetscard categories={categories}></Gadgetscard>

        </div>
      </section>
    </div>
  );
};

export default Gadgets;
