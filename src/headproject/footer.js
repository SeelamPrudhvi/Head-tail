import React from "react";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        color: "white",
        justifyContent: "center",
        paddingTop: "100px",
        gap: "70px",
        fontSize: "18px",
        fontFamily: "cursive",
        backgroundColor: "black",
        width: "1340px",
      }}
    >
      <div>
        <h1>Coin Toss</h1>
        <img
          src="https://as1.ftcdn.net/v2/jpg/05/07/18/74/1000_F_507187460_8y35sBms5gyFzBscfsibD8WmmhtpbZOk.jpg"
          alt="Flip Coin Logo"
          width="100"
          height="100"
          style={{ borderRadius: "4px" }}
        ></img>
        <br />
        <br />
        <div>
          <i style={{ width: "20px" }} className="fa-brands fa-instagram">
            {" "}
          </i>
          <i style={{ width: "20px" }} className="fa-brands fa-facebook"></i>
          <i style={{ width: "20px" }} className="fa-brands fa-twitter"></i>
          <i style={{ width: "20px" }} className="fa-brands fa-youtube"></i>

          <br />
        </div>
        Download Mobile App
        <br />
        <br />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaHzPPZv6SoQk_HMq_1kVZ9ickXbhIVV-gg&usqp=CAU"
          alt="ister"
          width="150"
          height="60"
          style={{ borderRadius: "4px" }}
        ></img>
        <br />
        <br />
      </div>

      <div>
        <ul>
          <b>DISCOVER</b>
          <li>About us</li>
          <li>Games</li>
          <li>News & Events</li>
          <li>Partnerships</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
        <ul>
          <b>LEGAL</b>
          <li>Website Terms</li>
          <li>Privacy Policy</li>
          <li>Cookie Notice</li>
          <li>Brand Assets</li>
          <li>Promo Materials</li>
        </ul>
      </div>
      <div>
        <ul>
          <b>LICENSES & CERTIFICATES</b>
          <li>
            <img
              src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/ecogra.png"
              alt="L1"
            />
          </li>
          <li>
            <img
              src="https://20704af1-2ab9-42e5-a415-7b7d8a1f677c.snippet.antillephone.com/sealassets/9ae08ff071f29218f10041b509d3b07e-evoplay.games-cc81f3360fce83eb803d6fa851045874713eca3cc300fdf81e3162f68c03be0ded34b728833953659ff7875a1924b90b-c2VhbC5wbmc%3D?status=valid"
              alt="L2"
              height="50px"
            />
          </li>
          <li>
            <img
              src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/iso-wh-13.svg"
              alt="L3"
              height="50px"
            />
          </li>
          <li>
            <img
              src="https://evoplay.games/wp-content/themes/evoplay/assets/img/logos/g2e_asia.png"
              alt="L3"
            />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <b>LEARN MORE </b>
          <li>View Plans</li>
          <li>Faqs</li>
          <li>Privacy </li>
          <li>Greviance </li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
