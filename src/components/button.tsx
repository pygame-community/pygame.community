import React from "react";

interface ButtonProps {
  text: string;
  fontSize: string;
  link: string;
}

export default function Button(props: ButtonProps) {
  return (
    <a href={props.link}>
      <div className="font-bold ml-0 mr-[15px] p-[10px] rounded-[7px] bg-[rgb(22,125,53)] transition-all duration-200 hover:bg-[rgb(17,99,41)]">
        <div style={{ fontSize: props.fontSize }}>{props.text}</div>
      </div>
    </a>
  );
}
