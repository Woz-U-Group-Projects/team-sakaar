import React from "react";

const anchorStyles = {
  color: "slategray",
  fontSize: "1.5em",
  marginRight: 15,
  textDecoration: "none"
};

const titleStyles = {
  fontSize: "2em"
};

const secondary = {
  fontSize: ".5em",
  marginRight: 3
};

function AchorEnter(e) {
  e.target.style.color = "black";
}

function AnchorLeave(e) {
  e.target.style.color = "slategray";
}

function Header() {
  return (
    <div>
      <header className="p-3 pb-5 col-xs-12" style={{ height: "64px" }}>
        <a id="title-wrapper" href="/#" className="" style={{ color: "black" }}>
          <span id="title" className="float-left" style={titleStyles}>
            O
            <span id="secondary" style={secondary}>
              N
            </span>
            D
            <span id="secondary" style={secondary}>
              EMAND
            </span>
            B
            <span id="secondary" style={secondary}>
              ANDS
            </span>
          </span>
        </a>
        <span id="login-signup col-xs-12" className="float-right">
          <a
            href="/#"
            style={anchorStyles}
            onMouseEnter={AchorEnter}
            onMouseLeave={AnchorLeave}
          >
            Login
          </a>{" "}
          <a
            href="/#"
            style={anchorStyles}
            onMouseEnter={AchorEnter}
            onMouseLeave={AnchorLeave}
          >
            Signup
          </a>
        </span>
      </header>
    </div>
  );
}

export default Header;
