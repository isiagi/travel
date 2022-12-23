import { MdOutlineTour } from "react-icons/md";
import { RiShipLine } from "react-icons/ri";
import { GiTowerBridge } from "react-icons/gi";
import "./tour.css";

type Props = {};

const Tour = (props: Props) => {
  return (
    <div>
      <div className="tour__wrapper">
        <div className="tour__icon">
          <MdOutlineTour />
        </div>
        <div className="tour__details">
          <h2>World Tour</h2>
          <p>
            Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc
            us urna dictum.
          </p>
          <p>View</p>
        </div>
      </div>
    </div>
  );
};

export default Tour;
