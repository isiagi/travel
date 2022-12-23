import "./package.css";

import { BiDrink } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";
import { GiMountains } from "react-icons/gi";
import { HiOutlineCamera } from "react-icons/hi";

import img1 from "../../assets/1.jpg";
import Button from "../button/Button";

const data: Array<{
  id: number;
  img: string;
  state: string;
  icon: JSX.Element;
  country: string;
  type: string;
  price: string;
  paragraph: string;
  color: string;
  text: string;
  textColor: string;
  bg: string;
}> = [
  {
    id: 1,
    img: img1,
    state: "Kampala",
    icon: <BiDrink />,
    country: "Uganda",
    type: "Sport",
    price: "400 $",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
    vitae iste voluptas, repellendus commodi quia deleniti suscipit.
    Cupiditate.`,
    color: "rgb(225, 53, 53)",
    text: "Details",
    textColor: "#fff",
    bg: "rgb(225, 53, 53)",
  },
  {
    id: 1,
    img: img1,
    state: "Kampala",
    icon: <FaTheaterMasks />,
    country: "Uganda",
    type: "Sport",
    price: "400 $",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
    vitae iste voluptas, repellendus commodi quia deleniti suscipit.
    Cupiditate.`,
    color: "yellow",
    text: "Details",
    textColor: "#fff",
    bg: "yellow",
  },
  {
    id: 1,
    img: img1,
    state: "Kampala",
    icon: <GiMountains />,
    country: "Uganda",
    type: "Sport",
    price: "400 $",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
    vitae iste voluptas, repellendus commodi quia deleniti suscipit.
    Cupiditate.`,
    color: "green",
    text: "Details",
    textColor: "#fff",
    bg: "green",
  },
  {
    id: 1,
    img: img1,
    state: "Kampala",
    icon: <HiOutlineCamera />,
    country: "Uganda",
    type: "Sport",
    price: "400 $",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
    vitae iste voluptas, repellendus commodi quia deleniti suscipit.
    Cupiditate.`,
    color: "purple",
    text: "Details",
    textColor: "#fff",
    bg: "purple",
  },
  {
    id: 1,
    img: img1,
    state: "Kampala",
    icon: <BiDrink />,
    country: "Uganda",
    type: "Sport",
    price: "400 $",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
    vitae iste voluptas, repellendus commodi quia deleniti suscipit.
    Cupiditate.`,
    color: "black",
    text: "Details",
    textColor: "#fff",
    bg: "black",
  },
];

type Props = {};

const Packages = (props: Props) => {
  return (
    <div className="packages__container">
      <div className="dest__head">
        <p>PROMOTIONS</p>
        <h1>OUR PACKAGES</h1>
      </div>
      <div className="package__wrapper">
        {data.map(
          ({
            id,
            img,
            state,
            icon,
            country,
            type,
            price,
            paragraph,
            color,
            text,
            textColor,
            bg,
          }) => (
            <div className="package__item" key={id}>
              <div className="package__img">
                <img src={img} alt="" />
                <div
                  className="package__icon"
                  style={{ backgroundColor: `${bg}` }}
                >
                  {icon}
                </div>
              </div>

              <div className="package__detail">
                <div className="package__detail1">
                  <h3>{state}</h3>
                  <p>{country}</p>
                </div>
                <hr />
                <div className="package__tag">
                  <p style={{ fontWeight: "300" }}>{type}</p>
                  <h2 style={{ fontWeight: "300" }}>{price} </h2>
                </div>
                <hr />
                <div className="package__para">{paragraph}</div>
                <Button color={color} text={text} textColor={textColor} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Packages;
