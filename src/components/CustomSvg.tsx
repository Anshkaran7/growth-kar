// components/CustomSvg.tsx
import React from "react";

const CustomSvg: React.FC = () => {
  return (
    <svg
      viewBox="0 0 1692 639"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      className="w-full h-full absolute bottom-0"
    >
      <g opacity="0.5" filter="url(#filter0_f_256_134)">
        <ellipse cx="880.5" cy="707" rx="411.5" ry="307" fill="#6877FF" />
      </g>
      <g opacity="0.6" filter="url(#filter1_f_256_134)">
        <ellipse cx="673.5" cy="707" rx="411.5" ry="307" fill="#BD68FF" />
      </g>
      <path
        d="M1599 859C1599 996.602 1509.76 1121.33 1365.16 1211.71C1220.57 1302.07 1020.76 1358 800 1358C579.244 1358 379.434 1302.07 234.845 1211.71C90.2415 1121.33 1 996.602 1 859C1 721.398 90.2415 596.672 234.845 506.295C379.434 415.927 579.244 360 800 360C1020.76 360 1220.57 415.927 1365.16 506.295C1509.76 596.672 1599 721.398 1599 859Z"
        fill="black"
      />
      <path
        d="M1599 859C1599 996.602 1509.76 1121.33 1365.16 1211.71C1220.57 1302.07 1020.76 1358 800 1358C579.244 1358 379.434 1302.07 234.845 1211.71C90.2415 1121.33 1 996.602 1 859C1 721.398 90.2415 596.672 234.845 506.295C379.434 415.927 579.244 360 800 360C1020.76 360 1220.57 415.927 1365.16 506.295C1509.76 596.672 1599 721.398 1599 859Z"
        stroke="url(#paint0_linear_256_134)"
        strokeWidth="2"
      />
      <path
        d="M1599 859C1599 996.602 1509.76 1121.33 1365.16 1211.71C1220.57 1302.07 1020.76 1358 800 1358C579.244 1358 379.434 1302.07 234.845 1211.71C90.2415 1121.33 1 996.602 1 859C1 721.398 90.2415 596.672 234.845 506.295C379.434 415.927 579.244 360 800 360C1020.76 360 1220.57 415.927 1365.16 506.295C1509.76 596.672 1599 721.398 1599 859Z"
        stroke="url(#paint1_linear_256_134)"
        strokeOpacity="0.2"
        strokeWidth="2"
      />
      <defs>
        <filter
          id="filter0_f_256_134"
          x="69"
          y="0"
          width="1623"
          height="1414"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="200"
            result="effect1_foregroundBlur_256_134"
          />
        </filter>
        <filter
          id="filter1_f_256_134"
          x="53"
          y="191"
          width="1241"
          height="1032"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="104.5"
            result="effect1_foregroundBlur_256_134"
          />
        </filter>
        <linearGradient
          id="paint0_linear_256_134"
          x1="887.5"
          y1="359"
          x2="800"
          y2="1359"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6877FF" />
          <stop offset="0.18" stopColor="black" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_256_134"
          x1="555"
          y1="381"
          x2="800"
          y2="1359"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6EDFD" />
          <stop offset="0.08" stopColor="black" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CustomSvg;
