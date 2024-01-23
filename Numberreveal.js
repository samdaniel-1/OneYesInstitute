import axios from "axios";
import React, { useEffect, useState } from "react";

export function View() {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5010/view").then((res) => {
      console.log(res.data);
      setDetail(res.data);
    });
  }, []);
  return(
    <>
    {
      detail.map((val,ind)=>{
        return(
          <>
          <h1 className="text-light">Unique Id of {val.Name} is <ins> {val.Id+val.Pincode} </ins></h1>
          
          
          </>
        )
      })
    }
    </>
  )
   
}
    