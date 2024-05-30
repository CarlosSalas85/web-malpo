// components/ShareButtons.js
'use Client';
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

const ShareButtons = () => {
  return (
    <div className="mt-4 flex space-x-2">
      <FacebookShareButton
        url='https://www.malpo.cl'
        quote='titulo'
        className="rounded-full hover:bg-blue-500 focus:outline-none"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    {/*   <TwitterShareButton
        url={url}
        title={title}
        className="rounded-full hover:bg-blue-400 focus:outline-none"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton
        url={url}
        title={title}
        separator=":: "
        className="rounded-full hover:bg-green-500 focus:outline-none"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        className="rounded-full hover:bg-blue-700 focus:outline-none"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton> */}
    </div>
  );
};

export default ShareButtons;
