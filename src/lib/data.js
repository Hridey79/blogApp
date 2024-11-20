import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

// export async function generateMetadata({ slug }) {
//   // const { slug } = params;

//   // // Fetch the post data
//   const post = await getPost(slug);
//   //console.log(post)
//   const metadata= {
//     title: post.title || "Default Title",
//     description: post.desc || "Default Description",
//     metadataBase: new URL("https://blog-app-five-delta-85.vercel.app"),
//     openGraph: {
//       title: post.title,
//       description: post.desc,
//       url: `https://blog-app-five-delta-85.vercel.app/blog/${slug}`,
//       images: [
//         {
//           url: post.img,
//           width: 1200,
//           height: 630,
//           alt: post.title,
//         },
//       ],
//       type: "article",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.title,
//       description: post.desc,
//       images: [post.img],
//     },
//   };
//   console.log(metadata)
//   return metadata
// }

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
