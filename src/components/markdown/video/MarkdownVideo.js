import React from "react";
import BoilingWortVid from "./boiling-wort.mp4";
import BoilingWordPoster from "./boiling-wort.jpg";

const MarkdownVideo = props => {
  const { src, ...attributes } = props;
  let vidSrc = "",
    vidPoster = "";
  switch (src) {
    case "boiling-wort":
    default:
      vidSrc = BoilingWortVid;
      vidPoster = BoilingWordPoster;
      break;
  }
  return <video src={vidSrc} poster={vidPoster} {...attributes} />;
};

export default MarkdownVideo;
