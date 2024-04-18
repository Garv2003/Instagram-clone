import { useEffect } from "react";
import { ProfileFooter, Navbar } from "../layout";
import { toast } from "react-toastify";
import { Icon } from "../utils/iconutitls";
import { SettingItems } from "../constants/data";
import PropType from "prop-types";

const SettingBar = ({ icon, subitem }) => {
  return (
    <div className="setting_subitem">
      <div className="setting_subitem_left">
        {icon}
        <span>{subitem}</span>
      </div>
      <div className="setting_subitem_right">
        <Icon name="IoIosArrowForward" />
      </div>
    </div>
  );
};

const Setting = ({ setProgress }) => {
  useEffect(() => {
    setProgress(100);
  }, [setProgress]);

  const Logout = () => {
    localStorage.removeItem("token");
    toast.success("Logout Successfully");
    setTimeout(() => {
      window.location.assign("/login");
    }, 1000);
  };

  return (
    <div className="home">
      <Navbar />
      <div className="posts">
        <div className="setting">
          <div className="setting_header">
            <h1 className="setting_title">Settings and Privacy</h1>
          </div>
          <div>
            <div className="setting_subheader">
              <div
                style={{
                  color: "grey",
                }}
              >
                Your Account
              </div>
              <div>Privacy</div>
            </div>
          </div>
          <div className="setting_subheader">
            <div className="setting_subitem">
              <div className="setting_account">
                <Icon
                  name="CgProfile"
                  style={{
                    fontSize: "40px",
                    color: "grey",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "18px",
                    gap: "2px",
                  }}
                >
                  <div>Account Centre</div>
                  <div
                    style={{
                      color: "grey",
                      fontSize: "14px",
                    }}
                  >
                    Password,security,personal details,ads
                  </div>
                </div>
              </div>
              <Icon name="IoIosArrowForward" />
            </div>
          </div>

          {SettingItems.map((item, index) => (
            <div className="setting_item" key={index}>
              <div className="setting_item_title">{item.title}</div>
              {item.subitems.map((subitem, index) => (
                <SettingBar
                  key={index}
                  icon={subitem.icon}
                  subitem={subitem.subitem}
                />
              ))}
            </div>
          ))}

          <div className="setting_item_login">
            <div className="setting_item_title">Login</div>
            <div
              className="setting_subitem"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.assign("/login");
              }}
            >
              Add account
            </div>
            <div
              onClick={() => {
                Logout();
              }}
              className="setting_subitem"
              style={{ color: "red", cursor: "pointer" }}
            >
              Log out
            </div>
          </div>
          <ProfileFooter />
        </div>
      </div>
    </div>
  );
};

Setting.propTypes = {
  setProgress: PropType.func.isRequired,
};

SettingBar.propTypes = {
  icon: PropType.element.isRequired,
  subitem: PropType.string.isRequired,
};

export default Setting;
