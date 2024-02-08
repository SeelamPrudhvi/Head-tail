import React from "react";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import "./about.css";

const About = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        id="imageh1"
        style={{
          backgroundColor: "#A4B494",
          width: "175.7vh",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/originals/9e/50/b2/9e50b27e165e60a1fd435ecb7cea07f5.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "600px",
            width: "1200px",
            position: "relative",
            top: "1px",
            left: "950px",
          }}
        ></div>
        <div id="h1Ele">
          <h1 id>What is Heads or Tails? </h1>
          <p id="para1">
            Heads or Tails is a fun and easy way to get heads or tails even if
            you don’t have a coin handy. You can play with virtual coins to
            flip. This is a great way for you to learn about probability and
            statistics.
          </p>
          <h1>How Does Heads Or Tails Work?</h1>
          <p>
            Heads Or Tails is a great tool that allows you to play with virtual
            coins to flip. This is a fun and easy way for you to get heads or
            tails even if you don’t have a coin handy. All you need is Heads Or
            Tails and some virtual currency.
          </p>
          <h1>Conclusion</h1>
          <p>
            If you are looking for a fun and easy way to entertain yourself, try
            Heads Or Tails – it’s the perfect virtual coin tossing tool. With
            Heads Or Tails you can have tons of fun without leaving your chair!
          </p>
        </div>
      </div>
      <div>{<Footer />}</div>;
    </div>
  );
};

export default About;
