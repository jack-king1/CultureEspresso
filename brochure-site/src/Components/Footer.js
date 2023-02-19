import React from "react";
import UilFacebook from "@iconscout/react-unicons/icons/uil-facebook";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import UilYoutube from "@iconscout/react-unicons/icons/uil-youtube";
import UilEnvelope from "@iconscout/react-unicons/icons/uil-envelope";
import Logo from "../Photos/logo.png";

function footer() {
  const OpenNewWindow = (url) => {
    window.open(url);
  };

  const CopyText = () => {
    navigator.clipboard.writeText("contact@cultureespressocafe.com");
    alert("Email Copied! Navigate to your email client and paste the email!");
  };

  return (
    <div className="w-full h-64 bg-black">
      <div className="flex justify-center pt-8 ">
        <img src={Logo} alt="Logo" className="px-4 w-64" />
      </div>
      <div className="flex justify-center gap-2 p-5">
        {" "}
        <UilFacebook
          className="hover:cursor-pointer hover:bg-yellow-600"
          size={"25"}
          color="#fff"
          onClick={() => OpenNewWindow("https://www.facebook.com/")}
        />
        <UilInstagram
          className="hover:cursor-pointer hover:bg-yellow-600"
          size={"25"}
          color="#fff"
          onClick={() => OpenNewWindow("https://www.instagram.com/")}
        />
        <UilYoutube
          className="hover:cursor-pointer hover:bg-yellow-600"
          size={"25"}
          color="#fff"
          onClick={() => OpenNewWindow("https://www.youtube.com/")}
        />
        <UilEnvelope
          className="hover:cursor-pointer hover:bg-yellow-600"
          size={"25"}
          color="#fff"
          onClick={() => CopyText()}
        />
      </div>
      <p className="text-white text-center text-sm">+44 1234567890</p>
      <div className="flex text-sm justify-center gap-2 mt-10 text-white">
        <div>© 2023 Culture Espresso</div>
        <div>Site by Jack King</div>
      </div>
    </div>
  );
}

export default footer;
