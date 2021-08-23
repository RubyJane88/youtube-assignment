import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";

import request from "../../http-client/config";
import * as S from "./VideoCard.style";
import { Item, YouTubeResponseModel } from "../../models/youTubeResponseModel";

type Props = {
  video: Item;
  channelScreen?: any;
};

/* Video card with on the home screen */

/* With react-lazy-load-image-component
 * An easy-to-use performant solution to lazy load images in React*/

/* The AiFillEye icon from react-icons/ai is the small eye icon */
const VideoCard = ({ video, channelScreen }: Props) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || contentDetails?.videoId || id;

  const history = useHistory();

  const getVideDetails = async () => {
    const { data } = await request.get<YouTubeResponseModel>("/videos", {
      params: {
        part: "contentDetails,statistics",
        id: _videoId,
      },
    });
    setDuration(data.items[0].contentDetails.duration);
    setViews(data.items[0].statistics.viewCount);
  };

  const getChannelIcon = async () => {
    const { data } = await request.get<YouTubeResponseModel>("/channels", {
      params: {
        part: "snippet",
        id: channelId,
      },
    });
    setChannelIcon(data.items[0].snippet.thumbnails.default);
  };

  useEffect(() => {
    getVideDetails();
  }, [_videoId]);

  useEffect(() => {
    getChannelIcon();
  }, [channelId]);

  /* navigate to the video to watch */
  const handleVideoClick = () => {
    history.push(`/watch/${_videoId}`);
  };

  return (
    <S.Wrapper onClick={handleVideoClick}>
      <S.Top>
        <LazyLoadImage src={medium.url} effect="blur" />
        <S.Duration>{_duration}</S.Duration>
      </S.Top>
      <S.Title>{title}</S.Title>
      <S.Details>
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •{" "}
        </span>{" "}
        <span> {moment(publishedAt).fromNow()} </span>
      </S.Details>
      {!channelScreen && (
        <S.Channel>
          <LazyLoadImage src={channelIcon?.url} effect="blur" />
          <p>{channelTitle}</p>
        </S.Channel>
      )}
    </S.Wrapper>
  );
};

export default VideoCard;
