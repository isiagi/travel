import React from "react";

import "./about.css";

import img1 from "../../assets/1.jpg"

import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "./images";
import Header from "../../components/header/Header";

const images = IMAGES.map((image) => ({
  ...image,
  customOverlay: (
    <div className="custom-overlay__caption">
      <div>{image.caption}</div>
      {image.tags &&
        image.tags.map((t, index) => (
          <div key={index} className="custom-overlay__tag">
            {t.title}
          </div>
        ))}
    </div>
  ),
}));

type Props = {};

function About({}: Props) {
  return (
    <div>
        <Header img={img1} title={"ABOUT"} />
      <div>
        <p className="m_title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, minima
          soluta magni minus quaerat doloribus cumque. Temporibus aliquam totam,
          recusandae, veniam ducimus perspiciatis nobis, blanditiis molestiae
          assumenda sed cumque nisi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, minima
          soluta magni minus quaerat doloribus cumque. Temporibus aliquam totam,
          recusandae, veniam ducimus perspiciatis nobis, blanditiis molestiae
          assumenda sed cumque nisi!
        </p>
      </div>
      <Gallery images={images} enableImageSelection={false} />
    </div>
  );
}

export default About;
