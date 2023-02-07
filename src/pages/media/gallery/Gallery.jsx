import React from "react";
import { Container, SectionHeading } from "../../../components/CommonStyles";
import Header from "../../../components/header/Header";
import { GalleryGrid, GalleryImage, Wrapper } from "./Gallery.styles";
import { galleryImages } from "./images";

const Gallery = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <SectionHeading>Gallery</SectionHeading>
        <GalleryGrid>
          {galleryImages.map((item, index) => (
            <GalleryImage src={item.src} alt="" key={index} />
          ))}
        </GalleryGrid>
      </Wrapper>
    </Container>
  );
};

export default Gallery;
