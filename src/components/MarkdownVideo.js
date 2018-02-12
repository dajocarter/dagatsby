import React from "react";
import BoilingWort from "../../static/boiling-wort.mp4";

const MarkdownVideo = props => {
  const { src, ...attributes } = props;
  let vidSrc;
  switch (src) {
    case "boiling-wort":
      vidSrc = BoilingWort;
      break;
  }
  return <video src={vidSrc} {...attributes} />
};

export default MarkdownVideo;