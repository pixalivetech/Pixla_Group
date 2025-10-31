import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f6f6f6] px-6 py-16 md:px-24 text-black">
      <div className="mx-auto bg-[#f6f6f6]">
        
        {/* Header */}
        <header className="pb-6 mb-6 border-black">
          <h1 className="text-2xl sm:text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-1 text-sm">
            Pixla Group — Operated by Tripalive.Me Technology Pvt Ltd
          </p>
        </header>

        {/* Content */}
        <article className="text-sm leading-relaxed space-y-6">

          <section>
            <h2 className="font-bold mb-1">1. Information We Collect</h2>
            <p>
              We may collect the following information when you interact with our website:
            </p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Personal details such as your name, email address, and contact number (when you contact us or fill out forms).</li>
              <li>Technical information such as your IP address, browser type, and device details for analytics and website improvement.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold mb-1">2. How We Use Your Information</h2>
            <p>
              Your data may be used to:
            </p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Respond to inquiries and provide requested information.</li>
              <li>Improve our website’s functionality, performance, and user experience.</li>
              <li>Send updates or promotional messages (only with your consent).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold mb-1">3. Data Protection</h2>
            <p>
              We implement reasonable security measures such as secure servers and SSL encryption 
              to protect your personal data from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="font-bold mb-1">4. Data Sharing</h2>
            <p>
              We do not sell, rent, or trade personal information. Data may only be shared with:
            </p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Trusted partners assisting in website operations or services.</li>
              <li>Authorities when required by law or legal process.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold mb-1">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience, analyze site performance, 
              and personalize content. You may disable cookies through your browser settings if preferred.
            </p>
          </section>

          <section>
            <h2 className="font-bold mb-1">6. External Links</h2>
            <p>
              This website may contain links to third-party websites. We are not responsible for 
              the content, security, or privacy practices of external sites. Users are encouraged 
              to review the privacy policies of those websites before sharing any information.
            </p>
          </section>

          <section>
            <h2 className="font-bold mb-1">7. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted 
              on this page with the revised effective date. Users are advised to review this 
              page periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section>
            <h2 className="font-bold mb-1">8. Contact Us</h2>
            <p>
              For questions or concerns regarding this Privacy Policy, you may reach us at:
              <br />
              📧 <a href="mailto:info@pixlagroup.com" className="underline">info@pixlagroup.com</a>
            </p>
          </section>

          {/* Footer */}
          <footer className="pt-6 mt-6 border-t border-black text-xs">
            <p>
              Copyright © 2025 Pixla Group. All Rights Reserved.
              <br />
              Operated by Tripalive.Me Technology Pvt Ltd, Bangalore, India.
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}
