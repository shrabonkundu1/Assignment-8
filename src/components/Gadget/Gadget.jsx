const Gadget = ({ gadget }) => {
  console.log(gadget);
  const { image, title, price } = gadget;
  return (
    <div className="card  shadow-xl">
        <figure className="px-4 pt-4">
          <img 
            src={image}
            alt={title}
            className="rounded-xl w-[300px] h-[300px] object-cover border-2 bg-gray-600"
          />
        </figure>
        <div className="card px-4 py-4 text-left space-y-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-gray-600 font-semibold text-xl">Price: {price}</p>
          <div className="card-actions">
            <button className="border-2 bg-white rounded-full font-semibold text-[#9538e2] py-3 px-6 hover:bg-[#9538e2] hover:text-white">View Deatails</button>
          </div>
        </div>
      </div>
  );
};

export default Gadget;
