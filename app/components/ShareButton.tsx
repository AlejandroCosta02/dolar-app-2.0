"use client";
import { TwitterShareButton } from "next-share";
import Image from "next/image";
import { AiFillTwitterCircle } from "react-icons/ai";
function ShareButton({
  title,
  url,
  description,
}: {
  title: string;
  url: string;
  description: string;
}) {
  return (
    <>
      <TwitterShareButton
        url={`https://dolar-app-2-0.vercel.app/blog/${url}`}
        title={description}
      >
        <AiFillTwitterCircle className="w-12 h-12 text-gray-800" />
      </TwitterShareButton>
    </>
  );
}

export default ShareButton;
