import { FaRupeeSign } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import ImageSlider from "../ImageSlider/ImageSlider";
import "./ProductOffer.css";
export default function ProductOffer() {
  return (
    <>
      <div className="main">
        <div className="text">
          <div className="text1">
            <h2>
              Under
              <sup>
                <FaRupeeSign />
              </sup>
              1999
            </h2>
            <h2 className="Electronic">Top Rated Electronics</h2>
            <h2 className="Electronic">@accessories</h2>
            <h4 className="Electronic">Extra up to 10% of via Coupon</h4>
            <div className="money">
              <div className="money2">
                <FaMoneyBillAlt />
                <h5>Pay On Delivery</h5>
              </div>
              <div className="return2">
                <FaRetweet />
                <h5 className="Electronic">Easst Return</h5>
              </div>
            </div>
          </div>
          <div className="photo">
            {/* <ImageSlider/> */}
            <img
              src="/Images/Gadget-Transparent-Images-PNG.png"
              
              className="hh"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
