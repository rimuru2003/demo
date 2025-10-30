import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import Logo from "../../assest/logo.svg";

const Popup = ({ open, onClose }) => {
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
      <div
        ref={cardRef}
        className="relative w-full md:w-[min(90vw,860px)] max-w-[860px] max-h-[88vh] md:max-h-[82vh] rounded-xl md:rounded-2xl bg-white shadow-2xl border border-gray-200 flex flex-col"
      >
        {/* close */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="absolute top-3 right-3 xl:h-9 xl:w-9 w-4 h-4 p-2 rounded-xl flex
           items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none 
           focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div className="px-5 py-4 md:px-8 md:py-6 border-b border-gray-100">
          <div className="flex md:flex-row flex-col items-start  md:items-center gap-4">
            <img src={Logo} alt="Company logo" className="h-8 md:h-10 w-auto" />
            <div className="leading-tight">
              <h1
                id="popup-title"
                className="text-base md:text-lg font-semibold text-gray-900"
              >
                About Us
              </h1>
              <p className="mt-1 text-sm md:text-base text-gray-700">
                Parent Company:{" "}
                <span className="font-bold">Antworx Experience LLP</span>
              </p>
            </div>
          </div>
        </div>

        {/* Content (scrollable) */}
        <div
          className="px-5 md:px-8 py-5 md:py-6 overflow-y-auto [scrollbar-width:thin]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* Sections */}
          <section className="space-y-6 text-[15px] md:text-[16px] leading-relaxed text-gray-800">
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-1">
                Our Approach
              </h2>
              <p className="text-base md:text-lg">
                Our genesis has evolved from Antworx, where we, like Ants in a
                colony, ensure methodical delivery of solutions, impacting every
                function and person, with auditable ROI outcomes.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-bold mb-1">Work Style</h2>
              <p className="text-base md:text-lg">
                It helped us design and develop people-centric and engagement
                oriented experiences, that is sure to empower enterprise-wide
                change.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-bold mb-1">
                Contingency Planning
              </h2>
              <p className="mb-2 text-base md:text-lg">
                Engage is so ready to engage that even their contingencies have
                contingencies.
              </p>
              <p className="italic text-base md:text-lg text-gray-600">
                “Ants are so much like human beings. They farm, raise livestock,
                launch armies, use tactics to alarm and confuse enemies,
                exchange information ceaselessly. They do everything but watch
                television.” —
                <span className="not-italic font-medium"> Lewis Thomas</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  return createPortal(node, document.body);
};

export default Popup;
