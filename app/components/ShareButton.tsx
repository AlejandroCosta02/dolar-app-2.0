"use client";
import { NextSeo } from "next-seo";
import { TwitterShareButton } from "next-share";
import { AiFillTwitterCircle } from "react-icons/ai";
function ShareButton({
  title,
  url,
  description,
  image,
}: {
  title: string;
  url: string;
  description: string;
  image: string;
}) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          images: [{ url: image }],
        }}
      />
      <TwitterShareButton
        url={`https://dolar-app-2-0.vercel.app/blog/${url}`}
        title={title}
      >
        <AiFillTwitterCircle className="w-12 h-12 text-gray-800" />
      </TwitterShareButton>
    </>
  );
}

export default ShareButton;
