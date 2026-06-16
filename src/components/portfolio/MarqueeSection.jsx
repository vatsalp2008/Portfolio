import React from "react";

const ITEMS = [
  "Python", "TypeScript", "React", "FastAPI", "XGBoost",
  "PostgreSQL", "Docker", "TensorFlow", "Rust", "Apache Spark", "AWS", "MCP",
];

export default function MarqueeSection() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-white border-y border-warm py-[18px] overflow-hidden group" aria-hidden="true">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <React.Fragment key={i}>
            <span className="font-display italic text-[13px] text-[#BBBBBB] whitespace-nowrap px-6 select-none">
              {item}
            </span>
            <span className="font-display italic text-[13px] text-[#BBBBBB] whitespace-nowrap select-none">
              ·
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
