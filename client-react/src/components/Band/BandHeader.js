import React from "react";

const titleStyles = {
  fontSize: "2em"
};

const secondary = {
  fontSize: ".5em",
  marginRight: 3
};

const clientStyles = {
  fontSize: "3em",
  marginLeft: "-200px"
};
const clientSecondary = {
  fontSize: ".5em",
  marginRight: 3
};

function BandHeader() {
  return (
    <div>
      <header className="p-3 pb-5" style={{ height: "64px" }}>
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

        <span id="title" style={clientStyles} className="">
          C<span style={clientSecondary}>LIENT</span>
        </span>
      </header>
      <hr />
    </div>
  );
}

export default BandHeader;
