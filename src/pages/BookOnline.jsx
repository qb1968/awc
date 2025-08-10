import { useEffect, useState } from "react";

export default function BookOnline() {
  const [height, setHeight] = useState("700px");

  useEffect(() => {
    // Load Calendly script only once
    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    function updateHeight() {
      setHeight(window.innerWidth < 640 ? "500px" : "700px");
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">Book a Consultation</h2>
      <p className="text-white mb-6">
        Choose a time that works best for you. The calendar below is updated in
        real-time.
      </p>

      <div className="flex justify-center">
        <div
          className="calendly-inline-widget w-full max-w-4xl"
          data-url="https://calendly.com/allwebcon/30min"
          style={{ minWidth: "320px", height }}
        />
      </div>
    </div>
  );
}
