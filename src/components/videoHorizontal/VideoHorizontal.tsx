import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import request from "../../http-client/config";
import * as S from "./VideoHorizontal.style";
import { Item, YouTubeResponseModel } from "../../models/youTubeResponseModel";

type Props = {
  video: Item;
  searchScreen?: any;
  subScreen?: any;
};

/* video horizontal cards layout after searching for a video
 * AND
 * the right sidebar list of related videos when watching a video */

const VideoHorizontal = ({ video, searchScreen, subScreen }: Props) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails,
    },
  } = video;

  const isVideo = !(id.kind === "youtube#channel" || subScreen);

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const getVideoDetails = async () => {
    const { data } = await request.get<YouTubeResponseModel>("/videos", {
      params: {
        part: "contentDetails,statistics",
        id: id.videoId,
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
    if (isVideo) getVideoDetails();
  }, [id, isVideo]);

  useEffect(() => {
    getChannelIcon();
  }, [channelId]);

  /* formatting time and date */
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const history = useHistory();

  const handleClick = () => {
    isVideo
      ? history.push(`/watch/${id.videoId}`)
      : history.push(`/channel/${channelId}`);
  };

  return (
    <Row
      className="py-2 m-1 align-items-center"
      style={{
        borderBottom: "0.3px solid #4c4c4c",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Col
        xs={6}
        md={searchScreen || subScreen ? 4 : 6}
        style={{
          position: "relative",
          textAlign: "center",
          paddingLeft: "0 !important",
        }}
      >
        <LazyLoadImage
          src={thumbnails.medium.url}
          effect="blur"
          style={{
            width: !isVideo ? "50%" : "100%",
            borderRadius: !isVideo ? "50%" : "",
          }}
        />
        {isVideo && <S.Duration>{_duration}</S.Duration>}
      </Col>
      <Col xs={6} md={searchScreen || subScreen ? 8 : 6} className="p-0">
        <S.Title className="mb-1">{title}</S.Title>

        {isVideo && (
          <S.Details>
            <AiFillEye /> {numeral(views).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </S.Details>
        )}

        {(searchScreen || subScreen) && (
          <S.Desc className="mt-1">{description}</S.Desc>
        )}

        <S.Channel className="my-1 d-flex align-items-center">
          {isVideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />}
          <p className="mb-0">{channelTitle}</p>
        </S.Channel>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
