import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedText = ({
  text = "",
  delay = 0,
  duration = 1,
  className = "",
  tag: Tag = "h1",
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;

    let html = "";
    text.split("").forEach((char) => {
      if (char === " ") {
        html += `<span class="a inline-block">&nbsp;</span>`;
      } else {
        html += `<span class="a inline-block">${char}</span>`;
      }
    });

    el.innerHTML = html;

    gsap.from(el.querySelectorAll(".a"), {
      y: 50,
      opacity: 0,
      stagger: 0.06,
      duration,
      delay,
      ease: "power3.out",
    });
  }, [text, delay, duration]);

  return (
    <Tag ref={textRef} className={className}>
      {text}
    </Tag>
  );
};

export default AnimatedText;
