"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [titleInp, settitleInp] = useState("");
  const [fileInp, setfileInp] = useState(null);

  const getFile = (e) => {
    setfileInp(e.target.files[0]);
  };

  const fromSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", titleInp);
    formData.append("file", fileInp);

    try {
      await axios.post("http://localhost:4000/upload", formData);
      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <form encType="multipart/form-data">
        <input
          type="text"
          placeholder="username"
          value={titleInp}
          onChange={(e) => settitleInp(e.target.value)}
        />
        <input type="file" name="file" id="file" onChange={getFile} />
        <button
          onClick={(e) => {
            e.preventDefault();
            fromSubmit(e);
            settitleInp("");
            setfileInp(null);
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
