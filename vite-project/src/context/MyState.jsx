import React, { useEffect, useState } from "react";
import MyContexts from "./myContexts"
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

export default function MyState ({children}){

    const [loading,setLoading] =useState(false)

    const [getAllProduct , setGetAllProduct] =useState([]);
    
    const getAllProductFunction=async()=>{
        setLoading(true);
        
        try {
            const q=query(
                collection(fireDB,"products"),
                orderBy('time')
            )
            const data = onSnapshot(q,(QuerySnapshot)=>{
                let productArray=[];
                QuerySnapshot.forEach((doc)=> {
                    productArray.push({...doc.data(), id:doc.id})
                })
                setGetAllProduct(productArray);
                setLoading(false)
                
            })
            return () => data;
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getAllProductFunction();
    },[])
    const totalProduct = getAllProduct.length;
    return <>
    <MyContexts.Provider value = {{
        loading ,
        setLoading,
        getAllProduct,totalProduct,getAllProductFunction
    }}>
        {children}
    </MyContexts.Provider>
    </>
}