import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, GlobalStyles } from "../../components/CommonStyles";
import VideoFrame from "../../components/video frame/VideoFrame";
import VideoList from "../../components/video list/VideoList";
import Header from "../../components/header/Header";
import {
  CoursePlayer,
  Section,
  VideoTitle,
  VideoWrap,
  Wrapper,
} from "./VideoPlayer.styles";
import { SectionHeading } from "../course-detail/ShowCourse.styles";
import { app } from "../../firebaseConfig";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { Authentication, RatingModal } from "../../App";
import { GetSingleUser } from "../../API/api";

const VideoPlayer = () => {
  const { id, vidname } = useParams();
  const [videoURL, setVideoURL] = useState();
  const { setRatingModalOpen } = useContext(RatingModal);

  const storage = getStorage(app);

  useEffect(() => {
    getDownloadURL(ref(storage, `courses/${id}/${vidname}`)).then((url) => {
      setVideoURL(url);
    });
  }, [id, vidname]);

  useEffect(() => {
    const itemStr = localStorage.getItem("rating-later");
    if (!itemStr) {
      console.log("item not present");
      setRatingModalOpen(true);
    }
    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item?.expiry) {
      localStorage.removeItem("rating-later");
      setRatingModalOpen(true);
      console.log("current time is greater than previous");
    } else {
      console.log("current time is lesser than previous");
      setRatingModalOpen(true);
    }
  }, []);

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <CoursePlayer>
          <VideoWrap>
            <VideoFrame videoURL={videoURL} />
            <VideoTitle>{vidname.slice(0, -4)}</VideoTitle>
          </VideoWrap>
          <Section>
            <SectionHeading>Course content</SectionHeading>
            <VideoList id={id} videoName={vidname} player="true" />
          </Section>
        </CoursePlayer>
      </Wrapper>
    </Container>
  );
};

export default VideoPlayer;
