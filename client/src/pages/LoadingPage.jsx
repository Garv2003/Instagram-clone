import { TailSpin } from "react-loader-spinner";
import logo from "../assets/logo.png";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          src={logo}
          alt="Instagram"
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <TailSpin
          visible={true}
          height="30"
          width="30"
          color="#afafaf"
          ariaLabel="tail-spin-loading"
          radius="1"
        />
      </div>
    </div>
  );
};

export default LoadingPage;
