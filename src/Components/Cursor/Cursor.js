import { useRef, useEffect } from "react";
import "./Cursor.css";
const Cursor = () => {
  const delay = 10;
  const dot = useRef(null);
  const dotOutline = useRef(null);
  const cursorVisibility = useRef(true);
  const cursorEnlarged = useRef(false);
  const X = useRef(window.innerWidth / 2);
  const Y = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);
  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);
    animateDotOutline();
    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (cursorVisibility.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = "translate(-50%, -50%) scale(0.75)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      dot.current.style.transform = "translate(-50%, -50%) scale(1)";
      dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisibility.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisibility.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e) => {
    const dotOutline = document.querySelector(".cursor-dot-outline");
    cursorVisibility.current = true;
    toggleCursorVisibility();
    X.current = e.pageX;
    Y.current = e.pageY;
    dot.current.style.top = Y.current + "px";
    dot.current.style.left = X.current + "px";
    if (e.target.id === "label") {
      dotOutline.style.backgroundColor = "white";
      dotOutline.style.mixBlendMode = "difference";
      document.querySelector(".cursor-dot").style.opacity = "0";
    } else {
      dotOutline.style.backgroundColor = "rgba(165, 159, 159, 0.678)";
      dotOutline.style.mixBlendMode = "normal";
    }
  };

  const animateDotOutline = () => {
    _x.current += (X.current - _x.current) / delay;
    _y.current += (Y.current - _y.current) / delay;
    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div ref={dotOutline} className={"cursor-dot-outline"}></div>
      <div ref={dot} className={"cursor-dot"}></div>
    </>
  );
};
export default Cursor;
