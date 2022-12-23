import Button from "../button/Button";
import "./banner.css";

type Props = {};

function Banner1({}: Props) {
  return (
    <div className="banner__container1">
      <div className="banner__wrapper1">
        <div className="banner__item1">
          <p>1. LAST MINUTE</p>
          <h2>Discover Cities</h2>
          <Button color="#fff" text="Details" textColor="rgb(225, 53, 53)" />
        </div>
        <div className="banner__item2">
          <p>1. PROMOTIONS</p>
          <h2>Discover Nature</h2>
          <Button color="#fff" text="Details" textColor="rgb(225, 53, 53)" />
        </div>
      </div>
    </div>
  );
}

export default Banner1;



