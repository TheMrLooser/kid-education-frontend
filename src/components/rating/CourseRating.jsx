import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Rating,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AverageRating, Wrapper } from "./CourseRating.styles";
import { PostRatingAPI } from "../../API/api";
import { useLocation } from "react-router-dom";

const CourseRating = ({ open, setClose }) => {
  const { pathname } = useLocation();

  const courseId = pathname.split("/")[2];

  const [ratingValue, setRatingValue] = useState(0);

  const handleSubmit = () => {
    setClose(false);
    updateRating();
  };

  const handleClose = () => {
    saveLocal();
    setClose(false);
  };

  const saveLocal = () => {
    const now = new Date();
    const laterData = {
      value: "alert",
      expiry: now.getTime() + 180000,
    };
    localStorage.setItem("rating-later", JSON.stringify(laterData));
  };

  const updateRating = () => {
    const getData = async () => {
      const res = await PostRatingAPI(courseId, ratingValue);
      console.log(res.data);
    };
    getData();
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Rate this course ✨</DialogTitle>
      <DialogContentText>
        <Wrapper>
          <AverageRating>{ratingValue}</AverageRating>
          <Rating
            sx={{ fontSize: "40px" }}
            value={ratingValue}
            precision={0.2}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
        </Wrapper>
      </DialogContentText>
      <DialogActions>
        <Button onClick={handleClose}>Later</Button>
        <Button onClick={handleSubmit} autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CourseRating;
