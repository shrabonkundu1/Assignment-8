import { useEffect, useState } from "react";


const Gadgets = () => {


    const [gadgets, setGadgets] = useState([]);
    

    useEffect(()=> {
        fetch('/allData.json')
        .then (res=> res.json())
        .then (data=> setGadgets(data))
    },[])
    return (
        <div>
           <p>
           {gadgets.length}
           </p>
        </div>
    );
};

export default Gadgets;