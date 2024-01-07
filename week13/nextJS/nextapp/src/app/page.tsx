import Clicker from "./components/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link href={"/blog"}>My blog</Link>
      {/* <button onClick={Clicker}>To profile</button> */}
    </>
  );
}
