export default function BookOnline() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">Book a Consultation</h2>
      <p className="text-gray-700 mb-6">
        Choose a time that works best for you. The calendar below is updated in
        real-time.
      </p>

      {/* Calendly Inline Embed */}
      <div
        className="calendly-inline-widget w-full min-h-[700px]"
        data-url="https://calendly.com/allwebcon/30min"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>

      {/* Calendly script */}
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
}
