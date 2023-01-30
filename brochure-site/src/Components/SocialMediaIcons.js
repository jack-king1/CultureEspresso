import React from "react";
import UilFacebook from "@iconscout/react-unicons/icons/uil-facebook";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import UilYoutube from "@iconscout/react-unicons/icons/uil-youtube";
import UilEnvelope from "@iconscout/react-unicons/icons/uil-envelope";

function SocialMediaIcons() {
  return (
    <div className="flex items-center flex-1 justify-end">
      <UilFacebook className="hover:cursor-pointer" size="30" color="#2C2C2C" />
      <UilInstagram
        className="hover:cursor-pointer"
        size="30"
        color="#2C2C2C"
      />
      <UilYoutube className="hover:cursor-pointer" size="30" color="#2C2C2C" />
      <UilEnvelope className="hover:cursor-pointer" size="30" color="#2C2C2C" />
    </div>
  );
}

export default SocialMediaIcons;
