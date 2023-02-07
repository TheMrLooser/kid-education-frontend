import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-block: 50px;
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const Player = styled.video`
  width: 100%;
  height: 100%;
`;

export const VideoTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
`;

export const VideoWrap = styled.div`
  transition: all 0.25s ease-in;
`;

export const PlayerWrap = styled.div`
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
