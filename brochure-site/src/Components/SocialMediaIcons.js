import React from "react";
import UilFacebook from "@iconscout/react-unicons/icons/uil-facebook";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import UilYoutube from "@iconscout/react-unicons/icons/uil-youtube";
import UilEnvelope from "@iconscout/react-unicons/icons/uil-envelope";

function SocialMediaIcons(props) {
  const OpenNewWindow = (url) => {
    window.open(url);
  };

  const CopyText = () => {
    console.log(props.browser);

    if (props.browser[0] == "Edge") {
    } else {
      navigator.clipboard.writeText("contact@cultureespressocafe.com");
    }

    alert("Email Copied! Navigate to your email client and paste the email!");
  };

  return (
    <div className="flex items-center flex-1 justify-center">
      <UilFacebook
        className="hover:cursor-pointer hover:bg-yellow-600"
        size={props.size.screenWidthRef[0] > 400 ? "30" : "15"}
        color="#fff"
        onClick={() => OpenNewWindow("https://www.facebook.com/")}
      />

      <UilInstagram
        className="hover:cursor-pointer hover:bg-yellow-600"
        size={props.size.screenWidthRef[0] > 400 ? "30" : "15"}
        color="#fff"
        onClick={() => OpenNewWindow("https://www.instagram.com/")}
      />
      <UilYoutube
        className="hover:cursor-pointer hover:bg-yellow-600"
        size={props.size.screenWidthRef[0] > 400 ? "30" : "15"}
        color="#fff"
        onClick={() => OpenNewWindow("https://www.youtube.com/")}
      />
      <UilEnvelope
        className="hover:cursor-pointer hover:bg-yellow-600"
        size={props.size.screenWidthRef[0] > 400 ? "30" : "15"}
        color="#fff"
        onClick={() => CopyText()}
      />
    </div>
  );
}

export default SocialMediaIcons;
