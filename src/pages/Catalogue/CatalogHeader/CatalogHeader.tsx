import React from "react";
import svgPaths from "../Catalogue.svg";

const CatalogHeader: React.FC = () => {
  return (
    <div
      className={` bg-[#F6F0E9] overflow-clip relative shrink-0 w-full flex justify-center items-center py-[40px]`}
    >
      <div
        className="absolute h-[346px] left-[1026px] top-[72px] w-[542px]"
        data-name="Vector"
      >
        <div className="absolute inset-[-28.9%_-18.45%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 742 546"
          >
            <g filter="url(#filter0_f_4_202)" id="Vector">
              <path
                clipRule="evenodd"
                d={svgPaths.p243a2400}
                fill="#79BF3A"
                fillRule="evenodd"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="546"
                id="filter0_f_4_202"
                width="742"
                x="-1.18722e-07"
                y="-5.8524e-08"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_4_202"
                  stdDeviation="50"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#0f0449] blur-[50px] filter h-[117px] left-28 opacity-50 rounded-[100px] top-[-42px] w-[213px]" />

      <div className="text-[#0f0449] p">
        <p
          className="block leading-[normal] whitespace-pre mak"
          style={{ fontSize: "36px", textAlign: "center" }}
        >
          Каталог
        </p>
      </div>
    </div>
  );
};

export default CatalogHeader;
