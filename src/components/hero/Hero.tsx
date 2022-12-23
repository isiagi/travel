import { BiDrink } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";
import { GiMountains } from "react-icons/gi";
import { HiOutlineCamera } from "react-icons/hi";
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
            <input type="text" className="hero__input" placeholder="Enter Your Destination ..."/>
          </div>
          <div className="hero__icons">
            <div className="hero__item">
              <BiDrink className="hero__icon__item" />
              <p style={{fontSize: "1.2em"}}>Relax</p>
            </div>
            <div className="hero__item">
              <FaTheaterMasks className="hero__icon__item" />
              <p style={{fontSize: "1.2em"}}>Cultural</p>
            </div>
            <div className="hero__item">
              <GiMountains className="hero__icon__item" />
              <p style={{fontSize: "1.2em"}}>Sport</p>
            </div>
            <div className="hero__item">
              <HiOutlineCamera className="hero__icon__item" />
              <p style={{fontSize: "1.2em"}}>History</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
