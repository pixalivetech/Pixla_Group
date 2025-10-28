import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Send to Admin
      await emailjs.sendForm(
        "service_0cp6x3q",    // service ID
        "template_ckgxssb",   // admin template ID
        form.current,
        "rJ1Wh7Z8mtYIaH7vc"   // public key
      );
      console.log("✅ Sent to Admin");

      // 2️⃣ Send auto-reply to User
      await emailjs.sendForm(
        "service_0cp6x3q",
        "template_s5k2746",
        form.current,
        "rJ1Wh7Z8mtYIaH7vc"
      );

      alert("✅ Message sent! Please check your email for confirmation.");
      form.current.reset();
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="bg-[#f2f2f2] min-h-screen px-6 md:px-24 py-16 text-gray-900">
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-8xl font-bold">Contact me</h1>
      </div>

      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto space-y-5">
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
  );
};

export default Contact;
