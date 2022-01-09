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
        <div style={{ textAlign: "justify" }}>
          <h2>Front-End developer</h2>
          <ul>
            <li>
              features that are immediately observable and accessible by the
              end-user or client
            </li>
            <li>
              They also contribute to the overall design and aesthetic, along
              with debugging.{" "}
            </li>
            <li>
              The major goals of frontend development are responsiveness and
              performance.
            </li>
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
        <div style={{ textAlign: "justify" }}>
          <h2>BackEnd Development</h2>
          <ul>
            <li>
              backend development covers server-side web application logic and
              integration
            </li>
            <li>
              developers create code that allows a database and an application
              to communicate with one another.
            </li>
            <li>
              which includes servers, databases, and apps. They are in control
              of what you don't see.
            </li>
          </ul>
        </div>
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
      <div style={{ textAlign: "justify" }}>
        <h2>FullStack Development</h2>

        <ul>
          <li>
            They are skilled in both front end and back end languages and can
            work with multiple frameworks.
          </li>
          <li>
            starting from the planning stage of projects, to managing databases,
            building user interfaces to data structuring, and solving
            mission-critical needs
          </li>
          <li>
            full-stack developers must understand all levels of a website and
            how the web works.
          </li>
        </ul>
      </div>
    </Resizable>
  </div>
);

export default ResizableComponent;
