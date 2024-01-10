"use client";
import React from "react";
import "./style.scss";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className="navbar">
      <div
        className="logo"
        onClick={() => {
          router.push("/");
        }}
      >
        Authors
      </div>
      <div className="navs">
        <div
          className="navElem home"
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </div>
        <div
          className="navElem authors"
          onClick={() => {
            router.push("/authors");
          }}
        >
          Authors
        </div>
        <div
          className="navElem add"
          onClick={() => {
            router.push("/add");
          }}
        >
          Add author
        </div>
      </div>
    </div>
  );
}
