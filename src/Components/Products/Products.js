import { product } from "../../Shared/Common";
import "./Products.css";
export default function Products(props) {
  return (
    <>
     
      <div className="Single">
        <div className="proper">
        {product.map(function(value){
          return(
            <>
            <div className="All">
             <span>{value.Text}</span>
              <img src={value.img}></img>
              <br/>
              <br/>
              <a className="value_Link">{value.link}</a>
            </div>
            </>
          )
        })}
        </div>
      </div>
    </>
  );
}
