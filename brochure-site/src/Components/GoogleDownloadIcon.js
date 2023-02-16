import React from "react";
import { ReactComponent as GoogleDownloadIconFile } from "../Photos/google-store.svg";

function GoogleDownloadIcon() {
  return (
    <div className="flex items-center align-middle">
      <GoogleDownloadIconFile className="w-32 md:w-48 h-auto" />
    </div>
  );
}

export default GoogleDownloadIcon;
