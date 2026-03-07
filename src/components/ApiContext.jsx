import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiContext=createContext();
export const ApiProvider=({children})=>{
// axios.get("https://mocki.io/v1/be53c865-3f0b-4914-88e7-d048e76d0171")
  const[data,setData]=useState([]);
  useEffect(()=>{
axios.get("https://mocki.io/v1/9489fac6-f858-499a-8745-284d9a8198f8")
.then((res)=>setData(res.data))
 },[] )
    return  (
        <ApiContext.Provider value={{data,setData}}>{children}</ApiContext.Provider>
    )
}
 
