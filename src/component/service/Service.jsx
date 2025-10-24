import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const IMG =
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop";

  const sections = [
    {
      title: "General",
      items: [
        "We take experiential training one step further by engaging individuals in team activities.",
        "De-stressing your team & workforce with our anti-stress activities.",
        "Discovering a workable model to boost morale and offer job gratification, that can lead to higher productivity and better outcomes.",
      ],
    },
    {
      title: "TNA (Training Need Analysis)",
      items: [
        "Identify gaps between the desired end-actual performance levels.",
        "Undertake action training programs are if existing or lacking.",
        "Design effective training programs to address the identified gaps.",
        "Develop an increase on earned business needs and long term goals.",
      ],
    },
    {
      title: "Training",
      items: [
        "Leadership Management programs that help employees develop managerial and executive skills.",
        "Team Building activities to learn culture, values, policies, and procedures.",
        "Communication skills training for speaking and listening.",
        "Technical training for product knowledge and skill enhancement.",
        "Digital skills training in emerging technologies.",
      ],
    },
    {
      title: "Outbound Training",
      items: [
        "Outdoor programs with learn-by-doing, hands-on activities.",
        "Teams solve challenges, practice leadership and accountability.",
        "Reflect on exercises and apply them at work.",
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const stackRef = useRef(null);
  const panelsRef = useRef([]);
  const prevRef = useRef(0);
  const isAnimatingRef = useRef(false); // ✅ prevents jitter by blocking mid-anim flips

  // Absolute stack setup
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(panelsRef.current, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transformOrigin: "center",
        willChange: "transform, opacity",
        pointerEvents: "none", // panels are visual only
      });

      panelsRef.current.forEach((p, i) =>
        gsap.set(p, {
          visibility: i === 0 ? "visible" : "hidden",
          opacity: i === 0 ? 1 : 0,
          zIndex: i ? 1 : 2,
          clearProps: "transform",
        })
      );
    }, stackRef);
    return () => ctx.revert();
  }, []);

  // Unified transition (same for up/down): incoming always from bottom, outgoing always down
  useLayoutEffect(() => {
    const prev = prevRef.current;
    const next = current;
    if (prev === next) return;

    const outgoing = panelsRef.current[prev];
    const incoming = panelsRef.current[next];

    isAnimatingRef.current = true; // lock during animation

    // Durations tuned for smoothness
    const D_OUT = 0.9;
    const D_IN = 1.2;

    // Prep incoming (from bottom, slight overscale, invisible)
    gsap.set(incoming, {
      visibility: "visible",
      zIndex: 3,
      opacity: 0,
      y: 280,         // comes from below
      scale: 1.06,    // slight overscale for depth
      force3D: true,
    });

    // Keep outgoing just beneath while animating
    gsap.set(outgoing, { zIndex: 2, force3D: true });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", overwrite: "auto" },
      onComplete: () => {
        isAnimatingRef.current = false; // release lock
      },
    });

    tl
      // Outgoing: slide down, fade out, scale to 0 (same both directions)
      .to(outgoing, {
        y: 140,
        scale: 0,
        opacity: 0,
        duration: D_OUT,
      }, 0)
      // Incoming: slide up from bottom, fade in, settle to scale 1
      .to(incoming, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: D_IN,
      }, 0.12) // small overlap so it feels continuous
      // Cleanup
      .set(outgoing, {
        visibility: "hidden",
        clearProps: "transform,opacity,zIndex",
      });

    prevRef.current = next;
    return () => tl.kill();
  }, [current]);

  // ScrollTrigger: step through panels; block step while animating to avoid jitter
  useGSAP(() => {
    const last = sections.length - 1;
    const STEP_HYST = 0.66; // bigger = fewer jumps

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => "+=" + window.innerHeight * last,
      scrub: 6, // smoother scrub
      anticipatePin: 1,
      invalidateOnRefresh: true,
      markers: false,
      onUpdate: (self) => {
        if (isAnimatingRef.current) return; // ✅ stop jitter
        const raw = self.progress * last;
        const prev = prevRef.current;

        if (raw > prev + STEP_HYST && prev < last) {
          setCurrent(prev + 1);
        } else if (raw < prev - STEP_HYST && prev > 0) {
          setCurrent(prev - 1);
        }
      },
      onLeave: () => {
        if (!isAnimatingRef.current && prevRef.current !== last) setCurrent(last);
      },
      onLeaveBack: () => {
        if (!isAnimatingRef.current && prevRef.current !== 0) setCurrent(0);
      },
    });

    return () => st.kill();
  }, [sections.length]);

  return (
    <section
      ref={containerRef}
      className="w-full h-screen bg-[#E16C02] text-white overflow-hidden pb-20"
    >
      {/* Header */}
      <div className="flex justify-between pt-12 pb-2 items-center border-b-[1.5px] w-[95%] mx-auto">
        <div className="text-lg font-medium">[ About ]</div>
      </div>

      {/* Top */}
      <div className="w-full flex py-14 px-10 justify-between">
        <div className="text-8xl font-bold w-[40%] text-start leading-none">
          <p>What We</p>
          <p>Offer</p>
        </div>
        <div className="w-[50%]">
          <p className="text-2xl text-start tracking-widest">
            We're Engage, a versatile outlet committed to providing top-tier
            corporate and outbound training services...
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-between font-bold px-10 gap-10">
        {/* Left menu */}
        <div className="flex flex-col space-y-14">
          {sections.map((s, i) => (
            <div
              key={i}
              className={`flex space-x-2 text-xl items-center border-b-[1.5px] border-white transition-all duration-300 ${
                i === current ? "opacity-100 scale-105" : "opacity-60"
              }`}
            >
              <span
                className={`h-4 w-4 ${
                  i === current ? "bg-white" : "bg-white/50"
                }`}
              />
              <p>{s.title.toUpperCase()}</p>
            </div>
          ))}
        </div>

        {/* Right: stacked panels */}
        <div className="w-[70%] relative">
          <div
            ref={stackRef}
            className="relative w-full h-[30rem] rounded-3xl overflow-hidden"
          >
            {sections.map((s, i) => (
              <div
                key={i}
                ref={(el) => (panelsRef.current[i] = el)}
                className="bg-white rounded-3xl w-full h-full"
              >
                <div className="w-full h-full rounded-3xl text-start flex justify-between overflow-hidden">
                  <div className="w-1/2 p-10 flex flex-col justify-start">
                    <h1 className="text-5xl font-bold text-orange-600 mb-6">
                      {s.title}
                    </h1>
                    <ul className="space-y-5 text-gray-800 text-xl font-semibold">
                      {s.items.map((item, j) => (
                        <li key={j} className="flex items-start">
                          <span className="text-orange-600 text-2xl mr-3">•</span>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-[50%] relative flex justify-end items-center overflow-hidden py-10">
                    <div className="grid grid-cols-2 gap-3 rotate-[20deg]">
                      {[0, 1, 2, 3].map((k) => (
                        <img
                          key={k}
                          src={IMG}
                          alt="activity"
                          className="w-60 h-96 object-cover rounded-lg"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
