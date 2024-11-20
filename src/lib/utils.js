import mongoose from "mongoose"

const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export function constructMetadata({params} = {}){
  // console.log(params)
  const {title,description,image,noIndex,icons}=params
  return {
    title,
    description,
    openGraph: {
      // title,
      // description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      // title,
      // description,
      images: [image]
    },
    icons,
    metadataBase: new URL('https://blog-app-five-delta-85.vercel.app'),
    themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
