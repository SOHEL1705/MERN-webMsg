"use client";
import React, { useEffect, useState } from "react";
import { createExcel } from "@/app/helper/exelCreate";
import axios from "axios";
import Wrapper from "@/app/wrapper/Wrapper";
export default function Salesmans() {
  const [data, setData] = useState([]);

  const getSalesman = async () => {
    const res = await axios.get("api/salesmans");
    const data = res.data.salesman;
    console.log(data);
    setData(res.data.salesman);
  };
  const downloadExcel = () => {
    createExcel(data, "salesman");
  };

  useEffect(() => {
    getSalesman();
  }, []);
  return (
    <>
    <Wrapper>
      <button onClick={() => downloadExcel() }className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download Excel</button>
      {data.map((item) => (
        <div key={item._id}>
          <br />
          <p>ID: {item._id}</p>
          <h1>{item.name}</h1>
          <h1>{item.email}</h1>
          <h1>{item.phone}</h1>
        </div>
      ))}
      </Wrapper>
    </>
  );
}
