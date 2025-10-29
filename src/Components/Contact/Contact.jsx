import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0cp6x3q", // Your Service ID
        "template_ckgxssb", // Admin template
        form.current,
        "rJ1Wh7Z8mtYIaH7vc" // Public key
      )
      .then(() => {
        console.log("✅ Sent to Admin");

        return emailjs.sendForm(
          "service_0cp6x3q",
          "template_s5k2746", // User auto-reply template
          form.current,
          "rJ1Wh7Z8mtYIaH7vc"
        );
      })
      .then(() => {
        alert("✅ Message sent successfully! Check your email for confirmation.");
        form.current.reset();
      })
      .catch((error) => {
        console.error("❌ Error:", error.text);
        alert("❌ Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="bg-[#f2f2f2]">
      <div className="text-center bg-[#f2f2f2]">
        <h1 className="text-5xl md:text-8xl font-bold">Contact me</h1>
      </div>

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
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="text-sm font-semibold">Name (required)</label>
              <div className="flex gap-3 mt-1">
                <input
                  name="first_name"
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
                />
                <input
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
                />
              </div>
            </div>

            <input
              name="email"
              type="email"
              required
              placeholder="Email ID"
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone No"
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
            />

            <textarea
              name="message"
              required
              placeholder="Message"
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
              rows="3"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 mt-2 mb-2 hover:bg-gray-800 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
