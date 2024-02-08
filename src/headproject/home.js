import React from "react";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
// import hT from "./hT.jpg";
// import "./headproject/home.css";

const Home = () => {
  return (
    <div>
      <div>{<Navbar />}</div>
      <div
        style={{
          background:
            "url(https://ministryark.com/katy/wp-content/uploads/2018/02/Heads_or_Tails-960x675.jpg)",
          width: "100%",
          height: "150vh",
          backgroundColor: " #ffccff",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      ></div>
      <div>{<Footer />}</div>;
    </div>
  );
};

export default Home;
