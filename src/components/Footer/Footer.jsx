const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <h2 className="text-3xl text-center font-bold">Gadget Heaven</h2>
      <p className="w-[60%] mx-auto">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <div className=" w-4/5 border-t-2  mx-auto"></div>
      <nav className="grid grid-cols-3 gap-48 w-5/3 mx-auto items-center justify-center  ">
        <div>
          <a className="link link-hover font-bold text-xl">Services</a>
          <p className="text-gray-700">
            Product Support <br />
            Order Tracking <br />
            Shipping & Delivery <br />
            Returns
          </p>
        </div>
        <div className="">
          <a className="link link-hover font-bold text-xl ">Company</a>
          <p>About Us <br /> Careers <br /> Contact</p>
        </div>
        <div>
          <a className="link link-hover font-bold text-xl">Legal</a>
          <p>Terms of Service  <br /> Privacy Policy <br /> Cookie Policy</p>
        </div>
      </nav>
      
    </footer>
  );
};

export default Footer;
