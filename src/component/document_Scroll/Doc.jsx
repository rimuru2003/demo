import React, { Fragment } from "react";
import About from "../aboutus/About";
import Service from "../service/Service";
import Client from "../client/Client";
import Videos from "../video_page/Video";
import Hero from "../hero/Hero";
import TestimonialsCarousel from "../testimonial/Testimonial";
import OurTeam from "../our_team/OurTeam";
import AboutLayout from "../aboutlayout/AboutLayout";

const Doc = () => {
  const components = [
    { Component: Hero, offset: 0 },
    { Component: Videos, offset: 0 },
    { Component: AboutLayout, offset: 20 },
    { Component: Service, offset: 40 },
    { Component: Client, offset: 60 },
    { Component: TestimonialsCarousel, offset: 80 },
    // { Component: OurTeam, offset: 100 },
  ];

  return (
    <div className="relative">
      {components.map(({ Component, offset }, index) => {
        const isService = Component === Service;

        return (
          <Fragment key={index}>
            {/* sticky wrapper (ALL keep sticky; children stay h-screen) */}
            <div
              className="sticky pb-16 overflow-x-hidden"
              style={{ top: `${offset}px` }}
            >
              <Component />
            </div>

            {/* extra scroll distance ONLY for Service (non-sticky spacer) */}
            {isService && (
              <div aria-hidden className="h-[300vh]" />
              // 200vh ~= window-height * (slides - 1)
              // tweak to match how many steps you want to feel
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Doc;
