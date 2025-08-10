import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const FORMSPARK_ENDPOINT = "https://submit-form.com/JN4cUhwpN";

  

  function validate() {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (
      !formData.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address";
    }
    if (
      formData.phone &&
      !/^\+?[\d\s\-()]{7,15}$/.test(formData.phone.trim())
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

 const handleSubmit = async (e) => {
   e.preventDefault();
   setSubmitError(null);

   const validationErrors = validate();
   if (Object.keys(validationErrors).length > 0) {
     setErrors(validationErrors);
     return;
   }

   setIsSubmitting(true);

   try {
     const res = await fetch(FORMSPARK_ENDPOINT, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(formData),
      //  redirect: "manual", // Prevent automatic redirect following
     });

     // Treat 2xx and 3xx as success (some 3xx may be redirect)
     if (res.status >= 200 && res.status < 400) {
       setSubmitted(true);
       setFormData({ name: "", email: "", phone: "", message: "" });
     } else {
       setSubmitError("Failed to send message. Please try again later.");
     }
   } catch {
     setSubmitError("Network error. Please try again later.");
   } finally {
     setIsSubmitting(false);
   }
 };


  if (submitted) {
    return (
      <div className="container mx-auto p-8 max-w-md text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-700">
          Thank You!
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Your message has been sent successfully. We'll get back to you
          shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-8 max-w-md">
        {/* Page Header */}
        <header className="mb-10 mt-10 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg">
            Have questions or want to work together? Send us a message or chat
            live!
          </p>
        </header>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 text-black ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Your full name"
              required
            />
            {errors.name && (
              <p className="text-red-600 mt-1 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 text-black ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="you@example.com"
              required
            />
            {errors.email && (
              <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-1 font-medium text-gray-700"
            >
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 text-black ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="text-red-600 mt-1 text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 text-black ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Write your message here..."
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-600 mt-1 text-sm">{errors.message}</p>
            )}
          </div>

          {submitError && (
            <p className="text-red-600 font-semibold text-center">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Live Chat Button */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition flex items-center space-x-2"
        aria-label="Open live chat"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
        <span className="hidden sm:inline">Live Chat</span>
      </button>

      {/* Live Chat Modal */}
      {chatOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setChatOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setChatOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
              aria-label="Close live chat"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Live Chat</h2>
            <p className="mb-4 text-gray-700">
              This is a placeholder for a live chat widget. You can integrate
              your preferred chat service here (e.g., Intercom, Drift, Tawk.to).
            </p>
            <p className="text-gray-600 text-sm">
              For immediate assistance, call us at:{" "}
              <a href="tel:+15551234567" className="text-blue-600 underline">
                (336) 539-5573
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
