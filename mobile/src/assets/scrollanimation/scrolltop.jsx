import React from "react";
import { useInView } from "react-intersection-observer";

const ScrollSectiontop = ({ children }) => {
  const { ref, inView } = useInView({
    // triggerMany: true,  // Trigger the animation only once
    triggerOnce:true,
    threshold: 0.1,     // Trigger when 10% of the element is visible
  });

  return (
    <div
    //   ref={ref}
    //   className={`transition-all duration-700 transform ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollSectiontop;