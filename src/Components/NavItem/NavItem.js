import { FaElementor } from "react-icons/fa";
import { ArrayList } from "../../Shared/Common";
import "./NavItem.css";
export default function NavItem() {
  const Array = ArrayList.map(function (name) {
    return <li>{name}</li>;
  });
  return (
    <>

      <div className="NAme">
        <FaElementor />
        {Array}
      </div>
    </>
  );
}
