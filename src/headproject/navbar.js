import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [click, setClick] = useState(false);

  const handletoggle = () => {
    setState(!state);
  };

  return (
    <>
      <nav>
        <a href="/">
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/07/18/74/1000_F_507187460_8y35sBms5gyFzBscfsibD8WmmhtpbZOk.jpg"
            alt="toss"
            width="120px"
            height="120px"
            id="image"
            style={{ borderRadius: "60px" }}
          />
        </a>
        <div>
          <ul
            id="navbar"
            // id="navbar.active"
            // {click ? "navbar.active" : "navbar"}
            onClick={() => setClick(!click)}
          >
            {/* {click && !click ? "navbar" : "navbar.active"} */}

            <li>
              <Link id="an" className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link id="an" to="/Head & Tail Game">
                Head & Tail
              </Link>
            </li>
            <li>
              <Link id="an" to="/About">
                About
              </Link>
            </li>
          </ul>

          <Outlet />
        </div>
        <div id="mobile">
          <div id="">
            <i id="bar" className="fas fa-bars" onClick={handletoggle}></i>
          </div>
          {state && (
            <div id="">
              <i id="bar" className="fas fa-times" onClick={handletoggle}></i>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
