
const GadgetCategory = ({category}) => {
    const {categoryItem} = category;
    return (
        <div className="w-[90%] mx-auto">
            <button className="border-2  rounded-full font-semibold text-gray-500 py-3 px-6  w-full text-left my-3 bg-gray-200" >{categoryItem}</button>

           
        </div>
    );
};

export default GadgetCategory;