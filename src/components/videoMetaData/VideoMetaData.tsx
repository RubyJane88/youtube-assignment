import React from "react";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

import * as S from "./VideoMetaData.style";
import { Item } from "../../models/youTubeResponseModel";

type Props = {
  video: Item;
  videoId: string;
};

/* title of the video, channel, views, and when the video was uploaded */
const VideoMetaData = ({ video: { snippet, statistics } }: Props) => {
  const { channelTitle, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  return (
    <div className="py-2">
      <S.Top>
        <h5>{title}</h5>
        <div className="py-1 d-flex justify-content-between align-items-center">
          <span>
            {numeral(viewCount).format("0.a")} Views •{" "}
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </S.Top>
      <S.Channel className="py-3 my-2 d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span> Subscribers</span>
          </div>
        </div>

        <button className={`p-2 m-2 border-0 btn "btn-gray"}`}>
          {"Subscribe"}
        </button>
      </S.Channel>
    </div>
  );
};

// @ts-ignore
export default VideoMetaData;
