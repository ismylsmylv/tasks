"use client";
// import "./style.scss";
import "./style.css";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  {
    name: "register",
    href: "/register",
  },
  {
    name: "login",
    href: "/login",
  },

  {
    name: "forgot",
    href: "/forgot",
  },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div>
      {navLinks.map((elem) => {
        const isActive = pathName.startsWith(elem.href);
        return (
          <Link
            href={elem.href}
            key={elem.name}
            style={isActive ? { color: "red" } : { color: "black" }}
          >
            {elem.name}
          </Link>
        );
      })}
      <button
        onClick={() => {
          console.log("object");
        }}
      >
        Test
      </button>
      {children}
    </div>
  );
}
