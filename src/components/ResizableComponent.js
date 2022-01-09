import React from "react";
import Resizable from "re-resizable";
import { styleList } from "./data";

const ResizableComponent = () => (
  <div style={styleList.parentStyle}>
    <div style={styleList.secondParentStyle}>
      <Resizable
        style={styleList.second}
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <div>
          <h2>Front-End developer</h2>
          <ul>
            <li></li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>
      </Resizable>
      <Resizable
        style={styleList.third}
        enable={{
          top: false,
          right: false,
          bottom: false,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <h2>BackEnd Development</h2>
      </Resizable>
    </div>
    <Resizable
      style={styleList.first}
      enable={{
        top: true,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      <h2>FullStack Development</h2>
    </Resizable>
  </div>
);

export default ResizableComponent;
