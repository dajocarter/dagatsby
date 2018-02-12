import React from "react";
import BoilingWortVid from "../../static/boiling-wort.mp4";
import BoilingWordPoster from "../../static/boiling-wort.jpg";

const MarkdownVideo = props => {
  const { src, ...attributes } = props;
  let vidSrc, vidPoster;
  switch (src) {
    case "boiling-wort":
      vidSrc = BoilingWortVid;
      vidPoster = BoilingWordPoster
      break;
  }
  return <video src={vidSrc} poster={BoilingWordPoster} {...attributes} />
};

export default MarkdownVideo;