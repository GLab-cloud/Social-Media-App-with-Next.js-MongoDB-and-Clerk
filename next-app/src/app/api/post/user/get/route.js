import Post from "@/lib/mongodb/models/post.model";
import { connect } from "@/lib/mongodb/mongoose";
import { currentUser } from "@clerk/nextjs/server";

export const POST = async (req) => {
  const user = await currentUser();
  try {
    await connect();

    const data = await req.json();

    const posts = await Post.find({ user: data.userId }).sort({
      createdAt: -1,
    });

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to fetch the post data", { status: 500 });
  }
};
