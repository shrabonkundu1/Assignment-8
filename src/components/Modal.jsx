const Modal = ({ onClose, onConfirm, totalCost }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Confirm Your Purchase</h2>
          <p className="text-xl mb-4">Total Cost: ${totalCost}</p>
          <div className="flex justify-around">
            <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
              Cancel
            </button>
            <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  