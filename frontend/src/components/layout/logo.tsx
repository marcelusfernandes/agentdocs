// Logo is the "AgentDocs by OpenPRD" wordmark, drawn as SVG text so the existing
// height-only sizing (h-4, h-5, ...) keeps working everywhere it is used. The
// product name follows the page foreground colour; the "by OpenPRD" tag is
// smaller and muted. textLength pins each run to its box so the mark keeps the
// same proportions before and after the heading web font loads.
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1110 160"
      role="img"
      aria-label="AgentDocs by OpenPRD"
      className={className}
    >
      <text
        x="0"
        y="132"
        textLength="730"
        lengthAdjust="spacingAndGlyphs"
        fontSize="150"
        fontWeight="600"
        letterSpacing="-4"
        fill="var(--color-fg)"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        AgentDocs
      </text>
      <text
        x="770"
        y="132"
        textLength="340"
        lengthAdjust="spacingAndGlyphs"
        fontSize="62"
        fontWeight="500"
        fill="var(--color-fg-muted)"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        by OpenPRD
      </text>
    </svg>
  );
}
