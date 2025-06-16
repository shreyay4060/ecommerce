import React, { useEffect, useState } from "react";
import MyContexts from "./myContexts";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { toast } from "react-hot-toast";
import { fireDB } from "../firebase/FirebaseConfig";

export default function MyState({ children }) {
  const [loading, setLoading] = useState(false);

  const [getAllProduct, setGetAllProduct] = useState([]);

  const getAllProductFunction = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
    }
  };

  const totalProduct = getAllProduct.length;

  // order state

  const [getAllOrder, setGetAllOrder] = useState([]);

  // getOrderFun
  const getAllOrderFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "order"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let orderArray = [];
        QuerySnapshot.forEach((doc) => {
          orderArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllOrder(orderArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //   getAllUser

  const [getAllUsers, setGetAllUsers] = useState([]);

  // getAllUserFun
  const getAllUserFun = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "user"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let usersArray = [];
        QuerySnapshot.forEach((doc) => {
          usersArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllUsers(usersArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // deleteOrder from order function

  const deleteOrderFun = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "order", id));
      toast.success("Order deleted successfully");
      getAllOrderFunction();
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete order");
    }
  };

  // deleteUserFun

  const deleteUserFun = async (id) => {
    setLoading(true);

    try {
      await deleteDoc(doc(fireDB, "user", id));
      toast.success("User deleted successfully...");
      getAllUserFun();
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting user");
    }
  };

  useEffect(() => {
    getAllProductFunction();
    getAllOrderFunction();
    getAllUserFun();
  }, []);

  return (
    <>
      <MyContexts.Provider
        value={{
          loading,
          setLoading,
          totalProduct,
          getAllProductFunction,
          getAllProduct,
          getAllOrder,
          getAllOrderFunction,
          getAllUsers,
          deleteOrderFun,
          deleteUserFun,
        }}
      >
        {children}
      </MyContexts.Provider>
    </>
  );
}
