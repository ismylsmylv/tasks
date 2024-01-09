import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [message, setMessage] = useState("");
  const [socket, setsocket] = useState(undefined);
  const [inbox, setinbox] = useState([]);
  // const [room, setRoom] = useState(0);
  let isEmpty = false;
  const handleSendMessage = () => {
    console.log("message", message); //, room
    socket.emit("message", message);
  };

  useEffect(() => {
    const socket = io("http://localhost:3000/");

    socket.on("message", (message) => {
      setinbox([...inbox, message]);
    });

    setsocket(socket);
  }, [inbox]);

  return (
    <>
      <div className="messageBox">
        <div className="messagesList">
          <div className="messages">
            {inbox &&
              inbox.map((elem) => {
                return (
                  <div className="message" key={uuidv4()}>
                    {elem}
                  </div>
                );
              })}
          </div>
        </div>
        <form className="inputForm">
          <input
            type="text"
            placeholder="Enter message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              console.log(message);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSendMessage();
              setMessage("");
              window.scrollTo(0, document.body.scrollHeight);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="18"
              viewBox="0 0 512 512"
            >
              <path
                opacity="1"
                d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
