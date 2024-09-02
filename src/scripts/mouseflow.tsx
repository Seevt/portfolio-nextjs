"use client";
import { useEffect } from "react";
import Script from "next/script";
function Mouseflow() {
  useEffect(() => {
    (window as any)._mfq = (window as any)._mfq || [];
  }, []);
  return (
    <>
      <Script
        id="mouseflow-script"
        strategy="lazyOnload"
        src="https://cdn.mouseflow.com/projects/d35f5f20-7479-43a5-870f-6c9f4bb0ab70.js"
        onLoad={() => {
          (window as any)._mfq = (window as any)._mfq || [];
        }}
      />
    </>
  );
}

export default Mouseflow;
