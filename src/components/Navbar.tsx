import { useEffect, useState } from "react";

export default function Header() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setAtTop(false) : setAtTop(true);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <div
      className={`pr-4 pl-4 sticky flex justify-between top-0 z-50 h-[60px] text-white bg-black ${
        !atTop && "shadow-md"
      }`}
    >
      <h1 className="self-center font-semibold">DiegoFHG</h1>
      <div className="self-center flex space-x-3">
        <span className="text-md font-semibold">
          <a href="#about">About</a>
        </span>
        <span className="text-md font-semibold">
          <a href="#skills">Skills</a>
        </span> 
        <span className="text-md font-semibold">
          <a href="#education">Education</a>
        </span>
        <span className="text-md font-semibold">
          <a href="#contact">Contact</a>
        </span>
      </div>
    </div>
  );
}
