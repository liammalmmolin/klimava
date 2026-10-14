import { useId } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitch = ({ size = "sm" }: { size?: "sm" | "lg" }) => {
  const { language, setLanguage } = useLanguage();
  const uid = useId();
  const dim = size === "lg" ? "w-8 h-8" : "w-6 h-6";

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLanguage("sv")}
        className={`${dim} rounded-full overflow-hidden transition-opacity ${language === "sv" ? "opacity-100 ring-2 ring-primary" : "opacity-50 hover:opacity-80"}`}
        aria-label="Svenska"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <clipPath id={`${uid}-sv`}><circle cx="50" cy="50" r="50"/></clipPath>
          <g clipPath={`url(#${uid}-sv)`}>
            <rect width="100" height="100" fill="#006AA7"/>
            <rect x="30" width="15" height="100" fill="#FECC02"/>
            <rect y="37.5" width="100" height="25" fill="#FECC02"/>
          </g>
        </svg>
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`${dim} rounded-full overflow-hidden transition-opacity ${language === "en" ? "opacity-100 ring-2 ring-primary" : "opacity-50 hover:opacity-80"}`}
        aria-label="English"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <clipPath id={`${uid}-en`}><circle cx="50" cy="50" r="50"/></clipPath>
          <g clipPath={`url(#${uid}-en)`}>
            <rect width="100" height="100" fill="#00247D"/>
            <path d="M0,0 L100,100 M100,0 L0,100" stroke="#fff" strokeWidth="15"/>
            <path d="M0,0 L100,100 M100,0 L0,100" stroke="#CF142B" strokeWidth="10"/>
            <rect x="40" width="20" height="100" fill="#fff"/>
            <rect y="35" width="100" height="30" fill="#fff"/>
            <rect x="43" width="14" height="100" fill="#CF142B"/>
            <rect y="38" width="100" height="24" fill="#CF142B"/>
          </g>
        </svg>
      </button>
    </div>
  );
};
