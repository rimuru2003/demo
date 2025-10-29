import React, { useEffect, useRef } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const InfoMediaCard = ({
  open,
  onClose,
  card,
  activeTab = "details",
  onTabChange,
}) => {
  const panelRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Focus trap (basic)
  useEffect(() => {
    if (!open || !panelRef.current) return;
    const focusable = panelRef.current.querySelectorAll(
      'button, [href], video, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable[0]?.focus();
  }, [open]);

  if (!open || !card) return null;

  // ✅ Normalize details to an array
  const detailItems = Array.isArray(card.details)
    ? card.details
    : card.details
    ? [card.details]
    : [];

  const tabs = [
    { key: "details", label: "Details" },
    { key: "images", label: "Image" },
    { key: "videos", label: "Video" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="relative z-[101] w-[92vw] max-w-5xl h-[70vh] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 animate-in"
        role="dialog"
        aria-modal="true"
        aria-label={`${card.brand} info`}
      >
        {/* header */}
        <div className="flex w-full items-end  px-5  ">
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* tabs */}
        <div className="px-5 pt-4">
          <div className="flex gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => onTabChange?.(t.key)}
                className={[
                  "px-3 py-1.5 rounded-xl text-sm font-medium transition",
                  activeTab === t.key
                    ? "bg-[#FA5424] text-white"
                    : "bg-orange-50 text-orange-600 hover:bg-orange-100",
                ].join(" ")}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* content */}
        <div className="p-5 overflow-y-auto max-h-[70vh]">
          {activeTab === "details" && (
            <div className="space-y-3 text-[15px] text-gray-700">
              {detailItems.length > 0 ? (
                <ul className="list-disc pl-5 text-start text-xl space-y-2">
                  {detailItems.map((line, i) => (
                    <li key={i} className="leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No details available.</p>
              )}
            </div>
          )}

          {activeTab === "images" && (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 2, 768: 3, 1024: 4 }}
            >
              <Masonry gutter="12px">
                {(card.images?.length ? card.images : [card.img]).map(
                  (src, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-xl ring-1 ring-black/5"
                    >
                      <img
                        src={src}
                        alt={`${card.brand}-img-${i}`}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-out"
                        loading="lazy"
                      />
                    </div>
                  )
                )}
              </Masonry>
            </ResponsiveMasonry>
          )}

          {activeTab === "videos" && (
            <div className="space-y-4 ">
              {(card.videos?.length ?? 0) === 0 && (
                <p className="text-gray-600">No videos available.</p>
              )}
              {(card.videos || []).map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl ring-1 ring-black/5"
                >
                  <video
                    src={src}
                    controls
                    className="w-full h-auto"
                    poster={card.img}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* tiny pop-in animation */}
      <style jsx>{`
        .animate-in {
          animation: pop 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @keyframes pop {
          0% {
            opacity: 0;
            transform: scale(0.96) translateY(6px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default InfoMediaCard;
