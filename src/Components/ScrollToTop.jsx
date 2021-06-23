import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  // const checkScrollTop = (event) => {
  //   const offsetFromTop = getScroll(event.target, true);

  //   if (!showScroll && offsetFromTop > 350) {
  //     setShowScroll(true);
  //   } else if (offsetFromTop <= 350) {
  //     setShowScroll(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", checkScrollTop);
  //   return () => {
  //     window.removeEventListener("scroll", checkScrollTop);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const scrollUp = () => {
    console.log("sass");
    const element = document.getElementById("intro");
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div onClick={scrollUp} className="scroll-up">
      UP
    </div>
  );
};

export default ScrollToTop;
