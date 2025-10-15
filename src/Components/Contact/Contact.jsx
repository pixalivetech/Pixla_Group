import React, { useRef, useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7xw033a", // Your Service ID
        "template_jvhatxf", // Your Template ID
        formRef.current,
        "nh2qo94N3RrII0ZPl" // Your Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          setSuccess("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED:", error.text);
          setSuccess(
            "Failed to send message. Make sure your Service ID and Public Key are correct."
          );
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-[#f2f2f2]">
      <div className="text-center bg-[#f2f2f2]">
        <h1 className="text-5xl md:text-8xl font-bold">Contact Me</h1>
      </div>

      <div className="min-h-screen bg-[#f2f2f2] px-6 md:px-24 py-16 flex flex-col justify-between text-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Info */}
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

          {/* Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-semibold">Name (required)</label>
                <div className="flex gap-3 mt-1">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
                    required
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
                    required
                  />
                </div>
              </div>

              <input
                type="email"
                name="user_email"
                placeholder="Email ID"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone No"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
                rows="3"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-6 py-2 mt-2 mb-2 hover:bg-gray-800 transition-all"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              {success && <p className="text-green-600 mt-2">{success}</p>}
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 text-base mt-12">
          <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-bold text-lg">contact@pixlagroup.com</p>
              <p className="text-base">Rajesekar Sundaresan CEO</p>
              <p className="text-gray-400">2025</p>
              <p className="text-sm mt-1">
                @2025 Template by{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Pixla Group
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-3">
              <p className="font-bold text-lg">(+91)8778584566</p>
              <p className="text-base">Say hello • Work with us</p>
              <div className="flex gap-5 text-xl">
                <a
                  href="https://wa.me/918778584566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/pixla_group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/pixla-gold-network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>

                <a href="#" className="text-xs hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
