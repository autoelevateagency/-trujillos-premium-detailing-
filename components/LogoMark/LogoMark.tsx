import type { JSX } from "react";

type LogoMarkProps = {
  label?: string;
  showText?: boolean;
};

export const LogoMark = ({
  label,
  showText = true,
}: LogoMarkProps): JSX.Element => {
  return (
    <>
      <svg viewBox="0 0 34 20" aria-hidden="true">
        <path
          d="M1 14c4-7 10-9 17-9 6 0 11 3 15 9"
          fill="none"
          stroke="#ACAAAB"
          strokeWidth="1.4"
        />
        <path d="M0 17h34" stroke="#BC9953" strokeWidth="1" />
      </svg>
      {showText && label ? <span>{label}</span> : null}
    </>
  );
};
