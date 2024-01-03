"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
interface Element {
  id: number;
  name: string;
}
export default function Products() {
  const [datas, setdatas] = useState([]);
  useEffect(() => {
    axios("https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories").then(
      (res) => {
        setdatas(res.data);
      }
    );
  }, []);

  return (
    <div className="prods">
      <p className="heading">Products</p>
      <ul>
        {datas.map((elem: Element) => {
          return <li key={elem.id}>{elem.name}</li>;
        })}
      </ul>
    </div>
  );
}
