import Link from "next/link";
import "./layout.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Sample</h1>
          <ul>
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link href={"/products"}>Products</Link>
            </li>
            <li>
              <Link href={"/"}>Log out</Link>
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
