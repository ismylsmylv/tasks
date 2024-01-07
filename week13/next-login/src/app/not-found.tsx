"use client";

import React from "react";
import "./globals.css";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  return (
    <div className="error">
      <p
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        404
      </p>
    </div>
  );
}
