import React from "react";
import UilFacebook from "@iconscout/react-unicons/icons/uil-facebook";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import UilYoutube from "@iconscout/react-unicons/icons/uil-youtube";
import UilEnvelope from "@iconscout/react-unicons/icons/uil-envelope";

function SocialMediaIcons() {
  return (
    <div className="flex items-center flex-1 justify-end">
      <UilFacebook
        className="hover:cursor-pointer hover:bg-yellow-200"
        size="30"
        color="#f97316"
      />
      <UilInstagram
        className="hover:cursor-pointer hover:bg-yellow-200"
        size="30"
        color="#f97316"
      />
      <UilYoutube
        className="hover:cursor-pointer hover:bg-yellow-200"
        size="30"
        color="#f97316"
      />
      <UilEnvelope
        className="hover:cursor-pointer hover:bg-yellow-200"
        size="30"
        color="#f97316"
      />
    </div>
  );
}

export default SocialMediaIcons;
