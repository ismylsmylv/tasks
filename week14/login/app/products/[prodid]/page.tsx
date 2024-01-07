"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
export default function ProdId() {
  // const router = useRouter();
  // console.log(router.query);
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/api/products/").then((res) => {
      setdata(res.data);
    });
  }, []);

  const params = useParams();
  const uid = params.prodid;
  console.log(uid);
  return (
    <div>
      {/* ProdId {uid} */}
      {data &&
        data.map((elem) => {
          if (elem.id == uid) {
            return <>{elem.title}</>;
          }
        })}
    </div>
  );
}
