import styled from "styled-components";

export const VideoSection = styled.div`
  width: 100%;
  max-width: 100%;
  border: 1px solid lightgray;
  border-radius: 7px;
`;

export const VideoName = styled.p`
  margin-top: -10px;
  display: flex;
  justify-content: space-between;
  gap: 5px;

  video {
    display: none;
  }

  span {
    color: blue;
  }
`;

export const videoIconStyles = {
  marginTop: " 10px",
  marginRight: "-5px",
};
