import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import InstagramLogo from "../../assets/instagram-logo.png";
import { Icon } from "../../utils/iconutitls";
import PropType from "prop-types";
import { UseAuth } from "../../Context/Auth/AuthContext";
import { Img, Popup } from "../../components";

// import { UseTheme } from "../../Context/Theme/ThemeContext";

const NavigationButton = ({ icon, text, to }) => {
  return to === "/notifications" || to === "/search" ? (
    <Link to={to} className="navbutton cl hiddenicon">
      {icon}
      <span>{text}</span>
    </Link>
  ) : (
    <Link to={to} className="navbutton cl">
      {icon}
      <span>{text}</span>
    </Link>
  );
};

const NavBarItems = [
  {
    icon: <Icon name="GrHomeRounded" className="icon" />,
    text: "Home",
    to: "/",
  },
  {
    icon: <Icon name="IoSearch" className="icon" />,
    text: "Search",
    to: "/search",
  },
  {
    icon: <Icon name="MdOutlineExplore" className="icon" />,
    text: "Explore",
    to: "/explore",
  },
  {
    icon: <Icon name="BiSolidMoviePlay" className="icon" />,
    text: "Reels",
    to: "/Reels",
  },
  {
    icon: <Icon name="RiMessengerLine" className="icon" />,
    text: "Messages",
    to: "/message",
  },
  {
    icon: <Icon name="FaRegHeart" className="icon" />,
    text: "Notifications",
    to: "/notifications",
  },
  {
    icon: <Icon name="BsPlusSquare" className="icon" />,
    text: "Create",
    to: "/create",
  },
];

const Navbar = ({ width }) => {
  const [open, setOpen] = useState(false);
  const { info } = UseAuth();
  // const { Theme } = UseTheme();
  return (
    <div className="navbar" style={width <= 770 ? { display: "none" } : {}}>
      <div className="navlist">
        <Link to="/">
          <Img src={InstagramLogo} className="logo" alt="Instagram Logo" />
          <div className="navbutton logo2">
            {" "}
            <Icon
              name="FaInstagram"
              style={{ color: "white", width: "1.8rem", height: "1.8rem" }}
            />
          </div>
        </Link>
        <div className="navbarbuttons">
          {NavBarItems.map((item) => (
            <NavigationButton
              key={item.text}
              icon={item.icon}
              text={item.text}
              to={item.to}
            />
          ))}
          <Link to="/profile" className="navbutton cl">
            {info.profileImage ? (
              <Img
                src={info.profileImage}
                className="profile_image"
                alt="profile"
                width="30px"
              />
            ) : (
              <Icon name="CgProfile" className="icon" id="pro_icon" />
            )}
            <span>Profile</span>
          </Link>
        </div>
        <div className="navbutton_more">
          {open && <Popup Open={open} onClose={() => setOpen(false)} />}
          <button onClick={() => setOpen(!open)} className="navbutton">
            <Icon name="GiHamburgerMenu" className="icon" />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

NavigationButton.propTypes = {
  icon: PropType.element,
  text: PropType.string,
  to: PropType.string,
  img: PropType.bool,
  src: PropType.string,
};

Navbar.propTypes = {
  width: PropType.number,
};

export default Navbar;
