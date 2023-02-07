import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;
export const CourseImg = styled.img`
  width: 100%;
  max-width: 270px;
  min-width: 80px;
  height: 150px;
  border-radius: 7px;

  @media (max-width: 900px) {
    max-width: 200px;
    height: 120px;
  }

  @media (max-width: 768px) {
    height: 80px;
  }

  @media (max-width: 420px) {
    height: 60px;
  }
`;
export const DetailSection = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PartOne = styled.div``;
export const PartTwo = styled.div``;

export const CourseName = styled.h1`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;
export const CourseSubTitle = styled.p`
  width: 100%;
  max-width: 80%;
  font-size: 14px;
  margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const CourseAuthor = styled.p`
  font-size: 12px;
  margin: 0;
`;
export const Price = styled(CourseName)`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
