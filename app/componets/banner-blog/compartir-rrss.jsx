// components/ShareButtons.js
"use client";
import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import { FaShareAlt } from "react-icons/fa";

const ShareButtons = ({ url, title }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center">
      <div className="mr-2 text-gray-500">
        <FaShareAlt size={24} />
      </div>
      <FacebookShareButton
        url={url}
        quote={title}
        className="mx-1 transform transition-transform duration-300 hover:scale-110"
      >
        <FacebookIcon
          size={24}
          round
          className="text-gray-500 hover:text-blue-600"
        />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        className="mx-1 transform transition-transform duration-300 hover:scale-110"
      >
        <TwitterIcon
          size={24}
          round
          className="text-gray-500 hover:text-blue-400"
        />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        className="mx-1 transform transition-transform duration-300 hover:scale-110"
      >
        <LinkedinIcon
          size={24}
          round
          className="text-gray-500 hover:text-blue-700"
        />
      </LinkedinShareButton>
      <WhatsappShareButton
        url={url}
        title={title}
        className="mx-1 transform transition-transform duration-300 hover:scale-110"
      >
        <WhatsappIcon
          size={24}
          round
          className="text-gray-500 hover:text-green-500"
        />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
