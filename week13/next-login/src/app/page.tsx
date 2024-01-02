"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Home() {
  const [username, setusername] = useState("");
  const [pass, setpass] = useState("");
  const router = useRouter();
  return (
    <div className="login">
      <h2>Login</h2>
      <form action="">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(username, pass);
            axios("https://6565f015eb8bb4b70ef29ee3.mockapi.io/users").then(
              (res) => {
                if (
                  username == res.data[0].name &&
                  pass == res.data[0].password
                ) {
                  console.log("logged in");
                  router.push("products");
                } else {
                  console.log("invalid credential");
                }
              }
            );
          }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}
