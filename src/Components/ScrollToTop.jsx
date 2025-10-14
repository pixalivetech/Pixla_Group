import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on mount and whenever pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // or "smooth" if you like
    });
  }, [pathname]); // triggers on pathname change

  // Also scroll to top on first mount (refresh)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTop;
