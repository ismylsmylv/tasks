"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import { logToConsole } from "@/app/lib/features/todosSlice";
// import { useAppSelector, useAppDispatch } from "../../../lib/hooks";
interface Element {
  id: number;
  name: string;
}
export default function Products() {
  // const dispatch = useAppDispatch();
  const [datas, setdatas] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const [inpName, setinpName] = useState("");
  const [inpUrl, setinpUrl] = useState("");
  const [inpDesc, setinpDesc] = useState("");
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

      {isOpen ? (
        <div className="addFrom">
          <form action="">
            <input
              type="text"
              placeholder="Name"
              value={inpName}
              onChange={(e) => {
                setinpName(e.target.value);
              }}
            />
            <input
              type="url"
              placeholder="Url"
              value={inpUrl}
              onChange={(e) => {
                setinpUrl(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Description"
              value={inpDesc}
              onChange={(e) => {
                setinpDesc(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log("input");
                // setisOpen(!isOpen);
                // dispatch(logToConsole);
                let obj = {
                  name: inpName,
                  description: inpDesc,
                  url: inpUrl,
                };
                axios
                  .post(
                    "https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories",
                    obj
                  )
                  .then(() => {
                    setisOpen(!isOpen);
                  });
              }}
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <>
          <button
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            Add product
          </button>
        </>
      )}
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
