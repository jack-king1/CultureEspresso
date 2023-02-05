import React from "react";
import UilFacebook from "@iconscout/react-unicons/icons/uil-facebook";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import UilYoutube from "@iconscout/react-unicons/icons/uil-youtube";
import UilEnvelope from "@iconscout/react-unicons/icons/uil-envelope";

function SocialMediaIcons() {
  return (
    <div className="flex items-center flex-1 justify-end">
      <UilFacebook
        className="hover:cursor-pointer hover:bg-yellow-400"
        size="30"
        color="#fff"
      />
      <UilInstagram
        className="hover:cursor-pointer hover:bg-yellow-400"
        size="30"
        color="#fff"
      />
      <UilYoutube
        className="hover:cursor-pointer hover:bg-yellow-400"
        size="30"
        color="#fff"
      />
      <UilEnvelope
        className="hover:cursor-pointer hover:bg-yellow-400"
        size="30"
        color="#fff"
      />
    </div>
  );
}

export default SocialMediaIcons;
