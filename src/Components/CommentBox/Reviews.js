import ReactStars from "react-rating-stars-component";
import { BiUserCircle } from "react-icons/bi";
import "./Reviews.css";
// import { reviews } from "../../../shared/CustomerQ&A";
import { reviews } from "../../Shared/Constant";
export default function Reviews() {
  function StarRating(newRating) {
    return newRating;
  }
  return (
    <>
      {reviews.map((value) => {
        const { name, reviewMain, reviewDetials, about, emoji } = value;
        return (
          <div className="review_container">
            <div className="user_profile">
              <BiUserCircle id="user-icon" />
              <h3>{name}</h3>
            </div>
            <div className=" rating">
              <ReactStars
                count={5}
                size={24}
                isHalf={true}
                onChange={StarRating}
                activeColor="#ffd700"
              />
              <h3 id="margin-left">{reviewMain}</h3>
            </div>
            <p>{reviewDetials}</p>
            <p>
              {about} <a id="oriange-text">Verified Purchase</a>
            </p>
            <p>{emoji}</p>
            <button>Helpfull</button> | <a>Report abuse</a>
          </div>
        );
      })}
    </>
  );
}