import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import VideoCard from "../components/video/VideoCard";
import { getPopularVideos } from "../features/videos/videos.action";
import PreLoaderSkeletonVideo from "../components/PreLoaderSkeletonVideo";
import { RootState } from "../store";

/* The landing page or home page */

const HomePage = () => {
  const dispatch = useDispatch();

  const { videos, loading } = useSelector(
    (state: RootState) => state.homeVideos
  );

  const fetchData = () => {
    dispatch(getPopularVideos());
  };

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <Container>
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={<div className="spinner-border text-danger d-block mx-auto" />}
        className="row"
      >
        {!loading
          ? videos.map((video, i) => (
              <Col lg={3} md={4} key={i}>
                <VideoCard video={video} key={video.id} />
              </Col>
            ))
          : [...Array(20)].map((r, i) => (
              <Col lg={3} md={4} key={i}>
                <PreLoaderSkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomePage;
