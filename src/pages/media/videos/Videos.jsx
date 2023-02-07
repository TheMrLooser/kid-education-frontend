import { PlayCircle } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import {
  getDownloadURL,
  getMetadata,
  getStorage,
  listAll,
  ref,
} from "firebase/storage";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GetPopularCourseAPI } from "../../../API/api";
import { Container, SectionHeading } from "../../../components/CommonStyles";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import { app } from "../../../firebaseConfig";
import {
  Player,
  PlayerWrap,
  VideoGrid,
  VideoTitle,
  VideoWrap,
  Wrapper,
} from "./Videos.styles";

const Videos = () => {
  const [course, setCourse] = useState([]);
  const [videos, setVideos] = useState([]);
  const storage = getStorage(app);

  useEffect(() => {
    const getData = async () => {
      const res = await GetPopularCourseAPI();
      setCourse(res.data.courses);
    };
    getData();
  }, [storage]);

  useEffect(() => {
    const getVideos = async (id) => {
      const listRef = ref(storage, `courses/${id}`);
      setVideos([]);
      listAll(listRef)
        .then((res) => {
          res.items.forEach(async (itemRef) => {
            const eachRef = ref(storage, itemRef.fullPath);
            await getDownloadURL(
              ref(storage, `courses/${id}/${itemRef.name}`)
            ).then(async (url) => {
              await getMetadata(eachRef).then((metadata) => {
                setVideos((prev) => [
                  ...prev,
                  {
                    id: metadata.md5Hash,
                    name: metadata.name,
                    link: url,
                    createdAt: metadata.timeCreated,
                    updatedAt: metadata.updated,
                  },
                ]);
              });
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    course.map((data) => getVideos(data.id));
  }, [course, storage]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <SectionHeading>Videos</SectionHeading>

        <VideoGrid>
          {videos ? (
            videos.map((data, index) => (
              <Link to="/login" key={index}>
                <PlayerWrap>
                  <VideoWrap>
                    <Player>
                      <source src={data.link} />
                    </Player>
                  </VideoWrap>
                  <VideoTitle>{data.name}</VideoTitle>
                </PlayerWrap>
              </Link>
            ))
          ) : (
            <CircularProgress color="inherit" />
          )}
        </VideoGrid>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Videos;
