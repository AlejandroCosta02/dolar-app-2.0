"use client";
import {
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "next-share";
import {
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
  AiTwotoneMail,
} from "react-icons/ai";
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
    <div className="flex space-x-5 ">
      {/* TWITTER */}
      <TwitterShareButton
        url={`https://dolar-app-2-0.vercel.app/blog/${url}`}
        title={title}
      >
        <AiFillTwitterCircle className="w-12 h-12 text-gray-800" />
      </TwitterShareButton>
      {/* WPP */}
      <WhatsappShareButton
        url={`https://dolar-app-2-0.vercel.app/blog/${url}`}
        title={title}
        separator=": "
      >
        <AiOutlineWhatsApp className="w-12 h-12 text-gray-800" />
      </WhatsappShareButton>
      {/* MAIL */}
      <EmailShareButton
        url={`https://dolar-app-2-0.vercel.app/blog/${url}`}
        subject={title}
        body="body"
      >
        <AiTwotoneMail className="w-12 h-12 text-gray-800" />
      </EmailShareButton>
    </div>
  );
}

export default ShareButton;
