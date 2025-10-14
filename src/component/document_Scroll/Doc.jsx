import React from "react";
import About from "../aboutus/About";
import Service from "../service/Service";
import Client from "../client/Client";

const Doc = () => {
  const components = [
    { Component: About, offset: 0 },
    { Component: Service, offset: 50 },
    { Component: Client, offset: 100 },
  ];

  return (
    <div className="relative">
      {components.map(({ Component, offset }, index) => (
        <div 
          key={index} 
          className="sticky pb-16  px-16 " 
          style={{ top: `${offset}px` }}
        >
          <Component />
        </div>
      ))}
    </div>
  );
};

export default Doc;