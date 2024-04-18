import { useEffect, useState } from "react";
import axios from "axios";
import { MessageBody, MessageSidebar } from "../components";
import { Navbar } from "../layout";
import { Icon } from "../utils/iconutitls";
import PropType from "prop-types";
import UseResize from "../Hooks/UseResize";

const Messages = ({ setProgress }) => {
  const [info, setInfo] = useState(null);
  const [user, setuser] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { windowWidth } = UseResize();

  useEffect(() => {
    document.title = "Inbox • Chats";
    getsuggestion();
    setProgress(100);
  }, [setProgress]);

  useEffect(() => {
    if (windowWidth >= 771) {
      const message = document.querySelector(".message_right");
      message.style.display = "block";
      const messageleft = document.querySelector(".message_left");
      messageleft.style.display = "block";
    }
    if (windowWidth <= 770 && !info) {
      const message = document.querySelector(".message_right");
      message.style.display = "none";
      const messageleft = document.querySelector(".message_left");
      messageleft.style.display = "block";
    }
  }, [windowWidth, info]);

  const getsuggestion = () => {
    try {
      setLoading(true);
      axios
        .get(`${import.meta.env.VITE_APP_BACKEND_URL}/user/suggestion`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setuser(res.data);
          setLoading(false);
        });
    } catch (err) {
      setError(err);
    }
  };

  const handleData = (data) => {
    setInfo(data);
    if (windowWidth <= 770) {
      const message = document.querySelector(".message_right");
      message.style.display = "block";
      const messageleft = document.querySelector(".message_left");
      messageleft.style.display = "none";
    }
  };

  return (
    <div className="home">
      <Navbar width={windowWidth} />
      <div className="posts">
        <div className="messages">
          <div className="message_left">
            <MessageSidebar
              user={user}
              loading={loading}
              handleData={handleData}
              error={error}
            />
          </div>
          <div className="message_right">
            {info ? (
              <MessageBody info={info} setInfo={setInfo} />
            ) : (
              <div className="message_icon">
                <div className="chaticon">
                  <Icon
                    name="BsChatDotsFill"
                    style={{ width: "50px", height: "50px", margin: "20px" }}
                  />
                </div>
                <h1>Your messages</h1>
                <h2>Send private photos and messages to a friend or group.</h2>
                <button className="smbtn">Send Message</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Messages.propTypes = {
  setProgress: PropType.func,
};

export default Messages;
