import { BiDrink } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";
import { GiMountains } from "react-icons/gi";
import { HiOutlineCamera } from "react-icons/hi";
import Button from "../button/Button";

import "./dest.css";

type Props = {};

const data: Array<{
  id: number;
  hoverTitle: string;
  buttonText: string;
  icon: JSX.Element;
  cardHeading: string;
  packages: string;
}> = [
  {
    id: 1,
    hoverTitle: "Thailand",
    buttonText: "View Destination",
    icon: <BiDrink />,
    cardHeading: "Uganda",
    packages: "6 Packages",
  },
  {
    id: 2,
    hoverTitle: "Thailand",
    buttonText: "View Destination",
    icon: <FaTheaterMasks />,
    cardHeading: "Kenya",
    packages: "5 Packages",
  },
  {
    id: 3,
    hoverTitle: "Thailand",
    buttonText: "View Destination",
    icon: <GiMountains />,
    cardHeading: "Tanzania",
    packages: "2 Packages",
  },
  {
    id: 4,
    hoverTitle: "Thailand",
    buttonText: "View Destination",
    icon: <HiOutlineCamera />,
    cardHeading: "Rwanda",
    packages: "3 Packages",
  },
];

function Destination({}: Props) {
  return (
    <div className="dest__container">
      <div className="dest__wrapper">
        <div className="dest__item">
          <div className="dest__head">
            <p>Our Proposal</p>
            <h1>OUR DESTINATIONS</h1>
          </div>
          <div className="dest__card">
            {data.map(
              ({ id, hoverTitle, buttonText, icon, cardHeading, packages }) => (
                <div className="dest__card__item" key={id}>
                  <div className="dest__card__over">
                    <p>{hoverTitle}</p>
                    <Button
                      color="#fff"
                      text={buttonText}
                      textColor="#53BAD5"
                    />
                  </div>
                  <div className="dest__icon">{icon}</div>
                  <div className="dest__card__text">
                    <h1>{cardHeading}</h1>
                    <p>{packages}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
