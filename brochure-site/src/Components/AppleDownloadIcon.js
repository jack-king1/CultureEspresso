import React from "react";
import { ReactComponent as AppleDownloadIconFile } from "../Photos/apple-store.svg";

function AppleDownloadIcon() {
  return (
    <div className="flex items-center">
      <AppleDownloadIconFile className=" w-32 md:w-48 h-auto" />
    </div>
  );
}

export default AppleDownloadIcon;
