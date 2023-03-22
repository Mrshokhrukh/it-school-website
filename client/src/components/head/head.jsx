import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import logo from "../../images/rakhmonov.png";
import "./head.scss";
import "../../style/humburger.scss";
const Head = (props) => {
  const header = useRef();
  const header_box_shadow = useRef();
  const [scroll, setScroll] = useState();
  useEffect(() => {
    const handleWindowSize = () => {
      setScroll(window.scrollY);
      if (scroll > 80 && window.innerWidth > 768) {
        header.current.style.height = "80px";
        header_box_shadow.current.style.boxShadow =
          "rgba(100, 100, 111, 0.1) 0px 6px 26px 0px";
      } else if (scroll < 80) {
        header_box_shadow.current.style.boxShadow = "none";
      } else if (scroll > 80 && window.innerWidth < 768) {
        header_box_shadow.current.style.boxShadow =
          "rgba(100, 100, 111, 0.1) 0px 6px 26px 0px";
        header.current.style.height = "65px";
      }
      if (scroll < 80 && window.innerWidth > 1201) {
        header.current.style.height = "100px";
      }
    };

    window.addEventListener("scroll", handleWindowSize);
    return () => {
      window.removeEventListener("scroll", handleWindowSize);
    };
  }, [scroll]);

  const handleClick = () => {
    props.toggleSidebar(true);
  };

  return (
    <div className="head" ref={header_box_shadow}>
      <div className="container">
        <div className="header" ref={header}>
          <div className="head-lf">
            <span className="logo">
              <img src={logo} alt="" />
            </span>
          </div>

          <div className="head-rt">
            <Link to="/" className="link-to-courses">
              bootcamp
            </Link>
            <Link to="/courses" className="link-to-courses">
              Kurslarimiz
            </Link>
            <div className="login">
              <Link to="">
                <span className="login-icon">
                  <IoMdLogIn />
                </span>
                <span>kirish</span>
              </Link>
            </div>
          </div>
          {/*   sidebar open */}

          <div className="clickable_humburger_menu">
            <div className={"lines"} onClick={handleClick}>
              <div className="line first"></div>
              <div className="line second"></div>
              <div className="line third"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
