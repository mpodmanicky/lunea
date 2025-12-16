import React from 'react';

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 602 146"
      preserveAspectRatio="xMinYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="PSgrad_0" x1="0%" x2="25.882%" y1="96.593%" y2="0%">
          <stop offset="0%" stopColor="rgb(199,168,110)" stopOpacity="1" />
          <stop offset="25%" stopColor="rgb(226,206,168)" stopOpacity="1" />
          <stop offset="50%" stopColor="rgb(199,168,110)" stopOpacity="1" />
          <stop offset="74%" stopColor="rgb(226,206,168)" stopOpacity="1" />
          <stop offset="100%" stopColor="rgb(199,168,110)" stopOpacity="1" />
        </linearGradient>

        <filter id="Filter_0" filterUnits="userSpaceOnUse" x="0" y="0" width="602" height="146">
          <feOffset in="SourceAlpha" dx="0" dy="4" />
          <feGaussianBlur result="blurOut" stdDeviation="2.236" />
          <feFlood floodColor="rgb(0, 0, 0)" result="floodOut" />
          <feComposite operator="atop" in="floodOut" in2="blurOut" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.1" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#Filter_0)">
        <text
          fontFamily="Inria Serif"
          transform="matrix(1.43600298244082, 0, 0, 1.43600298244083, 4.79682985280289, 135.274138683498)"
          fontSize="139.275px"
          fill="rgb(0,0,0)"
        >
          <tspan>LUNAE</tspan>
        </text>

        <text
          fontFamily="Inria Serif"
          transform="matrix(1.43600298244082, 0, 0, 1.43600298244083, 4.79682985280289, 135.274138683498)"
          fontSize="139.275px"
          fill="url(#PSgrad_0)"
        >
          <tspan>LUNAE</tspan>
        </text>
      </g>
    </svg>
  );
}
