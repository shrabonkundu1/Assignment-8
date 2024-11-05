import { Link } from "react-router-dom";

const GadgetCategory = ({categories}) => {
    // const {categoryItem} = categories;
    console.log(categories)
    return (
        // <div className="w-[90%] mx-auto">
        //     <button className="border-2  rounded-full font-semibold text-gray-500 py-3 px-6  w-full text-left my-3 bg-gray-200" >{categoryItem}</button>

           
        // </div>
        <div className="w-[90%] mx-auto border p-3">
            {
                categories.map((category,idx) => (
                    <Link className="flex flex-col border-2  rounded-full font-semibold text-gray-500 py-3 px-6  w-full text-left my-3 bg-gray-200" key={idx} to={'/category'}>{category.categoryItem}</Link>
                ))
            }
        </div>
    );
};

export default GadgetCategory;