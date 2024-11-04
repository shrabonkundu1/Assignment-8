import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import GadgetCategory from "../GadgetCategory/GadgetCategory";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [categorys , setCategorys] = useState([]);

  useEffect(() => {
    fetch("/allData.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  useEffect(() => {
    fetch("/categoryData.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div className="mx-auto md:mb-24 mb-8">
      <h2 className="text-center text-4xl font-semibold mb-16">Explore Cutting-Edge Gadgets</h2>
      <section className=" grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="col-span-1  rounded-xl ">
            <div className="border rounded-xl">
            {
                categorys.map((category,idx) => <GadgetCategory key={idx} category={category}></GadgetCategory>)
            }
            </div>
        </div>

        <div className="col-span-4 grid-cols-1 grid md:grid-cols-3 gap-5 ">
          {gadgets.map((gadget, idx) => (
            <Gadget key={idx} gadget={gadget}></Gadget>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gadgets;
