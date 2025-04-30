'use client'
import React from "react";


const Wrapp = ({children}:{children:React.ReactNode}) => {
  console.log("wrap compo")  
    return ( 
        <div className="flex items-center">
            {children}
        </div>
     );
}
 
export default Wrapp;