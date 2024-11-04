import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/allData.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  return (
    <div className="w-[85%] mx-auto md:mb-24 mb-8">
      <section className=" grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="col-span-1 border"></div>

        <div className="col-span-4 grid-cols-1 grid md:grid-cols-3 gap-5">
          {gadgets.map((gadget, idx) => (
            <Gadget key={idx} gadget={gadget}></Gadget>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gadgets;
