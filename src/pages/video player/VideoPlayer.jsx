import { getDownloadURL, getStorage, ref } from "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import Pulse from "react-reveal/Pulse";
import { useParams } from "react-router-dom";
import { RatingModal } from "../../App";
import { Container, GlobalStyles } from "../../components/CommonStyles";
import Header from "../../components/header/Header";
import VideoFrame from "../../components/video frame/VideoFrame";
import VideoList from "../../components/video list/VideoList";
import { app } from "../../firebaseConfig";
import { SectionHeading } from "../course-detail/ShowCourse.styles";
import {
  ChooseDesc,
  CoursePlayer,
  DownFinger,
  Section,
  VideoTitle,
  VideoWrap,
  Wrapper,
} from "./VideoPlayer.styles";

const VideoPlayer = () => {
  const { id, vidname } = useParams();
  const [videoURL, setVideoURL] = useState();
  const { setRatingModalOpen } = useContext(RatingModal);

  const storage = getStorage(app);

  useEffect(() => {
    getDownloadURL(ref(storage, `courses/${id}/${vidname}`)).then((url) => {
      setVideoURL(url);
    });
  }, [id, storage, vidname]);

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
    } else {
      setRatingModalOpen(false);
    }
  }, [setRatingModalOpen]);

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <CoursePlayer>
          {vidname !== "choose" ? (
            <VideoWrap>
              <VideoFrame videoURL={videoURL} />
              <VideoTitle>{vidname.slice(0, -4)}</VideoTitle>
            </VideoWrap>
          ) : (
            <Pulse>
              <ChooseDesc>
                <SectionHeading>
                  Select one of the below video to start learning
                </SectionHeading>
                <DownFinger>👇🏽</DownFinger>
              </ChooseDesc>
            </Pulse>
          )}
          <Section>
            {vidname !== "choose" ? (
              <SectionHeading>Course content</SectionHeading>
            ) : null}
            <VideoList id={id} videoName={vidname} player="true" />
          </Section>
        </CoursePlayer>
      </Wrapper>
    </Container>
  );
};

export default VideoPlayer;
