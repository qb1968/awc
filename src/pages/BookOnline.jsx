export default function BookOnline() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">Book a Consultation</h2>
      <p className="text-gray-700 mb-4">
        Choose a time that works best for you, and we’ll reach out to confirm
        the details.
      </p>
      <form className="space-y-4 max-w-md">
        <input
          className="w-full border p-2"
          type="text"
          placeholder="Full Name"
          required
        />
        <input
          className="w-full border p-2"
          type="email"
          placeholder="Email Address"
          required
        />
        <input className="w-full border p-2" type="date" required />
        <input className="w-full border p-2" type="time" required />
        <button className="bg-green-600 text-white px-4 py-2">Book Now</button>
      </form>
    </div>
  );
}
