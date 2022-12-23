import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/21.jpg";
import Button from "../button/Button";

import "./show.css";

const slideImages = [
  {
    url: img1,
    caption: "Slide 1",
  },
  {
    url: img2,
    caption: "Slide 2",
  },
  {
    url: img1,
    caption: "Slide 3",
  },
];

type Props = {};

function Show({}: Props) {
  return (
    <div className="show__container">
      <div className="show__wrapper">
        <div style={{ height: "100%" }}>
          <p style={{color: "#797979"}}>North America</p>
          <h2 className="show__heading">The Best Beaches</h2>
          <p className="show__para">
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin
            rhoncus urna dictum neque molestie ultricies mauris ac.
          </p>
          <p className="show__para">
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin
            rhoncus urna dictum neque molestie ultricies mauris ac.
          </p>
          <h2 className="show__heading1"><span className="show__heading1__span1">900</span> 500 $ <span style={{fontSize:".6em"}}>/ FOR PERSON</span></h2>
          <Button color="#61BD9B" text="Book Now" textColor="#fff" />
        </div>

        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  backgroundSize: "cover",
                  height: "100%",
                  backgroundPosition: "center"
                }}
              >
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Show;
