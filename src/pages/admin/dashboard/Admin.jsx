import { AddCircle, Delete, Edit, VideoLibrary } from "@mui/icons-material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Collapse,
  Modal,
  Tab,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  DeleteCourseAPI,
  GetAllCoursesAPI_Admin,
  GetAllUsersAPI,
  GetAllVideoAPI,
} from "../../../API/api";
import Chart from "../../../components/chart/Chart";
import { Container, GlobalStyles } from "../../../components/CommonStyles";
import Header from "../../../components/header/Header";
import InfoTable from "../../../components/table/InfoTable";
import { courseCols, userCols, videoCols } from "../tablesColumns";
import {
  ActionGroup,
  AddCourseButton,
  ButtonSection,
  deleteStyles,
  editStyles,
  ProgressWrap,
  TableWrap,
  TabPanelStyles,
  TabStyles,
  videoLibraryStyles,
  Wrapper,
} from "./Admin.styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Admin = () => {
  // alert section
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertText, setAlertText] = useState("Somthing");
  const [alertType, setAlertType] = useState("success");

  const setAlert = (type, text, status) => {
    setAlertType(type);
    setAlertText(text);
    setAlertOpen(status);
  };

  if (alertOpen) {
    setTimeout(() => {
      setAlertOpen(false);
    }, 10000);
  }

  // course API call section
  const [users, setUsers] = useState(null);
  const [courses, setCourses] = useState(null);
  const [videos, setVideds] = useState(null);
  useEffect(() => {
    const getAllUser = async () => {
      const res = await GetAllUsersAPI();
      setUsers(res.data.users);
    };
    const getAllcoures = async () => {
      const res = await GetAllCoursesAPI_Admin();
      setCourses(res.data.courses);
    };
    const getAllVideos = async () => {
      const res = await GetAllVideoAPI();
      setVideds(res.data.videos);
    };
    getAllcoures();
    getAllUser();
    getAllVideos();
  }, [alertOpen]);

  //modals section
  const [open, setOpen] = useState(false);
  const [courseId, setCourseId] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (id) => {
    setOpen(true);
    setCourseId(id);
  };

  // Table Section
  const [value, setValue] = useSearchParams({ tab: "users" });

  const handleChange = (event, newValue) => {
    setValue({ tab: newValue });
  };

  const handleDelete = async () => {
    const res = await DeleteCourseAPI(courseId);
    if (res.data.error) {
      return setAlert("error", res.data.message, true);
    }
    setAlert("success", res.data.message, true);
    setOpen(false);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <ActionGroup>
            <Link
              onMouseEnter={() => setCourseId(params.row.id)}
              to={`/admin/edit?update=true&id=${courseId}`}
              style={{ textDecoration: "none" }}
            >
              <Edit sx={editStyles} />
            </Link>
            <Delete
              onClick={() => handleOpen(params.row.id)}
              sx={deleteStyles}
            />

            <Link to={`/admin/course/${params.row.id}/video?tab=upload`}>
              <VideoLibrary sx={videoLibraryStyles} />
            </Link>
          </ActionGroup>
        );
      },
    },
  ];

  const data = [
    { name: "January", total: 1200 },
    { name: "February", total: 2100 },
    { name: "March", total: 800 },
    { name: "April", total: 1600 },
    { name: "May", total: 900 },
    { name: "June", total: 1700 },
  ];

  return (
    <Container>
      <Collapse in={alertOpen}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertOpen(true);
              }}
            ></IconButton>
          }
          sx={{ mb: 2 }}
          severity={alertType}
        >
          {alertText}
        </Alert>
      </Collapse>

      <GlobalStyles />
      <Header user="admin" />

      <Wrapper>
        <TabContext value={value.get("tab")}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Users" value="users" sx={TabStyles} />
              <Tab label="Transactions" value="transactions" sx={TabStyles} />
              <Tab label="Courses" value="courses" sx={TabStyles} />
              <Tab label="Videos" value="videos" sx={TabStyles} />
            </TabList>
          </Box>
          {users ? (
            <TabPanel value="users" sx={TabPanelStyles}>
              <TableWrap>
                <Chart data={data} />
                <InfoTable rows={users} columns={userCols} />
              </TableWrap>
            </TabPanel>
          ) : (
            <ProgressWrap>
              <CircularProgress color="inherit" />
            </ProgressWrap>
          )}
          {users ? (
            <TabPanel value="transactions" sx={TabPanelStyles}>
              <TableWrap>
                <Chart data={data} />
                <InfoTable rows={users} columns={userCols} />
              </TableWrap>
            </TabPanel>
          ) : (
            <ProgressWrap>
              <CircularProgress color="inherit" />
            </ProgressWrap>
          )}
          {courses ? (
            <TabPanel value="courses" sx={TabPanelStyles}>
              <TableWrap>
                <ButtonSection>
                  <Link to="/admin/edit" style={{ textDecoration: "none" }}>
                    <AddCourseButton>
                      <AddCircle />
                      Add Course
                    </AddCourseButton>
                  </Link>
                </ButtonSection>
                <InfoTable
                  rows={courses}
                  columns={courseCols.concat(actionColumn)}
                />
              </TableWrap>
            </TabPanel>
          ) : (
            <ProgressWrap>
              <CircularProgress color="inherit" />
            </ProgressWrap>
          )}
          {users ? (
            <TabPanel value="videos" sx={TabPanelStyles}>
              <TableWrap>
                <InfoTable rows={videos} columns={videoCols} />
              </TableWrap>
            </TabPanel>
          ) : (
            <ProgressWrap>
              <CircularProgress color="inherit" />
            </ProgressWrap>
          )}
        </TabContext>

        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Confirmation</h2>
            <p id="child-modal-description">
              Are you sure to delete this course, it can never retrive again.
            </p>
            <div>
              <Button onClick={handleDelete}>Delete</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </div>
          </Box>
        </Modal>
      </Wrapper>
      {/* <AddCourse /> */}
    </Container>
  );
};

export default Admin;
