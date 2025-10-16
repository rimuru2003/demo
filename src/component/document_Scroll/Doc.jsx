import React from "react";
import About from "../aboutus/About";
import Service from "../service/Service";
import Client from "../client/Client";
import Videos from "../video_page/Video";
import Hero from "../hero/Hero";

const Doc = () => {
  const components = [
    { Component: Hero, offset: 0 },

    { Component: Videos, offset: 0 },

    { Component: About, offset: 30 },
    { Component: Service, offset: 60 },
    { Component: Client, offset: 90 },
  ];

  return (
    <div className="relative">
      {components.map(({ Component, offset }, index) => (
        <div
          key={index}
          className="sticky pb-16  overflow-x-hidden "
          style={{ top: `${offset}px` }}
        >
          <Component />
        </div>
      ))}
    </div>
  );
};

export default Doc;
