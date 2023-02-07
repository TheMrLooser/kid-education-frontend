import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${(props) => (props.details ? "100%" : "350px")};

  a {
    text-decoration: none;
    color: black;
  }

  hr {
    border: none;
    border-bottom: 1px solid lightgray;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const DataWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const LeftSection = styled.div`
  display: flex;
  gap: 10px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100px;
  max-height: 60px;
`;
export const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 5px;
`;
export const CourseName = styled.p`
  max-width: ${(props) => (props.details ? "100%" : "220px")};
  font-size: 13px;
  font-weight: 600;
  margin: 0;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Updated = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0;
`;

export const Price = styled(CourseName)`
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  padding-right: 10px;

  @media (max-width: 1130px) {
    font-size: 14px;
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

export const RatingSection = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
