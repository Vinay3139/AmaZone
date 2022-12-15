import { GoLocation } from "react-icons/go";
import "./Location.css";
export default function Location() {
  return (<>
    <div className="locate">
      <div >
        <GoLocation style={{fontSize:"20px"}}/>
        </div>
      
    </div>
    <p className="SelectAddress">
        
    hello<br/> select your address
  </p>
  </>
  );
}
