import React, { useState } from "react";
import MyContexts from "./myContexts"

export default function MyState ({children}){

    const [loading,setLoading] =useState(false)

    return <>
    <MyContexts.Provider value = {{
        loading ,
        setLoading
    }}>
        {children}
    </MyContexts.Provider>
    </>
}