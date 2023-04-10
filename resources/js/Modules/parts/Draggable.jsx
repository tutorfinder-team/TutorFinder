import React, { useRef } from "react";

export default function Draggable({ children, className }) {
  const slider = useRef();
  let isDown = false;
  let startX;
  let scrollLeft;
  const events = {
    onMouseDown: (e) => {
      isDown = true;
      slider.current.classList.add("active-scroll");
      startX = e.pageX - slider.current.offsetLeft;
      scrollLeft = slider.current.scrollLeft;
    },
    onMouseLeave: (e) => {
      isDown = false;
      slider.current.classList.remove("active-scroll");
    },
    onMouseUp: (e) => {
      isDown = false;
      slider.current.classList.remove("active-scroll");
    },
    onMouseMove: (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.current.offsetLeft;
      const walk = x - startX;
      slider.current.scrollLeft = scrollLeft - walk;
    },
  };

  return (
    <div
      className={className + ` draggable overflow-x-scroll scrollbar-hide`}
      ref={slider}
      {...events}
    >
      {children}
    </div>
  );
}
