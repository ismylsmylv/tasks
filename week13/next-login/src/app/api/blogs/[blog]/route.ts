import { deletePosts, idPosts, updatePosts } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  const id = req.url.split("blogs/")[1];
  const post = idPosts(id);
  console.log(id);
  if (!post) {
  }
  return NextResponse.json({ message: "Error" }, { status: 404 });
};

export const PUT = async (req: Request, res: Response) => {
  const { name, description, url } = await req.json();
  const id = req.url.split("blogs/")[1];
  updatePosts(id, name, description, url);
  return NextResponse.json({ message: "OK" }, { status: 200 });
};

export const DELETE = async (req: Request, res: Response) => {
  console.log("delete request");
  const id = req.url.split("blogs/")[1];
  deletePosts(id);
  return NextResponse.json({ message: "Deleted" }, { status: 200 });
};
