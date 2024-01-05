"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Sender() {
  const router = useRouter();
  const loginID = JSON.stringify(localStorage.getItem("loginID"));
  console.log(loginID);

  if (loginID == null) {
    return (
      <div className="sender">
        <h1>Log in or sign up to continue</h1>
        <button
          onClick={() => {
            router.push("/login");
          }}
        >
          Log in
        </button>
        <button
          onClick={() => {
            router.push("/signup");
          }}
        >
          Sign up
        </button>
      </div>
    );
  } else {
    router.push("/home/dashboard");
  }
}

export default Sender;
