import React from "react";
import { Customer } from "../../Shared/Constant";
import "./Customer_Question.css";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import Reviews from "../CommentBox/Reviews";
function Customer_Question() {
  return (
    <div style={
      {backgroundColor:"white"}
    }>
      <div
        style={{
          backgroundColor: "white",
          width: "99.5%",
          height: "618px",
          padding: "1px",
        }}
      >
        
        {Customer.map((value) => {
          return (
            <div className="Customer_Map">
              <h1>{value.Heading}</h1>
              <span style={{ color: "#565959" }}>{value.Search}</span>
              <br />
              <h2>{value.Question}</h2>
              <div className="VoteOne">
                <div className="Left_Grid">
                  <VscTriangleUp
                    style={{ fontSize: "29px", color: "#565959" }}
                  />
                  <br />
                  <span>{value.vote}</span>
                  <br />
                  <VscTriangleDown
                    style={{ fontSize: "29px", color: "#565959" }}
                  />
                </div>
                <div>
                  <div className="AnsWer">
                    <div style={{ width: "100px" }}>
                      {" "}
                      <span>
                        <b>{value.Ask}</b>
                      </span>
                    </div>
                    <div>
                      {" "}
                      <span style={{ color: "#007185" }}>
                        {value.QuestionOne}
                      </span>
                    </div>{" "}
                    <br />
                  </div>
                  <div className="AnswerOne">
                    <div style={{ width: "100px", marginTop: "10px" }}>
                      <span>
                        <b>{value.Ans}</b>
                      </span>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <span>{value.AnserOne}</span>
                    </div>
                  </div>
                </div>
                
              </div>
 


            </div>

          );
        })}

      </div>
      <Reviews/>

    </div>
  );
}

export default Customer_Question;
