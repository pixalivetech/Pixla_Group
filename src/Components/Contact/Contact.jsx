import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between text-gray-900">
      <div className="text-center py-10">
        <h1 className="text-8xl md:text-8xl font-bold">Contact me</h1>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-8">
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
        <div>
          <form className="space-y-5">
            <div>
              <label className="text-sm font-semibold">Name (required)</label>
              <div className="flex gap-3 mt-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
                />
              </div>
            </div>

            <input
              type="email"
              placeholder="Email ID"
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
            />
            <input
              type="tel"
              placeholder="Phone No"
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
            />
            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-base"
              rows="3"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 mt-2 hover:bg-gray-800 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <footer className="border-t border-gray-200 py-8 text-base">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
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
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/"
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
  );
};

export default Contact;
