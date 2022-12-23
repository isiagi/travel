import { BiDrink } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";
import { GiMountains } from "react-icons/gi";
import { HiOutlineCamera } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./hero.css";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="hero__container">
      <div className="hero__wrapper">
        <div className="text">
          <div>
            <h1>Search your next Holiday</h1>
            <p>CHECK OUR BEST PROMOTIONS</p>
            <input
              type="text"
              className="hero__input"
              placeholder="Enter Your Destination ..."
            />
          </div>
          <div className="hero__icons">
            <Link to="/category/Relax">
              <div className="hero__item">
                <BiDrink className="hero__icon__item" />
                <p style={{ fontSize: "1.2em" }}>Relax</p>
              </div>
            </Link>
            <Link to="/category/Cultural">
              <div className="hero__item">
                <FaTheaterMasks className="hero__icon__item" />
                <p style={{ fontSize: "1.2em" }}>Cultural</p>
              </div>
            </Link>
            <Link to="/category/Sport">
              <div className="hero__item">
                <GiMountains className="hero__icon__item" />
                <p style={{ fontSize: "1.2em" }}>Sport</p>
              </div>
            </Link>
            <Link to="/category/History">
              <div className="hero__item">
                <HiOutlineCamera className="hero__icon__item" />
                <p style={{ fontSize: "1.2em" }}>History</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
