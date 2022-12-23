import Button from "../button/Button";
import "./footer.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__right">
          <div>
            <p>Keep In Touch</p>
            <h2>Travel with Us</h2>
          </div>
          <div className="footer__form">
            <input type="text" />
            <Button color="#fff" text="Send" textColor="rgb(225, 53, 53)" />
          </div>
        </div>
        <div className="footer__end">
          <div>
            <h2>Travel</h2>
            <p className="footer__headc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              eligendi expedita obcaecati voluptatem, illo quia vel ipsa fugiat
              libero delectus adipisci praesentium incidunt nobis tempora illum
              similique at sunt exercitationem.
            </p>
          </div>
          <div>
            <h2>OUR AGENCY</h2>
            <ul>
                <li>Services</li>
                <li>Insurance</li>
                <li>Agency</li>
                <li>Tourism</li>
                <li>Payment</li>
            </ul>
          </div>
          <div>
            <h2>PARTNERS</h2>
            <ul>
                <li>Booking</li>
                <li>RentalCar</li>
                <li>HostelWorld</li>
                <li>Trivago</li>
                <li>TripAdvisor</li>
            </ul>
          </div>
          {/* <div>
            <h2>LAST MINUTE</h2>
            <ul>
                <li>London</li>
                <li>California</li>
                <li>Indonesia</li>
                <li>Europe</li>
                <li>Oceania</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
