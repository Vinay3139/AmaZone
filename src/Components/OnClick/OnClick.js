import { Feature } from "../../Shared/Common";
import { CiDiscount1 } from "react-icons/ci";
import "./OnClick.css";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import NavBar from "../Navbar/NavBar";
import Technical_Product from "../TechnicalProduct/Technical_Product";

export default function OnClick(props) {
  const [photo, setPhoto] = useState(0);

  function NewPhoto(index) {
    setPhoto(index);
  }
  function OldPhoto() {
    setPhoto(false);
  }
  const [ProductDetail, setProductDetail] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    let product = Feature.filter((value) => {
      return value.id == id;
    });
    setProductDetail(product[0]);
  });

  function GetBack() {
    // window.history.back();
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <div className="clickMedia">
        <div className="click">
          <div className="Fitness">
            <div className="Beauty">
              <div>
                <img
                  src={ProductDetail.Images}
                  className="Small"
                  onMouseOverCapture={NewPhoto}
                  onMouseLeave={OldPhoto}
                  alt=""
                ></img>
                <br />
                <img
                  src={ProductDetail.Images}
                  className="Small"
                  onMouseOverCapture={NewPhoto}
                  onMouseLeave={OldPhoto}
                  alt=""
                ></img>
                <br />
                <img
                  src={ProductDetail.BeautyImage}
                  className="Small"
                  onMouseOverCapture={NewPhoto}
                  onMouseLeave={OldPhoto}
                  alt=""
                ></img>
                <br />
                <img
                  src={ProductDetail.BeautyImageOne}
                  className="Small"
                  alt=""
                ></img>
                <br />
                <img
                  src={ProductDetail.BeautyImageTwo}
                  className="Small"
                  alt=""
                ></img>
              </div>

              <div className="Main">
                {photo ? (
                  <img src={photo} alt=""></img>
                ) : (
                  <div className="ImageMedia">
                    {" "}
                    <img
                      src={ProductDetail.Image}
                      alt=""
                      style={{ width: "369px", margin: "15px" }}
                      className="Filter"
                    ></img>{" "}
                  </div>
                )}
              </div>
              <div className="Vitamin_Media">
                <div className="Vitamin">
                  <h4>{ProductDetail.text}</h4>
                  <span style={{ marginLeft: "50px", color: "#565959" }}>
                    {ProductDetail.MRP}
                  </span>
                  <br />
                  <span style={{ color: "#565959" }}>{ProductDetail.Deal}</span>
                  <span style={{ color: "#B12704" }}>
                    {ProductDetail.price}
                  </span>
                  <br />
                  <span style={{ color: "#565959" }}>
                    {ProductDetail.yousave}
                  </span>
                  <span style={{ color: "#B12704" }}>{ProductDetail.save}</span>
                  <br />
                  <span style={{ marginLeft: "50px" }}>
                    {ProductDetail.Taxes}
                  </span>
                  <br />
                  <div className="Partner_Offer">
                    <div className="save_Extra">
                      <span
                        style={{
                          fontSize: "35px",
                          marginLeft: "4px",
                          color: "rgb(177, 39, 4)",
                        }}
                      >
                        <CiDiscount1 />
                      </span>
                      <span
                        style={{
                          marginLeft: "10px",
                          color: "#B12704",
                          fontWeight: "700",
                        }}
                      >
                        {ProductDetail.save_extra}
                      </span>{" "}
                      &nbsp;
                      <span>{ProductDetail.save_extraTwo}</span>
                    </div>
                    <div className="Partner_Offer_two">
                      <span style={{ color: "rgb(177, 39, 4)" }}>
                        {ProductDetail.Partner_Offer}
                      </span>
                      <span>{ProductDetail.Partner_Offer_Two}</span>
                    </div>
                    <div className="Bank_Offer">
                      <span style={{ color: "rgb(177, 39, 4)" }}>
                        {ProductDetail.Bank_Offer}
                      </span>
                      <span>{ProductDetail.Bank_Offer_Two}</span>
                    </div>
                  </div>
                  <div className="Money_transfer">
                    <div style={{ width: "109px" }}>
                      <center style={{ fontSize: "35px" }}>
                        <img
                          src="/Images/FreeDeliveryOne.png"
                          style={{ width: "35px" }}
                          alt=""
                        />
                      </center>
                      <a style={{ color: "#007185" }}>Pay On Delivery</a>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      <center style={{ fontSize: "35px" }}>
                        <img
                          src="/Images/FreeDeliveryTwo.png"
                          style={{ width: "35px" }}
                          alt=""
                        />
                      </center>
                      <a style={{ color: "#007185" }}> Not Returnable</a>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      <center style={{ fontSize: "35px" }}>
                        <img
                          src="/Images/FreeDelivery.png"
                          style={{ width: "35px" }}
                          alt=""
                        />
                      </center>
                      <a style={{ color: "#007185" }}>Amazone Delivered</a>
                    </div>
                  </div>

                  <hr />
                  <h4>{ProductDetail.About}</h4>

                  <li>
                    <span>{ProductDetail.Item}</span>
                  </li>

                  <li>{ProductDetail.ItemTwo}</li>

                  <li>{ProductDetail.ItemThree}</li>

                  <li>{ProductDetail.ItemFour}</li>
                  <br />
                  <hr></hr>
                  <div className="ProductDetail">
                    <h3>{ProductDetail.Detail}</h3>

                    <li>
                      <span className="DetailKey">
                        {ProductDetail.DetailKey}
                      </span>
                      <span> {ProductDetail.DetailValue}</span>
                    </li>

                    <li>
                      <span className="DetailKey">
                        {ProductDetail.DetailKeyOne}
                      </span>
                      <span> {ProductDetail.DetailValueOne}</span>
                    </li>

                    <li>
                      <span className="DetailKey">
                        {ProductDetail.DetailKeyTwo}
                      </span>
                      <span> {ProductDetail.DetailValueTwo}</span>
                    </li>

                    <li>
                      <span className="DetailKey">
                        {ProductDetail.DetailKeyThree}
                      </span>
                      <span> {ProductDetail.DetailValueThree}</span>
                    </li>

                    <li>
                      <span className="DetailKey">
                        {ProductDetail.DetailKeyFour}
                      </span>
                      <span> {ProductDetail.DetailValueFour}</span>
                    </li>

                    <li>
                      <span className="DetailKey">
                        {ProductDetail.DetailKeyFive}
                      </span>
                      <span> {ProductDetail.DetailValueFive}</span>
                    </li>

                    <li>
                      <span className="DetailKey">
                        {ProductDetail.DetailKeySix}
                      </span>
                      <span> {ProductDetail.DetailValueSix}</span>
                    </li>

                    <li>
                      <span className="DetailKey">
                        {ProductDetail.DetailKeySeven}
                      </span>
                      <span> {ProductDetail.DetailValueSeven}</span>
                    </li>

                    <li>
                      <span className="DetailKey">
                        {ProductDetail.DetailKeyEight}
                      </span>
                      <span> {ProductDetail.DetailValueEight}</span>
                    </li>

                    <li>
                      <span className="DetailKey">
                        {ProductDetail.DetailKeyNine}
                      </span>
                      <span> {ProductDetail.DetailValueNine}</span>
                    </li>

                    <hr />
                  </div>
                </div>
              </div>
              <Cart AddCart={ProductDetail} ProductDetail={ProductDetail} />
            </div>
          </div>
          {/* <Offer/> */}
          <div style={{ backgroundColor: "white", marginTop: "-10px" }}>
            <h2 style={{ margin: "10px", fontSize: "24px" }}>
              {ProductDetail.Important}
            </h2>
            <div style={{ margin: "20px" }}>
              <h4 style={{ lineHeight: "24px", fontSize: "18px" }}>
                {ProductDetail.Safety}
              </h4>
              <p>{ProductDetail.SafetyHead}</p>
            </div>
            <div style={{ margin: "20px" }}>
              <h4 style={{ fontSize: "18px" }}>{ProductDetail.Indication}</h4>
              <p>{ProductDetail.IndicationHead}</p>
            </div>
          </div>
          <Technical_Product />
          <div className="GoTop">
            <button onClick={GetBack}>Go To Top</button>
          </div>
        </div>
      </div>
    </>
  );
}
