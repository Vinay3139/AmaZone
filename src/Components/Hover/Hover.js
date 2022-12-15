import "./Hover.css";
export default function Hover() {
  return (
    <div className="hover">
      <button className="Sign">Sign In</button>
      <span className="Customer">
        new customer?<a className="Link">Start here</a>
      </span>
      <div className="Main">
        <div className="list">
          <h2 className="wishList">Your Lists</h2>
          <a className="Any">create a wish list</a>
          <a className="Any">wish from any site</a>
          <a className="Any">baby wishlist</a>
          <a className="Any">discover your style</a>
          <a className="Any">explore showroom</a>
        </div>
        <div className="Account">
          <span className="wishList">Your Account</span>
          <a className="Any"> Your Account</a>
          <a className="Any">Your Orders</a>
          <a className="Any">Your Wish List</a>
          <a className="Any">Your Recommendations</a>
          <a className="Any">Your Prime Membership</a>
          <a className="Any">Your Prime Video</a>
          <a className="Any">Your Subscribe & Save Items</a>
          <a className="Any">Memberships & Subscriptions</a>
          <a className="Any">Your Amazon Business Account</a>
          <a className="Any">Your Seller Account</a>
          <a className="Any">Manage Your Content and Devices</a>
        </div>
      </div>
    </div>
  );
}
