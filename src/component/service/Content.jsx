import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceScroll = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  const contents = [
    {
      title: "General",
      points: [
        "We take experiential training one step further by engaging individuals in team activities.",
        "De-stressing your team & workforce with our anti-stress activities.",
        "Discovering a workable model to boost morale and offer job gratification that leads to higher productivity and better outcomes.",
      ],
      images: [
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      ],
      color: "bg-orange-50",
    },
    {
      title: "TNA (Training Need Analysis)",
      points: [
        "Identify gaps between the desired and actual performance levels.",
        "Determine which training programs are missing or lacking.",
        "Design effective training programs to address the identified gaps.",
      ],
      images: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1581092334507-8efb06e8a6f5",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
      ],
      color: "bg-gray-50",
    },
    {
      title: "Training",
      points: [
        "Leadership development programs that help employees grow managerial and creative skills.",
        "Onboarding and skill development programs that help new employees adapt better.",
        "Soft skills training focusing on team collaboration and effective communication.",
      ],
      images: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
        "https://images.unsplash.com/photo-1581092334507-8efb06e8a6f5",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      ],
      color: "bg-orange-50",
    },
    {
      title: "Outbound Training",
      points: [
        "Participants take part in real-time activities and games that help them learn teamwork and leadership.",
        "Programs boost confidence, communication, and performance.",
        "Experience-based training sessions foster fun learning applicable to work life.",
      ],
      images: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
        "https://images.unsplash.com/photo-1581092334507-8efb06e8a6f5",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      ],
      color: "bg-gray-50",
    },
  ];

  useEffect(() => {
    const panels = panelsRef.current;
    const totalPanels = panels.length;

    gsap.to(panels, {
      yPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: `+=${totalPanels * 1000}`,
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden">
      {contents.map((item, index) => (
        <div
          key={index}
          ref={(el) => (panelsRef.current[index] = el)}
          className={`panel h-screen flex justify-between items-center px-16 py-12 ${item.color}`}
        >
          {/* LEFT TEXT */}
          <div className="w-[50%] text-start">
            <h1 className="text-4xl font-bold text-orange-600 mb-6">
              {item.title}
            </h1>
            <ul className="space-y-4 text-gray-800 text-lg">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-orange-600 text-2xl mr-3">•</span>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="w-[45%] grid grid-cols-2 gap-4 rotate-[15deg]">
            {item.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="activity"
                className="w-64 h-80 object-cover rounded-xl shadow-lg"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceScroll;
