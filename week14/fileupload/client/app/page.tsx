"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [titleInp, settitleInp] = useState("");
  const [fileInp, setfileInp] = useState("");

  return (
    <div>
      <form action="/uploads" method="POST" encType="multipart/form-data">
        <input
          type="text"
          placeholder="username"
          value={titleInp}
          onChange={(e) => {
            settitleInp(e.target.value);
          }}
        />
        <input type="file" name="file" id="file" />
        <button
          onClick={(e) => {
            let obj = {
              title: titleInp,
            };
            e.preventDefault();
            axios.post("http://localhost:4000/upload", obj);
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
