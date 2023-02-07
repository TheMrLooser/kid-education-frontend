import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

export const visionSliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: (
    <ArrowBackIosNewOutlined
      size="sm"
      sx={{
        color: "black",
        width: "20px",
        height: "20px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "10px",
        opacity: "0.7",
      }}
    />
  ),
  nextArrow: (
    <ArrowForwardIosOutlined
      sx={{
        color: "black",
        width: "20px",
        height: "20px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "10px",
        opacity: "0.7",
      }}
    />
  ),
};
