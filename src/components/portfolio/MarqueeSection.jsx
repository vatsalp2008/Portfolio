import React from "react";
import LogoLoop from "../../reactbits/LogoLoop";

const ITEMS = [
  "Python", "TypeScript", "Java", "Rust", "Go", "Swift", "React", "PyTorch",
  "Kafka", "Apache Flink", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "AWS", "MCP",
];

const logos = ITEMS.map((item) => ({
  node: (
    <span className="font-display italic text-[15px] text-[#BBBBBB] whitespace-nowrap select-none">
      {item}
    </span>
  ),
  title: item,
}));

export default function MarqueeSection() {
  return (
    <div className="bg-white border-y border-warm py-[18px] overflow-hidden">
      <LogoLoop
        logos={logos}
        speed={55}
        direction="left"
        gap={56}
        logoHeight={16}
        fadeOut
        fadeOutColor="#FFFFFF"
        pauseOnHover
        scaleOnHover
        ariaLabel="Technologies I work with"
      />
    </div>
  );
}
