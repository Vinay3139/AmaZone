
import { Fitness } from "../../Shared/Common";
import "./Sports.css";

export default function Sports() {
  return (
    <>
      <div className="sport">
        <h3 style={{ padding: "10px" }}>
          Best Seller in Sports,Fitness & Outdoors
        </h3>
        <div className="fitness">
          {Fitness.map(function (value) {
            return (
              <>
              
                <div className="outdoor">
                
                  <img
                    src={value.image}
                    style={{ width: "201px", height: "200px" }}
                    alt=""
                  ></img>
                </div>
                
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
