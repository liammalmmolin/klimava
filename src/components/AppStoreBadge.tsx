import badgeSv from "@/assets/app-store-badge-sv.svg";
import badgeEn from "@/assets/app-store-badge-en.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export const AppStoreBadge = ({ className }: { className?: string }) => {
  const { language, t } = useLanguage();
  return (
    <a
      href="https://apps.apple.com/se/app/klimava/id6760266069"
      target="_blank"
      rel="noopener noreferrer"
      className={cn("rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
    >
      <img
        src={language === "en" ? badgeEn : badgeSv}
        alt={t("Hämta i App Store", "Download on the App Store")}
        width={120}
        height={40}
        className="h-10 w-auto max-w-full"
      />
    </a>
  );
};