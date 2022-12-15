import React from "react";
import { Technical } from "../../Shared/Constant";
import Customer_Question from "../Customer_Question/Customer_Question";
import "./Technical_Product.css";
function Technical_Product() {
  return (
    <div>
      {Technical.map((value) => {
        return (
          <>
            <div className="Technical">
                
              <table >
                
              <h2>Technical Detail</h2>
              <hr/>

                <tr>
                  <th  className="tablehead"> {value.Heading}</th>
                  <td className="tabledata">{value.Brand}</td>
                </tr>
                <tr>
                  <th className="tablehead"> {value.HeadingOne}</th>
                  <td className="tabledata">{value.Manu_Facture}</td>
                </tr>
                <tr>
                  <th className="tablehead"> {value.HeadingTwo}</th>
                  <td className="tabledata">{value.Model}</td>
                </tr>
                <tr>
                  <th className="tablehead"> {value.HeadingThree}</th>
                  <td className="tabledata">{value.Model_Name}</td>
                </tr>
                <tr>
                  <th className="tablehead"> {value.HeadingFour}</th>
                  <td className="tabledata">{value.Model_Year}</td>
                </tr>
                <tr>
                  <th className="tablehead"> {value.HeadingFive}</th>
                  <td className="tabledata">{value.Product_Dimension}</td>
                </tr><tr>
                  <th className="tablehead"> {value.HeadingSix}</th>
                  <td className="tabledata">{value.Battries}</td>
                </tr><tr>
                  <th className="tablehead"> {value.HeadingSeven}</th>
                  <td className="tabledata">{value.Model_Number}</td>
                </tr><tr>
                  <th className="tablehead"> {value.HeadingEight}</th>
                  <td className="tabledata">{value.Memory_Capacity}</td>
                </tr>
                <tr>
                  <th className="tablehead"> {value.HeadOne}</th>
                  <td className="tabledata">{value.Hardware_Interface}</td>
                </tr><tr>
                  <th className="tablehead"> {value.HeadTwo}</th>
                  <td className="tabledata">{value.Resolution}</td>
                </tr><tr>
                  <th className="tablehead"> {value.HeadThree}</th>
                  <td className="tabledata">{value.Special_Feature}</td>
                </tr><tr>
                  <th className="tablehead"> {value.HeadFour}</th>
                  <td className="tabledata">{value.Mounting_HardWare}</td>
                </tr><tr>
                  <th className="tablehead"> {value.HeadingFive}</th>
                  <td className="tabledata">{value.Display_Type}</td>
                </tr>
              </table>
              <div>
              <table>
                <h2>Additional Information</h2>
                <hr/>
                <tr>
                  <th className="tablehead">{value.InformationOne}</th>
                  <td className="tabledata">{value.ASIAN}</td>
                </tr>
                <tr>
                  <th className="tablehead">{value.InformationTwo}</th>
                  <td className="tabledata">{value.Best_Seller}</td>
                </tr>
                <tr>
                  <th className="tablehead">{value.InformationThree}</th>
                  <td className="tabledata">{value.Date_First}</td>
                </tr>
                <tr>
                  <th className="tablehead">{value.InformationFour}</th>
                  <td className="tabledata">{value.Packer}</td>
                </tr>
                <tr>
                  <th className="tablehead">{value.InformationFive}</th>
                  <td className="tabledata">{value.Importer}</td>
                </tr>
                <tr>
                  <th className="tablehead">{value.InformationSix}</th>
                  <td className="tabledata">{value.Item_Dimension}</td>
                </tr>
                <tr>
                  <th className="tablehead">{value.InformationSeven}</th>
                  <td className="tabledata">{value.Net_Quantity}</td>
                </tr>
                <tr>
                  <th className="tablehead">{value.InformationEight}</th>
                  <td className="tabledata">{value.Generic_Name}</td>
                </tr>
              <h2>FeedBack</h2>
                 <hr/>
                 <p>{value.Feedback} <a style={{color:"#007185"}} href="vinay.com">{value.price}</a></p>
              </table>
              </div>
             
              
            </div>
            <Customer_Question/>

          </>
        );
      })}
    </div>
  );
}

export default Technical_Product;
