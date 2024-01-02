import Link from "next/link";
export default function Products() {
  const prodID = 100;
  return (
    <>
      <h1>Product list</h1>
      <ul>
        <li>
          <Link href={"/products/1"}>Product 1</Link>
        </li>
        <li>
          <Link href={"/products/2"} replace>
            Product 2
          </Link>
        </li>
        <li>
          <Link href={"/products/3"}>Product 3</Link>
        </li>
        <li>
          <Link href={`/products/${prodID}`}>Product {prodID}</Link>
        </li>
      </ul>
    </>
  );
}
