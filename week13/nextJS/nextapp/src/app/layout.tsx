export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "red" }}>
          <Link href={"/"}>Home</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
        </header>

        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
