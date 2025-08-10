export default function Services() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        <div>
          <h3 className="text-xl font-bold">Website Audits</h3>
          <p>Identify performance, SEO, and usability issues.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">UX/UI Consulting</h3>
          <p>Improve user flow and visual appeal.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Custom Development</h3>
          <p>Get tailored solutions that meet your business goals.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">E-Commerce Strategy</h3>
          <p>Optimize your store for conversions and growth.</p>
        </div>
      </div>
    </div>
  );
}
