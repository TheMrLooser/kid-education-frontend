import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  min-height: 200px;
  margin-inline: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-block: 50px;
`;

export const CourseSection = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const CardWrap = styled.div`
  width: 300px;
  cursor: pointer;

  @media (max-width: 400px) {
    min-width: 100%;
  }

  @media (min-width: 600px) {
    width: 250px;
  }

  @media (min-width: 768px) {
    width: 200px;
  }

  @media (min-width: 1024px) {
    width: 180px;
  }
`;

export const CourseList = styled.div`
  margin-inline: auto;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, 200px); */
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  a {
    text-decoration: none;
  }
`;

export const CourseImg = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 7px;

  @media (min-width: 768px) {
    height: 120px;
  }
`;

export const CourseName = styled.h1`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

export const AuthorName = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: grey;
`;
