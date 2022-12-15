import { FaSearch } from "react-icons/fa";
import "./Search.css";
export default function Search() {
  return (
    <>
      <select className="select">
        <option>All</option>
      </select>
      <input type="text" className="checkss"></input>
      <div className="fafa">
        <FaSearch />
      </div>
    </>
  );
}
