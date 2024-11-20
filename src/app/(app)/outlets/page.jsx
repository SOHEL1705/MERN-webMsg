"use client";
import React, { useEffect,useState } from "react";
import axios from "axios";
export default function Outlets() {
const [data, setData] = useState([]);


  useEffect(() => {
    getOutltes();
  }, []);
  const getOutltes = async () => {
    const res = await axios.get("/api/outlet");
    console.log(res.data);
    setData(res.data.outlets);
  };

  return (
    <>
      {data.map((item) => (
        <div key={item._id}>
          <br />
          <p>ID: {item._id}</p>
          <h1>{item.outletArea}</h1>
          <h1>{item.outletName}</h1>
          <h1>{item.address}</h1>
        </div>
      ))}
    </>
  )
}
