import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

const PopupS = ({ open, onClose }) => {
  const overlayRef = useRef(null);
  const cardRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    // Reset any previous inline styles from GSAP
    gsap.set([overlayRef.current, cardRef.current], { clearProps: "all" });

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReduced) {
      // enter animation
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.out" }
      );
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 12, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
          delay: 0.05,
        }
      );
    } else {
      // No animation for reduced motion users
      gsap.set(overlayRef.current, { opacity: 1 });
      gsap.set(cardRef.current, { opacity: 1, y: 0, scale: 1 });
    }

    // focus close on open (basic focus management)
    closeBtnRef.current?.focus?.();

    // close on ESC
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    // lock scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const node = (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      className="fixed inset-0 z-[9998] font-[Inter] w-screen bg-black/40 backdrop-blur-[2px] flex items-center justify-center p-3 md:p-4"
      onMouseDown={(e) => {
        // close if clicking outside the card
        if (e.target === overlayRef.current) onClose?.();
      }}
    >
      <div className="relative w-full md:w-[95vw] max-w-[860px] max-h-[88vh] md:max-h-[100vh] rounded-xl md:rounded-2xl bg-white shadow-2xl border border-gray-200 flex flex-col">
    {/* Close button */}
    <button
      className="absolute top-3 border-2 right-3 w-8 h-8 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
      aria-label="Close"
    >
      ✕
    </button>

    {/* Header */}
    <div className="px-5 md:px-8 md:pt-16  border-b border-gray-100">
      <div className="flex md:flex-row flex-col items-start md:items-center gap-4">
        <h1 id="popup-title" className="text-3xl md:text-4xl font-semibold">
          Service Name
        </h1>
      </div>
    </div>

    {/* Content */}
    <div
      className="px-5 md:px-8 py-5 md:py-6 overflow-y-auto [scrollbar-width:thin]"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <section className="space-y-7 text-[15px] md:text-[16px] leading-relaxed text-gray-800">
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-1 flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 md:mt-1">✷</span>
            <span>Our Approach</span>
          </h2>
          <p className="text-base xl:ml-5 md:text-lg font-medium text-gray-700">
            Our genesis has evolved from Antworx, where we, like Ants in an
            colony, ensure methodical delivery of solutions, impacting every
            function and person, with auditable ROI outcomes.
          </p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-bold mb-1 flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 md:mt-1">✷</span>
            <span>Our Approach</span>
          </h2>
          <p className="text-base xl:ml-5 md:text-lg font-medium text-gray-700">
            Our genesis has evolved from Antworx, where we, like Ants in an
            colony, ensure methodical delivery of solutions, impacting every
            function and person, with auditable ROI outcomes.
          </p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-bold mb-1 flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 md:mt-1">✷</span>
            <span>Our Approach</span>
          </h2>
          <p className="text-base xl:ml-5 md:text-lg font-medium text-gray-700">
            Our genesis has evolved from Antworx, where we, like Ants in an
            colony, ensure methodical delivery of solutions, impacting every
            function and person, with auditable ROI outcomes.
          </p>
        </div>
      </section>
    </div>
  </div>
    </div>
  );

  return createPortal(node, document.body);
};

export default PopupS;
