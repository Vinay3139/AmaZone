import NavBar from "../Navbar/NavBar";
import ReactStars from "react-rating-stars-component";
import ReactShowMoreText from "react-show-more-text";
import { Link } from "react-router-dom";
import "./Offer.css";
// import { Navigate } from "react-router-dom";

import { Feature } from "../../Shared/Common";
export default function Offer(props) {
  // import { useEffect } from "react";
  function ShowMore() {
    return <></>;
  }
  function StarRating(newRating) {
    alert(`you have given us ${newRating}star`);
  }
  

  const handleClick = (props) =>
  {
      props.Feature.map(function(value,index)
      {
          return index
      })
  }
  

  
  return (
    <>
    <div onClick={props.parent}>
      <div className="MainContainer">
        <h3 className="history">Inspired By Browsing History</h3>
        <div className="Offers">
          
          {props.Feature.map(function (value,index) {
            

            return (  
              <>
                <div className="OfferPer">
                {/* <p onClick={()=>{props.onclick(index)}}> */}
                <Link to = {`/OnClick/ ${value.id}`}>
                  <img
                    src={value.Image}
                    alt=""
                    style={{
                      width: "160px",
                      height: "160px",
                      objectFit: "contain",
                    }}
                  ></img> 



                  </Link>
                  <a className="Link">
                    <div style={{ width: "163px" }}>
                      <ReactShowMoreText
                        lines={3}
                        more="More"
                        less="...show less"
                        onClick={ShowMore}
                        expanded={false}
                        width={0}
                      >
                        <p onClick={()=>{
                          props.onclick(index)
                        }}>
                        {value.text}
                        </p>
                        
                      </ReactShowMoreText>
                      <ReactStars
                        count={5}
                        onChange={StarRating}
                        size={24}
                        activeColor="#ffd700"
                        isHalf={true}
                      ></ReactStars>
                    </div>
                  </a>
                  <br />
                  <span style={{ backgroundColor: "#b12704", color: "white" }}>
                    {value.Deal}
                  </span>
                  <br />
                  <span>{value.price}</span>
                  <br />
                  <span>{value.save}</span>
                  <br />
                  <span>{value.id}</span>
                  <span>{value.Delivery}</span>
                 {/* </p> */}
                </div>
                
              </>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
}
