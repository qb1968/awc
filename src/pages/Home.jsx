import heroImage from "../assets/me.avif";
import { useState } from "react";

export default function Home() {
  const [modalService, setModalService] = useState(null);

  const services = [
    {
      title: "Responsive Web Design",
      modalTitle: "Mobile - First Website Development",
      modalDesc:
        "Allison Web Consultants specializes in creating mobile-first websites that are both visually stunning and functionally effective. Our team is dedicated to providing comprehensive web development services, including user-friendly design, seamless navigation, and optimal performance across all devices. We prioritize client satisfaction and tailor our services to meet your specific business needs and goals.",
      desc: "Crafting visually stunning and user-friendly websites that work seamlessly across all devices.",
      details:
        "Detailed info about Responsive Web Design. We create websites that look great on any device.",
    },
    {
      title: "E-Commerce Solutions",
      modalTitle: "Custom Online Store Development",
      modalDesc:
        "We create custom online store solutions designed to deliver a seamless and engaging shopping experience from browsing to checkout. Our platforms are tailored to your brand, optimized for speed, mobile-friendly, and equipped with secure payment processing. With intuitive navigation, personalized product recommendations, and integrated inventory management, we ensure your customers enjoy a smooth, hassle-free journey—driving higher conversions and long-term loyalty.",
      desc: "Custom online store solutions for seamless shopping experiences.",
      details:
        "Detailed info about E-Commerce Solutions. Build a seamless and efficient online store.",
    },
    {
      title: "SEO & Digital Marketing",
      modalTitle: "Boost Your Online Presence",
      modalDesc:
        "Boost your online visibility and attract the right audience with strategies designed to put your brand in front of the people who matter most. Through targeted marketing, optimized content, and data-driven campaigns, we help you reach potential customers, increase engagement, and turn interest into measurable growth.",
      desc: "Boost your visibility and attract the right audience.",
      details:
        "Detailed info about SEO & Digital Marketing. Improve your search rankings and grow your business.",
    },
    {
      title: "Website Maintenance",
      modalTitle: "Ongoing Website Support",
      modalDesc:
        "Keep your website running at peak performance with our ongoing support services. From regular updates and security monitoring to troubleshooting and performance optimization, we ensure your site stays secure, fast, and fully functional—so you can focus on growing your business while we handle the technical details.",
      desc: "Keep your site running smoothly with ongoing support.",
      details:
        "Detailed info about Website Maintenance. Keep your website updated and secure.",
    },
    {
      title: "Custom Development",
      modalTitle: "Tailored Web Applications",
      modalDesc:
        "We design and develop tailored web applications built specifically to meet your unique business goals. From streamlined workflows and custom integrations to intuitive user interfaces and robust security, our solutions are crafted to improve efficiency, enhance user experience, and support your long-term growth.",
      desc: "Tailored web applications to meet your business goals.",
      details:
        "Detailed info about Custom Development. Custom web apps built specifically for your needs.",
    },
    {
      title: "Consulting Services",
      modalTitle: "Expert Digital Consulting",
      modalDesc:
        "Gain expert guidance to shape and refine your digital strategy. We provide in-depth analysis, actionable insights, and tailored recommendations to help you make informed decisions, maximize your online potential, and stay ahead in an ever-changing digital landscape.",
      desc: "Expert advice to guide your digital strategy.",
      details:
        "Detailed info about Consulting Services. Get expert advice on your digital projects.",
    },
  ];

  function closeModal() {
    setModalService(null);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg mb-6 text-white">
              Elevate Your <br />
              <span className="text-blue-500">Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional web solutions crafted to bring your ideas to life and
              grow your business online.
            </p>
            <a
              href="/book-online"
              className="inline-block bg-blue-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-cyan-500 hover:shadow-cyan-500 transition"
            >
              Book a Free Consultation
            </a>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative max-w-md mx-auto">
            {/* Decorative Glow */}
            <div
              className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500 rounded-full opacity-20 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <img
              src={heroImage}
              alt="Mark Allison - Web Consultant"
              className="relative rounded-xl shadow-2xl object-cover w-full h-auto"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-5 left-5 bg-gray-800/90 backdrop-blur-sm rounded-md px-4 py-2 text-blue-400 shadow-md max-w-[70%]">
              <h2 className="font-semibold text-lg">MARK ALLISON</h2>
              <p className="text-sm">Owner / Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-6 py-16 text-center animate-slide-up">
        <div className="bg-gray-800 rounded-2xl shadow-xl border border-cyan-600 max-w-3xl mx-auto p-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-cyan-400">
            Expert Website Development Services
          </h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Allison Web Consultants is dedicated to delivering top-notch website
            development. We specialize in mobile-first design and personalized
            business solutions. Let's bring your vision to life.
          </p>
          <a
            href="/why-choose-us"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-cyan-400">
            Our Services
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
            At Allison Web Consultants, we offer a wide range of website
            development services tailored to your requirements. From responsive
            web design to e-commerce solutions, we've got you covered.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl shadow-lg border border-cyan-700 hover:shadow-2xl hover:border-cyan-400 transition duration-300 p-6 flex flex-col justify-between text-left hover:scale-[1.02]"
              >
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.details}</p>
                </div>
                <button
                  onClick={() => setModalService(service)}
                  className="text-cyan-400 font-medium hover:underline text-left"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 rounded-lg max-w-lg w-full p-6 relative text-gray-100"
            onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white font-bold text-3xl"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              {modalService.modalTitle}
            </h3>
            <p className="mb-4 text-gray-300">{modalService.modalDesc}</p>
          </div>
        </div>
      )}

      {/* Clients Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-cyan-400">
            Our Clients
          </h2>
          <p className="mb-10 text-gray-400 max-w-xl mx-auto">
            See our work in action. Explore a few clients who trusted us with
            their web presence.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
            {[
              {
                src: "/clients/Ts.PNG",
                url: "https://www.twistedsistershair.com/",
                alt: "Client 1",
              },
              {
                src: "/clients/external-file_edited.jpg",
                url: "",
                alt: "Client 2",
              },
              {
                src: "/clients/pig1024-2 (1).png",
                url: "http://ncbbqhof.com",
                alt: "Client 3",
              },
              {
                src: "/clients/4.png",
                url: "https://www.ecpt-cb.com/",
                alt: "Client 4",
              },
              {
                src: "/clients/Logo Picture.webp",
                url: "",
                alt: "Client 5",
              },
              {
                src: "/clients/RST (1).png",
                url: "http://thereidsvilleshowcase.com",
                alt: "Client 6",
              },
              {
                src: "/clients/LST (1).png",
                url: "http://thelibertyshowcase.com",
                alt: "Client 7",
              },
              {
                src: "/clients/layers.jpeg",
                url: "http://layersbymichelle.com",
                alt: "Client 8",
              },
            ].map(({ src, url, alt }, index) =>
              url ? (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto block h-40 rounded-lg shadow-lg border border-gray-700 transition-transform duration-500 hover:scale-105 hover:shadow-cyan-500 hover:border-cyan-400"
                  aria-label={`Visit ${alt}`}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="h-full w-auto object-contain rounded-lg"
                  />
                </a>
              ) : (
                <div
                  key={index}
                  className="mx-auto h-40 rounded-lg shadow-lg border border-gray-700 transition-transform duration-500 hover:scale-105 hover:shadow-cyan-500 hover:border-cyan-400"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="h-full w-auto object-contain rounded-lg"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-cyan-400">
            What Our Clients Say
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "We have worked with Mark for two of our businesses and he has been great. He goes above and beyond to make sure all of our needs and concerns are met. We are beyond grateful to have him for our website, it has taken a weight off of our shoulders to be able to have him manage it when needed and answer any of our questions or concerns at any time of the day! I will always recommend him for any web needs!",
                name: "Amy Kernodle",
                role: "Liberty Showcase Theater/Reidsville Showcase Theater",
              },
              {
                quote:
                  "I can’t tell you how much I enjoyed having Mark design my web page. He is delightful and dedicated and very easy to work with. My page looks amazing and I couldn’t be more satisfied! I would highly recommend Allison Web Consultants for your needs.",
                name: "Michelle Fleming",
                role: "Owner, Layers LLC",
              },
              {
                quote:
                  "Mark is extremely easy to work with ! He has boosted our business in so many ways than one . He actually can make it possible to bring more business through the website he helps you create . It’s so easy and such a weight off of a business owners shoulders to be able to trust in their website manager ! Mark is also known to bring a welcoming smile and a box of our favorite doughnuts to make the work day better and brighter . TWISTED SISTERS SALON proudly gives this company 5 stars !!",
                name: "Samantha Sykes",
                role: "Owner, Twisted Sisters Salon",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-xl p-6 shadow-lg border-2 border-cyan-600 hover:border-cyan-400 hover:shadow-cyan-500 transition duration-300"
              >
                <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
                <div className="font-bold text-blue-400">{t.name}</div>
                <div className="text-sm text-gray-400">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <a
        href="/contact-us"
        className="fixed bottom-8 left-3 z-50 bg-blue-500 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-cyan-500 transition-all duration-300 px-5 py-3 font-semibold flex items-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8a2 2 0 01-2 2H7l-4 4V6a2 2 0 012-2h14a2 2 0 012 2z"
          />
        </svg>
        Contact Us
      </a>
    </>
  );
}
