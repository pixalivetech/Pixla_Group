import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://your-production-backend.com/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message || "✅ Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f2f2f2]">
      {/* Header */}
      <div className="text-center bg-[#f2f2f2]">
        <h1 className="text-5xl md:text-8xl font-bold">Contact me</h1>
      </div>

      {/* Main Container */}
      <div className="min-h-screen bg-[#f2f2f2] px-6 md:px-24 py-16 flex flex-col justify-between text-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Left Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">PixlaGroup</h3>
              <p className="text-base">2025</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Office hours</h3>
              <p className="text-base">Monday - Friday</p>
              <p className="text-base">09AM - 06PM</p>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name fields */}
            <div>
              <label className="text-sm font-semibold">Name (required)</label>
              <div className="flex gap-3 mt-1">
                <input
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
                />
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
                />
              </div>
            </div>

            {/* Email */}
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID"
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
            />

            {/* Phone */}
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No"
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
            />

            {/* Message */}
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
              rows="3"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-6 py-2 mt-2 mb-2 hover:bg-gray-800 transition-all"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
