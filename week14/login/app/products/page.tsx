"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Products() {
  const [datas, setdatas] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/api/products/").then((res) => {
      setdatas(res.data);
    });
  }, []);
  const router = useRouter();
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {datas &&
          datas.map((elem) => {
            return (
              <li key={elem.id}>
                {elem.title}{" "}
                <button
                  onClick={() => {
                    router.push(`/products/${elem.id}`);
                  }}
                >
                  Details
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
