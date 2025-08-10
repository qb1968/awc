import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSubmitted(false);

    try {
      const response = await fetch("https://submit-form.com/JN4cUhwpN", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorText = await response.text();
        setErrorMsg("Submission failed. Please try again.");
        console.error("Submit error:", errorText);
      }
    } catch (error) {
      setErrorMsg("Network error. Please try again.");
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 mt-10 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
            Get in Touch
          </h1>
          <p className="text-blue-700 text-lg">
            Have questions or want to work together? Send us a message or chat
            live!
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl shadow-lg text-black"
            noValidate
          >
            {submitted && (
              <div className="bg-green-100 text-green-700 p-4 rounded text-center font-semibold">
                Thank you! Your message has been sent.
              </div>
            )}

            {errorMsg && (
              <div className="bg-red-100 text-red-700 p-4 rounded text-center font-semibold">
                {errorMsg}
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="flex items-center gap-2 font-medium text-gray-700 mb-1"
              >
                <FaUser /> Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                disabled={loading}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="flex items-center gap-2 font-medium text-gray-700 mb-1"
              >
                <FaEnvelope /> Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                disabled={loading}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="flex items-center gap-2 font-medium text-gray-700 mb-1"
              >
                <FaPhone /> Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                // phone is optional, so no required here
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                disabled={loading}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="flex items-center gap-2 font-medium text-gray-700 mb-1"
              >
                <FaComment /> Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`bg-black text-white px-6 py-2 rounded-lg transition-all w-full font-semibold ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="space-y-10 text-gray-300 text-lg">
            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-blue-700">
                <FaPhoneAlt /> Phone
              </h2>
              <p className="text-cyan-500">(336) 539-5573</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-blue-700">
                <FaEnvelope /> Email
              </h2>
              <p className="text-cyan-500">allwebcon@gmail.com</p>
            </div>
          </div>
        </div>

        {/* <button
          onClick={() => setChatOpen(true)}
          className=" mt-20 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition flex items-center space-x-2"
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
        </button> */}

        {/* Live Chat Modal
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
              <h2 className="text-2xl font-bold mb-4 text-blue-700">
                Live Chat
              </h2>
              <p className="mb-4 text-gray-700">
                This is a placeholder for a live chat widget. You can integrate
                your preferred chat service here (e.g., Intercom, Drift,
                Tawk.to).
              </p>
              <p className="text-gray-600 text-sm">
                For immediate assistance, call us at:{" "}
                <a href="tel:+15551234567" className="text-blue-600 underline">
                  (336) 539-5573
                </a>
              </p>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
}
