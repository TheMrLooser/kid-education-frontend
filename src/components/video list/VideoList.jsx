import { OndemandVideo } from "@mui/icons-material";
import { List } from "antd";
import {
  getDownloadURL,
  getMetadata,
  getStorage,
  listAll,
  ref,
} from "firebase/storage";
import React, { useEffect, useState } from "react";
import { app } from "../../firebaseConfig";
import { videoIconStyles, VideoName, VideoSection } from "./VideoList.styles";

const VideoList = ({ id, player, videoName }) => {
  const [videoDetails, setVideoDetails] = useState([]);

  const storage = getStorage(app);
  const listRef = ref(storage, `courses/${id}`);

  useEffect(() => {
    const getVideos = async () => {
      setVideoDetails([]);
      listAll(listRef)
        .then((res) => {
          res.items.forEach(async (itemRef) => {
            const eachRef = ref(storage, itemRef.fullPath);

            getDownloadURL(ref(storage, `courses/${id}/${itemRef.name}`)).then(
              async (url) => {
                await getMetadata(eachRef).then((metadata) => {
                  setVideoDetails((prev) => [
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
              }
            );
          });
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getVideos();

    const sortData = () => {
      videoDetails.sort((a, b) => a.createdAt - b.createdAt);
    };
    sortData();
  }, [id]);

  return (
    <VideoSection player={player}>
      <List
        itemLayout="horizontal"
        dataSource={videoDetails}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<OndemandVideo sx={videoIconStyles} />}
              title={
                <a href={`/course/${id}/video/${item.name}`}>
                  <VideoName>
                    {item.name === videoName ? (
                      <>
                        {item.name?.slice(0, -4)}
                        <span>~PLAYING</span>
                      </>
                    ) : (
                      item.name?.slice(0, -4)
                    )}
                  </VideoName>
                </a>
              }
            />
          </List.Item>
        )}
      />
    </VideoSection>
  );
};

export default VideoList;
