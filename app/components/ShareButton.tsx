"use client";
import { TwitterShareButton } from "next-share";
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
      <TwitterShareButton url={url} title={description}>
        <AiFillTwitterCircle className="w-12 h-12 text-gray-800" />
      </TwitterShareButton>
    </>
  );
}

export default ShareButton;
