import { FcLock } from "react-icons/fc";
import "./CheckOut.css";
import {BiPlusMedical} from "react-icons/bi"
// import CheckBoxCart from "../../CheckBoxCart/CheckBoxCart";
import Collapsible from "react-collapsible";
// import { State } from "../../Shared/Constant";

export default function CheckOut() {
  return (
    <>
   
      <div className="CheckOut">
        <div className="header">
          <div style={{ width: "192px", height: "58px" }}>
            <img
              src="https://www.freeiconspng.com/thumbs/amazon-icon/amazon-icon-28.jpg"
              style={{ width: "103px", height: "55px" }}
              alt=""
            ></img>
          </div>

          <div className="a_column">
            <h1>CheckOut</h1>
          </div>

          <div className="Lock">
            <FcLock style={{ fontSize: "23px", marginTop: "22px" }} />
          </div>
        </div>
          
        <div className="shopping_Address">
          <div className="new_Address">

            <h3>1 Enter a New Shopping Address</h3>
            {/* <Collapsible trigger="Change"> */}
            <div className="Address_Detail">
              <h2>Add a new address</h2>
              <div className="Current_Location">
                <span>Save time.Autofill your current location.</span>
                <div className="AutoFill">Autofill</div>
              </div>
              <br />
              <div className="Region">
                <span>Country/Region</span>
                <br />
                <select
                  style={{
                    width: "559px",
                    height: "31px",
                    borderRadius: "10px",
                    overflow: "scroll",
                  }}
                >
                  <option>India</option>
                  <option>Iceland</option>
                  <option>Indonesia</option>
                  <option>Iraq</option>
                  <option>America</option>
                  <option>England</option>
                  <option>Iran</option>
                  <option>Dubai</option>
                  <option>India</option>
                  <option>Iceland</option>
                  <option>Indonesia</option>
                  <option>Iraq</option>
                  <option>America</option>
                  <option>England</option>
                  <option>Iran</option>
                  <option>Dubai</option>
                </select>
                <div style={{ marginTop: "10px" }}>
                  <span>Full Name</span>
                  <input type="text" className="Select_Name"></input>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span>Mobile Number</span>
                  <input type="Number" className="Select_Name"></input>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span>PinCode</span>
                  <input
                    type="text"
                    className="Select_Name"
                    pattern="[0-9]{6}"
                    required
                    maxLength="6"
                    placeholder="6 digits [0-6] PIN code"
                  ></input>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span>Flat,House no.,Building,Company,Apartment</span>
                  <input type="text" className="Select_Name"></input>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span>Area,Street,Sector,Village</span>
                  <input type="text" className="Select_Name"></input>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span>Landmark</span>
                  <input
                    type="text"
                    className="Select_Name"
                    placeholder="E.g. near apollo hospital"
                  ></input>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ marginTop: "10px" }}>
                    <span>Town/City</span>
                    <br />
                    <input
                      type="text"
                      style={{ width: "256px", height: "20px" }}
                    ></input>
                  </div>
                  <div style={{ marginTop: "10px", marginLeft: "20px" }}>
                    <span>State</span>
                    <br />
                    <select
                      style={{
                        width: "265px",
                        height: "26px",
                        borderRadius: "10px",
                        background: "#F0F2F2;",
                      }}
                    >
                      <option>Choose a State</option>
                      <option>DELHI</option>
                      <option>BIHAR</option>
                      <option>CHANDIGARH</option>
                      <option>ANDHRA PRADESH</option>
                      <option>HIMACHAL PRADESH</option>
                      <option>GOA</option>
                    </select>
                  </div>
                </div>
                <input type="checkbox" style={{ marginTop: "20px" }}></input>
                Make this my default address
                <h5 style={{ marginBottom: "auto" }}>Address Type</h5>
                <select
                  style={{
                    width: "555px",
                    height: "30px",
                    borderRadius: "10px",
                  }}
                >
                  <option>Select an Address Type</option>
                  <option>Home (7 am-9 pm delivery)</option>
                  <option>Office/Commerical(10 AM-6 PM Delivery) </option>
                </select>
                <button className="Use_Address">Use This Address</button>
              </div>
            </div>

            {/* </Collapsible> */}
            <hr />

            <h3 style={{ color: "#565959" }}>2 Payement Method</h3>
            {/* <Collapsible trigger="Change"> */}

            <div className="Payment">
                <h1>Your Available balance</h1>
                <hr/>
                <div style={{display:"flex"}}>
                <BiPlusMedical style={{color:"#D5DBDB",fontSize:"24px"}}/>
               <div style={{marginLeft:"10px"}}> <input type="text" style={{ width: "256px", height: "30px" }} placeholder="Enter Code"></input ></div>
               <button className="Apply_Button">Apply</button>
                </div>
                <h5>Another Payement Method</h5>
                <hr/>
                <input type="radio" name="Payment"></input><span>Pay With Debit/Credit/ATM Card</span><br/>
                <p style={{marginLeft:"20px",marginBottom:"auto"}}>You can save your cards as per new RBI guidlines</p>
            
                <img src="Images/Visa.png" alt="" className="Visa_Img"></img>
                <img src="Images/Maestro-icon.png" alt="" className="Visa_Img"></img>
                <img src="Images/Rupay.png" alt="" className="Visa_Img"></img>
                <img src="Images/B.webp" alt="" className="Visa_Img"></img>
                <img src="Images/mastercard.svg" alt="" className="Visa_Img"></img><br></br>
                <div style={{marginTop:"40px"}}>
                <input type="radio" name="Payment"></input><span>Net Banking</span><br/>
                <select className="Choose_Option">
               <option>Choose an option</option>
                </select>
                </div>
                <div style={{marginTop:"20px"}}>
                <input type="radio" name="Payment"></input><span>Other UPI Apps</span><br/>
                </div>
                <div style={{marginTop:"20px"}}>
                <input type="radio" name="Payment"></input><span>Cash On Delivery/Pay on Delivery</span><br/>
                <span style={{fontWeight:"normal",marginLeft:"30px"}}>Scan and pay using Amazone app (25 cashback on first transaction ).Cash,UPI,Card also accepted.<a style={{color:"rgb(0, 113, 133)"}} href="g.com">Know More</a></span>
                <hr/>
                <button className="Payment_Button">Use this Payment method</button>
                </div>
            </div>
            {/* </Collapsible> */}

            <hr />
            <h3 style={{ color: "#565959" }}>3 Items and Delivery</h3>

            <hr/>

          </div>

        </div>
        {/* <CheckBoxCart/> */}
       
      </div>
    </>
  );
}


