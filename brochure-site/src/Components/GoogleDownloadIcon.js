import React from "react";
import { ReactComponent as GoogleDownloadIconFile } from "../Photos/google-store.svg";

function GoogleDownloadIcon() {
  const OpenNewWindow = () => {
    window.open("https://play.google.com/store/apps");
  };
  return (
    <div
      className="flex items-center mx-auto align-middle hover:cursor-pointer"
      onClick={() => OpenNewWindow()}
    >
      <GoogleDownloadIconFile className="w-48 md:w-64 h-auto" />
    </div>
  );
}

export default GoogleDownloadIcon;
