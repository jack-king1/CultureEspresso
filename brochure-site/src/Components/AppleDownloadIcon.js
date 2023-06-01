import React from "react";
import { ReactComponent as AppleDownloadIconFile } from "../Photos/apple-store.svg";

function AppleDownloadIcon() {
  const OpenNewWindow = () => {
    window.open("https://www.apple.com/uk/app-store/");
  };

  return (
    <div
      className="flex items-center mx-auto hover:cursor-pointer"
      onClick={() => OpenNewWindow()}
    >
      <AppleDownloadIconFile className=" w-48 md:w-64 h-auto" />
    </div>
  );
}

export default AppleDownloadIcon;
