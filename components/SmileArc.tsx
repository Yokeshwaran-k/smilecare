type SmileArcProps = {
  flip?: boolean;
  fromColor?: string;
  toColor?: string;
  className?: string;
};

/**
 * The recurring brand signature: a soft downward curve that echoes the
 * shape of a smile. Used sparingly as a section transition instead of a
 * plain straight edge, so the "smile" idea shows up structurally, not
 * just in copy.
 */
export default function SmileArc({
  flip = false,
  fromColor = "#F6FAFC",
  toColor = "#0B2A45",
  className = "",
}: SmileArcProps) {
  return (
    <div
      className={`section-divider ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="smile-arc"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C 320,110 1120,110 1440,0 L1440,110 L0,110 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
