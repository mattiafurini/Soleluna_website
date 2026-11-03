import React from "react";

interface SolelunaLogoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * Icona originale Soleluna (Sole + Luna) creata ad hoc per Centro Estetico & Benessere.
 * Design geometrico-celeste raffinato, ispirato alla cura di sé, al relax e alla bellezza naturale.
 * 100% originale, libera da copyright e conforme alle normative su marchi e proprietà intellettuale.
 */
export function SolelunaLogoIcon({
  className = "w-6 h-6",
  size,
  ...props
}: SolelunaLogoIconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* Luna Crescente (Abbraccio e serenità) */}
      <path
        d="M 18 5 A 13 13 0 0 0 18 31 A 7.5 13 0 0 1 18 5 Z"
        fill="currentColor"
        fillOpacity="0.25"
        strokeWidth="1.6"
      />

      {/* Nucleo del Sole (Luce e vitalità) */}
      <circle
        cx="20"
        cy="18"
        r="4.2"
        fill="currentColor"
        fillOpacity="0.3"
        strokeWidth="1.6"
      />

      {/* Raggi solari radianti */}
      <line x1="20" y1="12" x2="20" y2="8.5" strokeWidth="1.6" />
      <line x1="23.2" y1="12.5" x2="25.5" y2="9.8" strokeWidth="1.6" />
      <line x1="25.2" y1="15" x2="28" y2="13.5" strokeWidth="1.6" />
      <line x1="26" y1="18" x2="29.5" y2="18" strokeWidth="1.6" />
      <line x1="25.2" y1="21" x2="28" y2="22.5" strokeWidth="1.6" />
      <line x1="23.2" y1="23.5" x2="25.5" y2="26.2" strokeWidth="1.6" />
      <line x1="20" y1="24" x2="20" y2="27.5" strokeWidth="1.6" />

      {/* Dettagli celesti / bagliore delicato */}
      <circle cx="11.5" cy="14" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="11" cy="22" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

