import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import { motion } from 'framer-motion'; // optional for enhanced animations

const BuyNowModal = ({deliveryDetails , setDeliveryDetails ,BuyNowFun}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  function handleChange (event){
    const {name , value} = event.target;

    setDeliveryDetails((prev)=>{
        return {
            ...prev,
            [name]:value
        }
    })
  }
  return (
    <>
      {/* Open Button */}
      <Button
        onClick={handleOpen}
        className="w-full px-4 py-3 text-white font-semibold bg-violet-600 hover:bg-violet-700 transition duration-300 rounded-xl shadow-md"
      >
        Buy Now
      </Button>

      {/* Dialog Box */}
      <Dialog open={open} onClose={handleOpen} className="z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-md mx-auto mt-20 border border-violet-200"
        >
          <h2 className="text-xl font-bold text-violet-700 mb-5 text-center">
            Enter Delivery Details
          </h2>

          {/* Input Fields */}
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              onChange = {handleChange}
              value = {deliveryDetails.name}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-violet-300 text-violet-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
            />
            <input
              type="text"
              name="address"
              onChange = {handleChange}
              value = {deliveryDetails.address}
              placeholder="Enter your address"
              className="w-full px-4 py-2 border border-violet-300 text-violet-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
            />
            <input
              type="number"
              name="pincode"
              onChange = {handleChange}
              value = {deliveryDetails.pincode}
              placeholder="Enter your pincode"
              className="w-full px-4 py-2 border border-violet-300 text-violet-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
            />
            <input
              type="text"
              name="mobileNumber"
              onChange = {handleChange}
              value = {deliveryDetails.mobileNumber}
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 border border-violet-300 text-violet-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
            />
          </div>

          {/* Confirm Button */}
          <div className="mt-6">
            <Button
              onClick={()=>{
                handleOpen();
                BuyNowFun()
              }}
              className="w-full border border-violet-600 bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-md font-medium transition duration-300"
            >
              Confirm & Pay
            </Button>
          </div>
        </motion.div>
      </Dialog>
    </>
  );
};

export default BuyNowModal;
