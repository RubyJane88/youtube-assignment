import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import VideoHorizontal from "../components/videoHorizontal/VideoHorizontal";
import VideoMetaData from "../components/videoMetaData/VideoMetaData";
import {
  getRelatedVideos,
  getVideoById,
} from "../features/videos/videos.action";
import { RootState } from "../store";

/* Clicking a card will redirect you here to watch a video you've chosen */
const WatchVideoPage = () => {
  // getting the ID params from the url
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);

  const { videos } = useSelector((state: RootState) => state.relatedVideos);

  const { video, loading } = useSelector(
    (state: RootState) => state.selectedVideo
  );

  return (
    <Row>
      <Col lg={8}>
        <Wrapper>
          {/* iframe is where we are watching =) */}
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          />
        </Wrapper>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>Loading...</h6>
        )}
      </Col>
      <Col lg={4}>
        {!loading ? (
          videos
            ?.filter((video) => video.snippet)
            .map((video) => (
              <VideoHorizontal video={video} key={video.id.videoId} />
            ))
        ) : (
          <SkeletonTheme color="#343a40" highlightColor="#3c4147">
            <Skeleton width="100%" height="130px" count={15} />
          </SkeletonTheme>
        )}
      </Col>
    </Row>
  );
};

export default WatchVideoPage;

const Wrapper = styled.div`
  height: 60vh;
  background-color: #353946;
  width: 100%;
  margin-bottom: 2rem;
`;
