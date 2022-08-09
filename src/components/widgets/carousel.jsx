import React from "react";
import carousel1 from "assets/images/carousel/1.jpg";
import carousel2 from "assets/images/carousel/2.jpg";
import carousel3 from "assets/images/carousel/3.jpg";
import carousel4 from "assets/images/carousel/4.jpg";
import carousel5 from "assets/images/carousel/5.jpg";
import { Carousel, CarouselItem } from "react-bootstrap";

const images = [
  { src: carousel1, alt: "", label:"Bar" },
  { src: carousel2,alt: "", label:"Beisbol" },
  { src: carousel3,alt: "", label:"Fiesta" },
  { src: carousel4,alt: "", label:"Teatro" },
  { src: carousel5,alt: "", label:"Necesito mejores fotos" },
];

export default function NewsCarousel({news}) {
  return (
    <Carousel className="w-100 newsCarousel">
      {images.map((image, index) => (
        <CarouselItem key={index}>
          <img className="d-block carouselCropped" src={image.src} alt={image.alt} />
          <Carousel.Caption>
            <h3>{image.label}</h3>
          </Carousel.Caption>
        </CarouselItem>
      ))}
    </Carousel>
  );
}
