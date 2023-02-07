import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  margin-top: 20px;
`;

export const VideoDetails = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  margin-inline: auto;

  @media (max-width: 788px) {
    flex-direction: column;
  }
`;

export const UploadVideoSection = styled.div`
  width: 80%;

  @media (max-width: 378px) {
    min-width: 300px;
  }
`;

export const VideosWrap = styled.div`
  width: 100%;
  min-width: 300px;
  border: 1px solid gray;
  border-radius: 15px;
  padding: 10px;

  @media (max-width: 788px) {
    max-width: 300px;
  }
`;

export const VideoList = styled.div`
  width: 100%;
  min-width: 300px;
  height: 500px;
  overflow-y: scroll;

  @media (max-width: 788px) {
    min-width: 300px;
    max-width: 100%;
  }
`;

export const DeleteSelect = styled.b`
  color: #eb455f;
`;
