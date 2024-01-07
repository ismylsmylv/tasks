"use client";
import Link from "next/link";
import "./layout.css";
import { useRouter } from "next/navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Sample</h1>
          <ul>
            <li>
              <Link href={"/home/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/home/profile"}>Profile</Link>
            </li>
            <li>
              <Link href={"/home/products"}>Products</Link>
            </li>
            <li>
              <Link href={"/home/todo"}>Todo</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("loginID");
                  router.push("/login");
                }}
              >
                Log out
              </button>
            </li>
          </ul>
        </header>
        {children}
        <footer>
          <p>2024 ismylsmlv</p>
        </footer>
      </body>
    </html>
  );
}
