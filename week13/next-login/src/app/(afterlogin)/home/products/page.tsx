"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
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
          return (
            <li key={elem.id}>
              <Link href={`/home/products/${elem.id}`}>{elem.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
