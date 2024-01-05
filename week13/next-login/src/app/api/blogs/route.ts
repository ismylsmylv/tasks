import { addPosts, getPosts } from "@/app/lib/data";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
export const GET = async (req: Request, res: Response) => {
  try {
    // console.log("getted request");
    const posts = getPosts();
    return NextResponse.json({ message: "ok", posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Errror made", error }.error, {
      status: 500,
    });
  }
};

export const POST = async (req: Request, res: Response) => {
  const { name, description, url } = await req.json();
  try {
    // console.log("getted request");
    const post = {
      name,
      description,
      url,
      id: uuidv4(),
      // id: Date().now().toString(),
    };
    addPosts(post);
    return NextResponse.json({ message: "ok", post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Errror made", error }.error, {
      status: 500,
    });
  }
};
