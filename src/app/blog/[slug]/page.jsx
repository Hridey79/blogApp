import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`https://blog-app-five-delta-85.vercel.app/${slug}`);
  
  
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

// export const generateMetadata = async ({ params }) => {
//   const { slug } = params;

//   const post = await getPost(slug);

//   const title=post.title;
//   const description=post.desc;
//   return {
//     title,
//     description,
//     openGraph:{
//       title,
//       description
//     },
//     twitter:{
//       title,
//       description
//     }
//   };

// // export async function getServerSideProps({ params }) {
// //   const post = await getPost(params.slug);
// //   return { props: { post } };
// }
export async function generateMetadata({ params }) {
  const { slug } = params;

  // Fetch the post data
  const post = await getPost(slug);

  return {
    title: post.title || "Default Title",
    description: post.desc || "Default Description",
    openGraph: {
      title: post.title,
      description: post.desc,
      url: `https://blog-app-five-delta-85.vercel.app/blog/${slug}`,
      images: [
        {
          url: post.img,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.desc,
      images: [post.img],
    },
  };
}

generateMetadata()

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH AN API
  // const post = await getData(slug);
  // console.log(post.title)
  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {/* <title>{post.title}</title>
      <meta name="description" content={post.desc}></meta>
      <meta property="og:image" content={post.img}></meta>
      <meta property="og:title" content={post.title}></meta> */}
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
