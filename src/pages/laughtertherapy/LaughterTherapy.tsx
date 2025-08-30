import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  referenceId: string;
}

const LaughterTherapy: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    referenceId: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/laughter-therapy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(
          "Your details have been submitted successfully! We'll verify your payment and email your ticket soon."
        );
        setFormData({ name: "", email: "", phone: "", referenceId: "" });
      } else {
        setError(data.message || "Something went wrong. Try again.");
      }
    } catch (err) {
      setError("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          Laughter Therapy Show 🎭
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Join us for a refreshing laughter therapy session! Book your ticket below.
        </p>

        {/* Event Details */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold text-indigo-700">Event Details</h2>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li><strong>Date:</strong> September 6, 2025</li>
            <li><strong>Time:</strong> 4:00 PM – 6:00 PM</li>
            <li><strong>Venue:</strong> Pokhara Theater,Gairapatan, Pokhara</li>
            <li><strong>Price:</strong> Rs. 300</li>
          </ul>
        </div>

        {/* Esewa QR */}
        <div className="text-center mb-6">
          <p className="mb-2 text-gray-700 font-medium">Scan the QR to Pay via eSewa</p>
          <img
            src="/esewa_qr.jpg" // <-- Add your QR image here in public/images
            alt="eSewa QR"
            className="mx-auto w-48 h-48 rounded-lg shadow-md border"
          />
          <p className="text-gray-500 mt-2 text-sm">
            After payment, enter your Payment ID below.
          </p>
        </div>

        {/* Form */}
        <form action="https://getform.io/f/akkpnlwa" method="POST" className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Reference ID/Transaction ID</label>
            <input
              type="text"
              name="referenceId"
              value={formData.referenceId}
              onChange={handleChange}
              placeholder="Enter your valid Reference ID generated during payment"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Messages */}
          {success && <p className="text-green-600 text-center">{success}</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit & Book Ticket"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LaughterTherapy;
