import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytesResumable,
  getMetadata,
  deleteObject,
} from "firebase/storage";
import { app } from "../../../firebaseConfig";
import { Button, List, Upload } from "antd";
import {
  DeleteSelect,
  UploadVideoSection,
  VideoDetails,
  VideoList,
  Wrapper,
} from "./VideoBrief.styles";
import {
  ButtonWrap,
  Cancel,
  Heading,
  SectionTitle,
  UploadVideo,
  VideoSection,
  VideoWrap,
} from "../course-edit/EditCourse.styles";
import {
  Alert,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Snackbar,
  Tab,
} from "@mui/material";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { UploadVideoAPI } from "../../../API/api";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  ActionGroup,
  deleteStyles,
  editStyles,
  TableWrap,
  TabPanelStyles,
  TabStyles,
} from "../dashboard/Admin.styles";
import { ArrowCircleLeftOutlined, Delete, Edit } from "@mui/icons-material";
import InfoTable from "../../../components/table/InfoTable";
import { vidCols } from "./videoTable";
import { GlobalStyles } from "../../../components/CommonStyles";

const VideoBrief = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoproce, setVideProce] = useState(0);
  const [isDeleted, setDeleted] = useState(false);
  const [selectDeleteVideo, setDeleteVideo] = useState("");
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  let videoTitle = "";

  const { id } = useParams();
  const [value, setValue] = useSearchParams({ tab: "upload" });

  const handleChange = (event, newValue) => {
    setValue({ tab: newValue });
  };

  //TODO: MAKE UNIVERSAL ALERT STATE

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertText, setAlertText] = useState("Somthing");
  const [alertType, setAlertType] = useState("Somthing");

  const setAlert = (type, text, status) => {
    setAlertType(type);
    setAlertText(text);
    setAlertOpen(status);
  };

  const handleClose = () => {
    setAlertOpen(false);
  };

  const storage = getStorage(app);
  const listRef = ref(storage, `courses/${id}`);

  useLayoutEffect(() => {
    const getVideos = () => {
      setVideoDetails([]);
      listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            const eachRef = ref(storage, itemRef.fullPath);

            getDownloadURL(ref(storage, `courses/${id}/${itemRef.name}`)).then(
              (url) => {
                getMetadata(eachRef).then((metadata) => {
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
  }, [id, isDeleted]);

  let sortedVideoList = [];

  const sortData = () => {
    sortedVideoList = [...videoDetails];

    sortedVideoList.sort((a, b) => {
      return (
        new Date(Date.parse(a.createdAt)) - new Date(Date.parse(b.createdAt))
      );
    });
  };
  sortData();

  // uploading video on firebase
  const uploadFile = (file, name) => {
    const promises = [];
    videoTitle = name;
    const storage = getStorage(app);
    const storageRef = ref(storage, `courses/${id}/${name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    promises.push(uploadTask);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setVideProce(Math.round(progress));
        setAlert("success", `Video uploading...`, true);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then(
          async (downloadURL) => {
            const res = await UploadVideoAPI(id, downloadURL, videoTitle);
            console.log(downloadURL);
            if (res.data.error) {
              return setAlert("error", res.data.message, true);
            }
            setAlert("success", res.data.message, true);
          }
        );
      }
    );
    Promise.all(promises)
      .then(() => console.log("uploaded!!"))
      .catch((err) => console.log(err));
  };

  const onVideoChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newVideo = e.target.files[i];
      setVideos((prev) => [...prev, newVideo]);
    }
  };

  const uploadVideo = async () => {
    videos.map(async (video) => {
      await uploadFile(video, video.name);
    });
  };

  const selectDelete = (name) => {
    setDeleteVideo(name);
    setDeleteModalOpen((prev) => !prev);
  };

  const DeleteVideo = (selectDeleteVideo) => {
    const deleteRef = ref(storage, `courses/${id}/${selectDeleteVideo}`);

    deleteObject(deleteRef)
      .then(() => {
        setAlert("success", `"${selectDeleteVideo}" Deleted!!`, true);
        setDeleted((prev) => !prev);
      })
      .catch((error) => {
        setAlert("success", error.message, true);
        setDeleted((prev) => !prev);
      });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <ActionGroup>
            <Delete
              onClick={() => selectDelete(params.row.name)}
              sx={deleteStyles}
            />
          </ActionGroup>
        );
      },
    },
  ];

  return (
    <Wrapper>
      <GlobalStyles />
      <Dialog
        open={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
      >
        <DialogTitle id="alert-dialog-title">{"Delete Video"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <DeleteSelect>{selectDeleteVideo}</DeleteSelect> will be delete
            permanently!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteModalOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              DeleteVideo();
              setDeleteModalOpen(false);
            }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Heading>
        <Link
          to="/admin?tab=courses"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ArrowCircleLeftOutlined
            sx={{ width: "30px", height: "30px", cursor: "pointer" }}
          />
        </Link>
        Videos
      </Heading>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
      >
        <Alert
          severity={alertType}
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {alertText}
        </Alert>
      </Snackbar>
      <TabContext value={value.get("tab")}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Upload" value="upload" sx={TabStyles} />
            <Tab label="Content" value="content" sx={TabStyles} />
          </TabList>
        </Box>
        <TabPanel value="upload" sx={TabPanelStyles}>
          <TableWrap>
            <UploadVideoSection>
              <VideoSection>
                <VideoWrap onChange={onVideoChange}>
                  <Upload.Dragger
                    multiple
                    listType="picture-card"
                    accept=".mp4"
                    beforeUpload={() => {
                      /* update state here */
                      return false;
                    }}
                  >
                    <Button>Upload</Button>
                  </Upload.Dragger>
                </VideoWrap>
              </VideoSection>
              <br />
              <ButtonWrap>
                <Cancel>Cancel</Cancel>
                <UploadVideo onClick={uploadVideo}>Upload</UploadVideo>
              </ButtonWrap>
            </UploadVideoSection>
          </TableWrap>
        </TabPanel>
        <TabPanel value="content" sx={TabPanelStyles}>
          {sortedVideoList && (
            <InfoTable
              rows={sortedVideoList}
              columns={vidCols.concat(actionColumn)}
            />
          )}
        </TabPanel>
      </TabContext>
    </Wrapper>
  );
};

export default VideoBrief;
