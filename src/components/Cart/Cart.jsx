
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredAddToCartList, removeProduct, clearCart } from "../../utility/addToDb";
import Modal from "../Modal";
import { toast } from "react-toastify";

const Cart = () => {
  const allData = useLoaderData();
  const [cartList, setCartList] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  useEffect(() => {
    const gadgets = getStoredAddToCartList();
    const addToCartList = allData.filter((cart) =>
      gadgets.includes(cart.productId)
    );
    setCartList(addToCartList);
  }, [allData]);

  const totalCost = cartList.reduce((acc, item) => acc + (item?.price || 0), 0);

  const handleSortByPrice = () => {
    const sortedList = [...cartList].sort((a, b) => (b.price || 0) - (a.price || 0));
    setCartList(isSorted ? cartList : sortedList);
    setIsSorted(!isSorted);
  };

  const handlePurchase = () => {
    if (cartList.length === 0) {
      toast.info('No products found in your cart.');
    } else {
      setShowModal(true);
    }
  };

  const handleConfirmPurchase = () => {
    clearCart();
    setCartList([]);
    setShowModal(false);
    setSuccessModal(true); 
  };

  const handleRemoveProduct = (id) => {
    removeProduct(id);
    const updatedCart = cartList.filter((item) => item.productId !== id);
    setCartList(updatedCart);
  };

  return (
    <div>
      <section className="flex justify-between items-center mb-8">
        <div>
          <p className="text-2xl font-bold text-left mb-5">Cart Items</p>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <p className="text-3xl font-semibold">Total Cost: ${totalCost}</p>
          <button
            onClick={handleSortByPrice}
            className="font-semibold text-black bg-[#dfdee0] border border-gray-800 rounded-full px-7 py-3 flex items-center gap-2"
          >
            Sort by Price
          </button>
          <button
            onClick={handlePurchase}
            className="font-semibold text-white bg-[#9538e2] border rounded-full px-7 py-3"
          >
            Purchase
          </button>
        </div>
      </section>

      <section>
        {cartList.map((item, idx) => (
          <div key={idx} className="px-10 w-[90%] mx-auto mb-10 p-5 bg-white shadow-lg rounded-xl border">
            <div className="flex flex-col gap-4 lg:flex-row justify-start items-center">
              <div>
                <img
                  src={item?.productImage}
                  alt={item?.productTitle}
                  className="w-48 h-48 rounded-2xl shadow-xl object-cover p-3"
                />
              </div>
              <div>
                <h1 className="text-2xl mb-4">{item?.productTitle}</h1>
                <h1>{item?.description}</h1>
                <h1 className="text-base font-bold mt-4">Price: ${item?.price}</h1>
              </div>
              <div>
                <button onClick={() => handleRemoveProduct(item.productId)} className="">
                  <img
                    src="https://img.icons8.com/?size=24&id=98131&format=png"
                    alt="Delete"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {showModal && <Modal onClose={() => setShowModal(false)} onConfirm={handleConfirmPurchase} totalCost={totalCost} />}

      {successModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="Success"
              className="w-20 h-20 mx-auto"
            />
            <h2 className="text-xl font-bold mt-4 text-green-600">Payment Successful!</h2>
            <p>Thank you for your purchase. Your order is confirmed.</p>
            <div className="mt-4">
              <button
                onClick={() => setSuccessModal(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

