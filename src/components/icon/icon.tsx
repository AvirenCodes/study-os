import type { SVGProps } from "react";

type IconName =
  | "dashboard"
  | "mistakes"
  | "reviews"
  | "calendar"
  | "progress"
  | "settings"
  | "notifications"
  | "search"
  | "profile"
  | "studyTime"
  | "questions"
  | "accuracy"
  | "weakTopics"
  | "mathematics"
  | "physics"
  | "chemistry"
  | "add"
  | "edit"
  | "delete"
  | "menu"
  | "chevron"
  | "check"
  | "moon";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number | string;
};

export default function Icon({
  name,
  size = 24,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {icons[name]}
    </svg>
  );
}

const icons: Record<IconName, React.ReactNode> = {
  // ─────────────────────────────────────────
  // Navigation
  // ─────────────────────────────────────────

  dashboard: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),

  mistakes: (
    <>
      <path d="M12 3L2.5 20h19L12 3z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </>
  ),

  reviews: (
    <>
      <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15.5 6.2L3 16" />
      <path d="M3 21v-5h5" />
    </>
  ),

  calendar: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </>
  ),

  progress: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h17" />
      <path d="M7 16l4-5 3 2 6-7" />
    </>
  ),

  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.41 1.41-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2v-.49a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.41-1.41.06-.06A1.7 1.7 0 0 0 9.4 15a1.7 1.7 0 0 0-1.56-1.03H7v-2h.84A1.7 1.7 0 0 0 9.4 11a1.7 1.7 0 0 0-.34-1.88L9 9.06l1.41-1.41.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 13.38 6.5V6h2v.5a1.7 1.7 0 0 0 1.03 1.55 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.41 1.41-.06.06A1.7 1.7 0 0 0 19.4 11c.17.62.7 1.03 1.35 1.03H21v2h-.25A1.7 1.7 0 0 0 19.4 15z" />
    </>
  ),

  notifications: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </>
  ),

  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),

  profile: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),

  // ─────────────────────────────────────────
  // Dashboard / Statistics
  // ─────────────────────────────────────────

  studyTime: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),

  questions: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
      <path d="M8 15h3" />
      <path d="m15 15 1.5 1.5L19 14" />
    </>
  ),

  accuracy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>
  ),

  weakTopics: (
    <>
      <path d="M12 3L2.5 20h19L12 3z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </>
  ),

  // ─────────────────────────────────────────
  // Subjects
  // ─────────────────────────────────────────

  mathematics: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 8h10" />
      <path d="M12 5v6" />
      <path d="M7 15h4" />
      <path d="M9 13v4" />
      <path d="M15 14h3" />
      <path d="M15 17h3" />
    </>
  ),

  physics: (
    <>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="9" ry="4" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
    </>
  ),

  chemistry: (
    <>
      <path d="M9 3v6l-5.5 9.5A2 2 0 0 0 5.23 21h13.54a2 2 0 0 0 1.73-2.5L15 9V3" />
      <path d="M8 3h8" />
      <path d="M7 15h10" />
    </>
  ),

  // ─────────────────────────────────────────
  // Actions
  // ─────────────────────────────────────────

  add: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </>
  ),

  edit: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" />
    </>
  ),

  delete: (
    <>
      <path d="M4 7h16" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M6 7l1 14h10l1-14" />
      <path d="M9 7V4h6v3" />
    </>
  ),

  menu: (
    <>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </>
  ),

  chevron: (
    <>
      <path d="m9 6 6 6-6 6" />
    </>
  ),

  check: (
    <>
      <path d="m5 12 4 4L19 6" />
    </>
  ),

  moon: (
    <>
      <path d="M21 12.8A8.5 8.5 0 0 1 11.2 3 7 7 0 1 0 21 12.8z" />
    </>
  ),
};
