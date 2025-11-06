import Post from "@/lib/mongodb/models/post.model";
import { connect } from "@/lib/mongodb/mongoose";
import { currentUser } from "@clerk/nextjs/server";

export const PUT = async (req) => {
  const user = await currentUser();
  try {
    await connect();
    const data = await req.json();
    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }
    const post = await Post.findById(data.postId);
    if (!post) {
      return new Response("Post not found", { status: 404 });
    }
    const updatedPost = await Post.findByIdAndUpdate(
      data.postId,
      {
        $push: {
          comments: {
            comment: data.comment,
            user: data.user,
            name: data.name,
            username: data.username,
            profileImg: data.profileImg,
          },
        },
      },
      { new: true }
    );
    return new Response(JSON.stringify(updatedPost), { status: 200 });
  } catch (error) {
    console.log("Error commenting post", error);
    return new Response("Error commenting post", { status: 500 });
  }
};
