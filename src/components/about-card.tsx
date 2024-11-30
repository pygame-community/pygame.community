import React from "react";

interface AboutCardProps {
  label: string;
  desc: string;
}

export default function AboutCard(props: AboutCardProps) {
  return (
    <div className="max-w-[350px] m-5 p-[15px] pb-0">
      <div className="text-[1.5rem] font-bold">{props.label}</div>
      <div>{props.desc}</div>
    </div>
  );
}
