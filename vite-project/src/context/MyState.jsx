import React, { useEffect, useState } from "react";
import MyContexts from "./myContexts";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
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
      const data = onSnapshot(q,(QuerySnapshot)=>{
          let usersArray = [];
        QuerySnapshot.forEach((doc)=>{
            usersArray.push({...doc.data(),id:doc.id});
        });
        setGetAllUsers(usersArray);
        setLoading(false);
      })
      return()=>data;
    } catch (error) {
      console.log(error);
      setLoading(false)
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
          getAllUsers
        }}
      >
        {children}
      </MyContexts.Provider>
    </>
  );
}
