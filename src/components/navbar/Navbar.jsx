import "./navbar.css";
import pic from "../../images/Cover.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-items">
        <ul className="items">
          <li className="item">Trips</li>
          <li className="item">Recently viewed</li>
          <li className="item">Bookings</li>
        </ul>

        <img src={pic} alt="profile-pic" className="image" />
      </div>
    </div>
  );
};

export default Navbar;
