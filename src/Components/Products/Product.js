import { ArrayDot } from "../../Shared/Common";
import "./Product.css";
export default function Product(props) {
  return (
    <>
      <div className="Container">
        <div className="Gunda">
          {ArrayDot.map(function (value) {
            return (
              <>
                {/* <div className="Media_Box"> */}
                <div className="Box">
                  <span>{value.head}</span>
                  <div className="first">
                    <img src={value.Image}></img>
                    {value.text}
                  </div>
                  <div className="second">
                    <img src={value.image}></img>
                    {value.text2}
                  </div>
                  <div className="third">
                    <img src={value.image1}></img>
                    {value.text1}
                  </div>
                  <div className="fourth">
                    <img src={value.image3}></img>
                    {value.text3}
                  </div>
                  <a className="value_Share">{value.share}</a>
                </div>
                {/* </div> */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
