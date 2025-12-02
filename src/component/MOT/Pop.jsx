import React, { useEffect, useRef } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FiInfo } from "react-icons/fi";
import { FiImage } from "react-icons/fi";
import { GoVideo } from "react-icons/go";

const InfoMediaCard = ({
  open,
  onClose,
  card,
  activeTab = "details",
  onTabChange,
}) => {
  const panelRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !panelRef.current) return;
    const focusable = panelRef.current.querySelectorAll(
      'button, [href], video, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable[0]?.focus();
  }, [open]);

  if (!open || !card) return null;

  const detailItems = Array.isArray(card.details)
    ? card.details
    : card.details
    ? [card.details]
    : [];

  const tabs = [
    { key: "details", label: "Details", Icon: FiInfo },
    { key: "images", label: "Image", Icon: FiImage },
    { key: "videos", label: "Video", Icon: GoVideo },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-[1px]">
      {/* overlay */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="relative z-[101] w-[92vw] max-w-5xl h-[70vh] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 animate-in"
        role="dialog"
        aria-modal="true"
        aria-label={`${card.brand} info`}
      >
        <div className="flex w-full justify-end px-5 pt-3 pb-2">
          <button
            onClick={onClose}
            className="rounded-lg text-2xl py-1 px-2 border-[1px] hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* tabs */}
        <div className="px-5 pt-2">
          <div className="flex gap-2" role="tablist">
            {tabs.map((t) => {
              const Icon = t.Icon;
              return (
                <button
                  key={t.key}
                  onClick={() => onTabChange?.(t.key)}
                  role="tab"
                  aria-selected={activeTab === t.key}
                  className={[
                    "px-3 rounded-xl flex items-center gap-x-2 py-2 font-semibold text-lg transition",
                    activeTab === t.key
                      ? "bg-[#E16C02] text-white"
                      : "bg-orange-50 text-[#E16C02]",
                  ].join(" ")}
                >
                  <Icon className="w-4 h-4" /> {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* content */}
        <div className="p-5 overflow-y-auto max-h-[calc(70vh-140px)]">
          {activeTab === "details" && (
            <div className="space-y-3 text-[15px] text-gray-700">
              {detailItems.length > 0 ? (
                <ul className="pl-5 text-start text-xl font-semibold space-y-2">
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
            <div className="space-y-4">
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
                    preload="metadata"
                    className="w-full py-4 rounded-xl h-[58vh]"
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