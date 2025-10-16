import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const Imagesvsg = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop";
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const currentSectionRef = useRef(0);

  const sections = [
    { title: "General", items: [
      "We take experiential training one step further by engaging individuals in team activities.",
      "De-stressing your team & workforce with our anti-stress activities.",
      "Discovering a workable model to boost morale and offer job gratification, that can lead to higher productivity and better outcomes.",
    ]},
    { title: "TNA (Training Need Analysis)", items: [
      "Identify gaps between the desired end-actual performance levels.",
      "Undertake action training programs are if existing or lacking.",
      "Design effective training programs to address the identified gaps.",
      "Develop an increase on earned business needs and long term goals.",
    ]},
    { title: "Training", items: [
      "Leadership Management programs that help employees develop managerial and executive skills.",
      "Team Building activities are developed to help your employees learn about the opportunities, culture, values, policies, and procedures.",
      "Communication skills training that improves effective speaking, and listening.",
      "Technical training offering engaging in product knowledge and skill enhancement.",
      "Digital skills training looking in new digital skills and emerging technologies.",
    ]},
    { title: "Outbound Training", items: [
      "Our outdoor training and development programs that help them learn by doing and hands on.",
      "Participants work together to solve challenges, practice leadership and accountability, and play team-building games.",
      "Participants analyze any speedster and consider how it applies to their personal working environment.",
    ]},
  ];

  useGSAP(() => {
    // Initial positions
    if (!sectionRefs.current.length) return;
    gsap.set(sectionRefs.current, { yPercent: 100 });
    gsap.set(sectionRefs.current[0], { yPercent: 0 });

    let isAnimating = false;

    const handleWheel = (e) => {
      const box = containerRef.current?.getBoundingClientRect();
      const over =
        box &&
        e.clientX >= box.left && e.clientX <= box.right &&
        e.clientY >= box.top  && e.clientY <= box.bottom;

      if (!over) return;
      e.preventDefault();
      if (isAnimating) return;

      const dir = e.deltaY > 0 ? 1 : -1;
      const curr = currentSectionRef.current;
      const next = Math.min(Math.max(curr + dir, 0), sections.length - 1);
      if (next === curr) return;

      isAnimating = true;
      const currEl = sectionRefs.current[curr];
      const nextEl = sectionRefs.current[next];

      gsap.fromTo(nextEl, { yPercent: 100 * dir }, { yPercent: 0, duration: 0.7, ease: "power2.inOut" });
      gsap.to(currEl, {
        yPercent: -100 * dir,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          currentSectionRef.current = next;
          setCurrentSection(next);
          isAnimating = false;
        },
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Click to jump
  const jumpTo = (idx) => {
    if (idx === currentSectionRef.current) return;
    const dir = idx > currentSectionRef.current ? 1 : -1;
    const currEl = sectionRefs.current[currentSectionRef.current];
    const nextEl = sectionRefs.current[idx];

    gsap.fromTo(nextEl, { yPercent: 100 * dir }, { yPercent: 0, duration: 0.7, ease: "power2.inOut" });
    gsap.to(currEl, {
      yPercent: -100 * dir,
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        currentSectionRef.current = idx;
        setCurrentSection(idx);
      },
    });
  };

  return (
    <div className="w-full h-screen bg-[#E16C02] text-white overflow-hidden">
      <div className="flex justify-between pt-12 pb-2 items-center border-b-[1.5px] w-[95%] mx-auto">
        <div className="text-lg font-medium">[ About ]</div>
      </div>

      <div className="w-full flex py-14 px-10 justify-between h-[30%]">
        <div className="text-8xl font-bold w-[40%] h-full text-start">
          <p>What We</p><p> Offer</p>
        </div>
        <div className="w-[50%]">
          <p className="text-2xl text-start tracking-widest">
            We're Engage, a versatile outlet committed to providing top-tier corporate and outbound training services. We specialize in designing
            tailored programs that cater to both individual and organizational needs, emphasizing team building and employee growth.
          </p>
        </div>
      </div>

      <div className="flex justify-between h-[55%] font-bold px-10">
        {/* Left menu */}
        <div className="flex flex-col space-y-14">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className={`flex space-x-2 text-xl items-center border-b-[1.5px] border-white transition-all duration-300 cursor-pointer ${
                idx === currentSection ? "opacity-100 scale-105" : "opacity-50"
              }`}
              onClick={() => jumpTo(idx)}
            >
              <div className={`h-4 w-4 transition-all ${idx === currentSection ? "bg-white" : "bg-white/50"}`} />
              <p>{section.title.toUpperCase()}</p>
            </div>
          ))}
        </div>

        {/* Right panels */}
        <div ref={containerRef} className="w-[70%] bg-white h-[95%] rounded-3xl z-20 relative overflow-hidden">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl"
              style={{ zIndex: sections.length - index }}
            >
              <div className="w-full bg-white h-full rounded-3xl text-start flex justify-between overflow-hidden">
                <div className="w-1/2 p-10 flex flex-col justify-start">
                  <h1 className="text-4xl font-bold text-orange-600 mb-6">{section.title}</h1>
                  <ul className="space-y-5 text-gray-800 text-lg">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-orange-600 text-2xl mr-3">*</span>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-[50%] h-full relative flex justify-end items-center overflow-hidden">
                  <div className="grid grid-cols-2 gap-3 rotate-[20deg]">
                    {[0, 1, 2, 3].map((i) => (
                      <img key={i} src={Imagesvsg} alt="activity" className="w-60 h-96 object-cover rounded-lg" loading="lazy" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
