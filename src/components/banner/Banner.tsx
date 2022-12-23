import Button from "../button/Button";
import "./banner.css";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="banner__container">
      <div className="banner__wrapper">
        <h1>Your Next Holiday</h1>
        <Button
          color={"#fff"}
          text="View All Destinations"
          textColor="rgb(225, 53, 53)"
        />
      </div>
    </div>
  );
}

export default Banner;
