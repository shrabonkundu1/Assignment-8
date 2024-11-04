import { NavLink, useLocation } from "react-router-dom";
import addToCart from "../../assets/image/add-to-cart.png"
import whichList from "../../assets/image/love.png"

const Navbar = () => {


  const location = useLocation();

  const navbar = ()=> {
    switch (location.pathname){
      default:
          // return {backgroundColor:'[#9538e2]'};
          return {backgroundColor:'blueviolet'};
      case '/dashboard':
        return {backgroundColor:'white',color: 'black'};
      case '/statistics':
        return {backgroundColor:'white',color: 'black'};
      // case '/':
      //   return {backgroundColor:'white',color: 'black'};
    }
  } ;




    const links = <>
         <li>
              <NavLink to= "/" className={({isActive}) => `${isActive? "bg-white text-[#9538e2] py-2 px-4 rounded-lg font-semibold" : ""}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to= "/statistics" className={({isActive}) => `${isActive? "bg-[#9538e2] text-white py-2 px-4 rounded-lg font-semibold" : ""}`}>Statistics</NavLink>
            </li>
            <li>
              <NavLink to= "/dashboard" className={({isActive}) => `${isActive? "bg-[#9538e2] text-white py-2 px-4 rounded-lg font-semibold" : ""}`}>Dashboard</NavLink>
            </li>
    </>



  return (
    <div className="">
      <div className="navbar bg-[#9538e2] rounded-t-xl text-white " style={navbar()}>
     <div className=" mx-24 navbar  "  >
     <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <a className="cursor-pointer font-bold text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center  ml-48 hidden lg:flex">
        <ul className="flex gap-8 items-center ">
        {links}
        </ul>
      </div>
      <div className="navbar-end gap-6 cursor-pointer w-full h-full">
        <a className=" w-10 h-10 bg-white border-1 rounded-full p-2"><img src= {addToCart} alt="" /></a>
        <a className=" w-10 h-10 bg-white border-1 rounded-full p-2"><img src={whichList} alt="" /></a>
      </div>
     </div>
    </div>
    </div>
  );
};

export default Navbar;

