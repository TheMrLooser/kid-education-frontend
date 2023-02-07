import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

export const DetailSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 120px;

  @media (max-width: 1100px) {
    height: 100px;
  }

  @media (max-width: 768px) {
    height: 90px;
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => (props.cart ? "16px" : "14px")};
  font-weight: 600;
  line-height: 1.2;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin: 0;

  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
export const RatingInNumbers = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: goldenrod;
  margin: 0;
`;

export const CourseDemoGraphic = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Author = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: darklategray;
  margin: 0;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  @media (max-width: 600px) {
    display: ${(props) => (props.cart ? "none" : "-webkit-box")};
  }
`;

export const RatingCount = styled(Author)``;

export const PriceSection = styled.div``;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: ${(props) => (props.cart ? "#487bb6" : "black")};
`;

export const ButtonSection = styled.div``;
export const DeleteButton = styled.button`
  width: max-content;
  padding: 5px;
  background-color: red;
  color: white;
  outline: none;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
