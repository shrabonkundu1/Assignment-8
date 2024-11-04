import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = () => {


    const [gadgets, setGadgets] = useState([]);
    

    useEffect(()=> {
        fetch('/allData.json')
        .then (res=> res.json())
        .then (data=> setGadgets(data))
    },[])
    return (
        <div>
           {
            gadgets.map((gadget,idx) => <Gadget key={idx} gadget={gadget}></Gadget>)
           }
        </div>
    );
};

export default Gadgets;