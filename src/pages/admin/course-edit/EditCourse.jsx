import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  GlobalStyles,
  InputLabel,
  InputSection,
  SelectInput,
} from "../../../components/CommonStyles";

import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowCircleLeftOutlined } from "@mui/icons-material";
import { Alert, Snackbar } from "@mui/material";
import JoditEditor from "jodit-react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import {
  AddNewCourseAPI,
  GetSingleCourseAPI,
  UpdateCourseAPI,
} from "../../../API/api";
import { courseSchema } from "../../../components/modal/add-course/courseSchema";
import { StyledInputField } from "../../contact/Contact.styles";
import {
  AddProduct,
  ButtonSection,
  ButtonWrap,
  CourseWrap,
  DescWrap,
  Discard,
  EditorSection,
  Heading,
  LeftSection,
  PhotoSection,
  RightSection,
  SectionTitle,
  StyledFileInputField,
  TagsWrap,
  Wrapper,
} from "./EditCourse.styles";

const EditCourse = () => {
  const { search } = useLocation();

  const editor = useRef(null);

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

  // setting for changing type of input section
  const [update, setUpdate] = useState(false);
  const [openVideoUploadSec, setOpenVideoUploadSec] = useState(false);
  const [courseID, setCourseID] = useState("");
  const [course, setCourse] = useState();

  useEffect(() => {
    const query = window.location.search.replace("?", "").split("&");
    if (query[0] === "update=true") {
      setUpdate(true);
      const id = query[1].replace("id=", "");
      setCourseID(id);
    }
  }, []);
  useEffect(() => {
    const getCourse = async () => {
      const res = await GetSingleCourseAPI(courseID);
      setCourse(res.data.course);
    };
    getCourse();
  }, [courseID]);

  const [imgFile, setImgFile] = useState("");
  const [title, setTitle] = useState(null);
  const [subName, setSubName] = useState(null);
  const [desc, setDecs] = useState(null);
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState("");
  const [auther, setAuther] = useState(null);
  const [catagory, setCatagory] = useState(null);

  useEffect(() => {
    setImgFile(course ? course.img : "");
    setTitle(course ? course.courseName : null);
    setSubName(course ? course.subName : null);
    setDecs(course ? course.description : null);
    setPrice(course ? course.price : 0);
    setTags(course ? course.tags : "");
    setAuther(course ? course.auther : null);
    setCatagory(course ? course.catagory : null);
  }, [course]);

  // converting img to base64
  const buffringImg = (file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImgFile(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const { handleSubmit, reset } = useForm({
    mode: "all",
    resolver: yupResolver(courseSchema),
  });

  const onSubmit = (d) => {
    alert(JSON.stringify(d));
    reset();
  };

  const AddCourse = async () => {
    const res = await AddNewCourseAPI(
      imgFile,
      title,
      subName,
      desc.toString(),
      price,
      tags,
      auther,
      catagory
    );
    console.log(res.data);
    if (res.data.error) {
      return setAlert("error", res.data.message, true);
    }
    setAlert("success", res.data.message, true);
  };

  const updateCourse = async () => {
    const res = await UpdateCourseAPI(
      imgFile,
      title,
      subName,
      desc.toString(),
      price,
      tags,
      auther,
      catagory,
      courseID
    );
    if (res.data.error) {
      return setAlert("error", res.data.message, true);
    }
    setAlert("success", res.data.message, true);
  };

  return (
    <Container>
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

      <GlobalStyles />
      <Wrapper>
        <Heading>
          <Link
            to="/admin?tab=courses"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ArrowCircleLeftOutlined
              sx={{ width: "30px", height: "30px", cursor: "pointer" }}
            />
          </Link>
          {search === "" ? "Add Course" : "Edit Course"}
        </Heading>
        <CourseWrap onSubmit={handleSubmit(onSubmit)}>
          {!openVideoUploadSec ? (
            <>
              <LeftSection>
                <SectionTitle>Description</SectionTitle>
                <DescWrap>
                  <InputSection>
                    <InputLabel>Course Name</InputLabel>
                    <StyledInputField
                      type="text"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      placeholder={course ? course.courseName : null}
                    />
                  </InputSection>
                  <InputSection>
                    <InputLabel>SubTitle</InputLabel>
                    <StyledInputField
                      type="text"
                      onChange={(e) => {
                        setSubName(e.target.value);
                      }}
                      placeholder={course ? course.subTitle : null}
                    />
                  </InputSection>
                  <InputSection>
                    <InputLabel>Auther</InputLabel>
                    <StyledInputField
                      type="text"
                      onChange={(e) => {
                        setAuther(e.target.value);
                      }}
                      placeholder={course ? course.auther : null}
                    />
                  </InputSection>
                  <InputSection>
                    <InputLabel>Category</InputLabel>
                    <SelectInput
                      name="cars"
                      id="cars"
                      onChange={(e) => setCatagory(e.target.value)}
                      value={catagory}
                    >
                      <option value="">Select Category</option>
                      <option value="ARTIFICIAL INTELLIGENCE (AI)">
                        Artificial Intelligence
                      </option>
                      <option value="CODING">Coding</option>
                      <option value="ROBOTICS">Robotics</option>
                      <option value="APP DEVELOPMENT">App Development</option>
                      <option value="PHYSICAL COMPUTING">
                        Physical Computing
                      </option>
                      <option value="INTERNET OF THINGS">
                        Internet of things
                      </option>
                      <option value="AERO MODELLING & DRONES">
                        Areo Modelling & Drones
                      </option>
                    </SelectInput>
                  </InputSection>
                  <EditorSection>
                    <InputLabel>Description</InputLabel>

                    <JoditEditor
                      ref={editor}
                      value={desc}
                      tabIndex={1} // tabIndex of textarea
                      onBlur={(newContent) => setDecs(newContent)} // preferred to use only this option to update the content for performance reasons
                      onChange={(newContent) => setDecs(newContent)}
                    />
                  </EditorSection>
                </DescWrap>
              </LeftSection>
              <PhotoSection>
                <SectionTitle>Course Image</SectionTitle>

                <InputSection>
                  <StyledFileInputField
                    type="file"
                    onChange={(e) => {
                      buffringImg(e.target.files[0]);
                    }}
                    placeholder={course ? course.catagory : null}
                  />
                </InputSection>
              </PhotoSection>

              <RightSection>
                <SectionTitle>Pricings</SectionTitle>
                <TagsWrap>
                  <InputSection>
                    <InputLabel>Tags</InputLabel>
                    <StyledInputField
                      type="text"
                      onChange={(e) => {
                        setTags(e.target.value);
                      }}
                    />
                  </InputSection>
                  <InputSection>
                    <InputLabel>Price</InputLabel>
                    <StyledInputField
                      type="number"
                      min="0"
                      placeholder={course ? course.price : null}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </InputSection>
                </TagsWrap>
              </RightSection>
            </>
          ) : null}

          <ButtonSection>
            <ButtonWrap>
              {update && !openVideoUploadSec ? (
                <Link to={`/admin/course/${courseID}/video?tab=upload`}>
                  <Discard onClick={() => setOpenVideoUploadSec(true)}>
                    Upload Videos
                  </Discard>
                </Link>
              ) : null}

              {update && !openVideoUploadSec ? (
                <AddProduct
                  type="submit"
                  onClick={update ? updateCourse : AddCourse}
                >
                  {update ? "Update Course" : "Add Course"}
                </AddProduct>
              ) : null}
              {!update && !openVideoUploadSec ? (
                <AddProduct
                  type="submit"
                  onClick={update ? updateCourse : AddCourse}
                >
                  {update ? "Update Course" : "Add Course"}
                </AddProduct>
              ) : null}
            </ButtonWrap>
          </ButtonSection>
        </CourseWrap>
      </Wrapper>
    </Container>
  );
};

export default EditCourse;
