import type { JSX } from "react";

export const SvgDefs = (): JSX.Element => {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2a2b" />
          <stop offset=".45" stopColor="#0d0d0d" />
          <stop offset="1" stopColor="#020202" />
        </linearGradient>
        <linearGradient id="sg" x1="0" x2="1">
          <stop offset="0" stopColor="#ACAAAB" stopOpacity="0" />
          <stop offset=".3" stopColor="#E4E4E4" />
          <stop offset=".7" stopColor="#ACAAAB" stopOpacity=".6" />
          <stop offset="1" stopColor="#ACAAAB" stopOpacity="0" />
        </linearGradient>
        <symbol id="car" viewBox="0 0 800 230">
          <ellipse cx="400" cy="212" rx="390" ry="9" fill="#000" opacity=".8" />
          <path
            d="M18 168c0-22 34-30 108-42l118-56c44-22 96-28 156-28 82 0 146 14 196 48l106 24c46 10 68 24 68 50v16H18z"
            fill="url(#bd)"
            stroke="#565657"
            strokeWidth="1.2"
          />
          <path
            d="M262 80c40-18 88-24 140-24 70 0 122 12 166 40H240z"
            fill="#030303"
            stroke="#3b3b3c"
            strokeWidth=".8"
          />
          <path
            d="M250 72c50-24 110-28 176-24 70 4 118 20 152 48"
            fill="none"
            stroke="url(#sg)"
            strokeWidth="2"
          />
          <path
            d="M40 138c250-30 470-30 730 6"
            fill="none"
            stroke="#BC9953"
            strokeWidth="1"
            opacity=".9"
          />
          <path
            d="M60 150c260-20 480-18 700 14"
            fill="none"
            stroke="url(#sg)"
            strokeWidth="1"
            opacity=".5"
          />
          <g>
            <circle
              cx="190"
              cy="170"
              r="46"
              fill="#020202"
              stroke="#2a2a2b"
              strokeWidth="3"
            />
            <circle
              cx="190"
              cy="170"
              r="31"
              fill="#0c0c0c"
              stroke="#ACAAAB"
              strokeWidth="1.4"
            />
            <circle cx="190" cy="170" r="8" fill="#ACAAAB" />
            <circle
              cx="622"
              cy="170"
              r="46"
              fill="#020202"
              stroke="#2a2a2b"
              strokeWidth="3"
            />
            <circle
              cx="622"
              cy="170"
              r="31"
              fill="#0c0c0c"
              stroke="#ACAAAB"
              strokeWidth="1.4"
            />
            <circle cx="622" cy="170" r="8" fill="#ACAAAB" />
          </g>
        </symbol>
      </defs>
    </svg>
  );
};
