import React from "react";

import "./arrowScroll.css";

export default function ArrowScroll() {
  return (
    <div id="wrapper">
      <div id="wrapper-inner">
        <div id="scroll-down">
          <span className="arrow-down"></span>
          <span id="scroll-title">Scroll down</span>
        </div>
      </div>
    </div>
  );
}
