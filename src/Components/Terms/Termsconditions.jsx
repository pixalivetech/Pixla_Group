import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#f2f2f2] px-6 py-16 md:px-24 text-black">
      <div className="mx-autobg-[#f2f2f2]">
        
        {/* Header */}
        <header className="pb-6 mb-6 border-black">
          <h1 className="text-2xl sm:text-3xl font-bold">Terms & Conditions</h1>
          <p className="mt-1 text-sm">
            Pixla Group — Operated by Tripalive.Me Technology Pvt Ltd
          </p>
        </header>

        {/* Content */}
        <article className="text-sm leading-relaxed space-y-6">

          <section>
            <h2 className="font-bold mb-1">1. Ownership</h2>
            <p>
              This website, including all text, graphics, images, and other materials, 
              is owned and operated by Tripalive.Me Technology Pvt Ltd. All rights are reserved.
            </p>
          </section>

          <section>
            <h2 className="font-bold mb-1">2. Use of Website</h2>
            <p>
              By accessing or using this site, you agree to use it only for lawful purposes. 
              You may not copy, modify, distribute, or reproduce any part of this website 
              without prior written permission from Pixla Group or Tripalive.Me Technology Pvt Ltd.
            </p>
          </section>

          <section>
            <h2 className="font-bold mb-1">3. Information Accuracy</h2>
            <p>
              While we strive to ensure that the information provided is accurate and up to date, 
              Pixla Group makes no warranties or representations regarding its completeness, accuracy, or reliability. 
              Use of any information from this site is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-bold mb-1">4. Intellectual Property</h2>
            <p>
              All trademarks, logos, and content displayed on this site are the property of 
              Tripalive.Me Technology Pvt Ltd and its group entities. Any unauthorized use, 
              reproduction, or distribution of this content is strictly prohibited and may result in legal action.
            </p>
          </section>

          <section>
            <h2 className="font-bold mb-1">5. Third-Party Links</h2>
            <p>
              This website may contain links to external third-party websites. 
              Pixla Group does not endorse, control, or take responsibility for the content, privacy policies, 
              or practices of any third-party websites. Users are advised to review the respective terms 
              of such external sites before interacting with them.
            </p>
          </section>

          <section>
            <h2 className="font-bold mb-1">6. Limitation of Liability</h2>
            <p>
              Pixla Group will not be liable for any direct, indirect, incidental, consequential, 
              or punitive damages arising from your access to, or use of, this website. 
              This includes damages due to errors, interruptions, data loss, or unauthorized access to user information.
            </p>
          </section>

          <section>
            <h2 className="font-bold mb-1">7. Modification of Terms</h2>
            <p>
              Pixla Group reserves the right to update or modify these Terms & Conditions at any time, 
              without prior notice. Your continued use of the website constitutes acceptance of the updated terms. 
              Users are encouraged to review this page periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="font-bold mb-1">8. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by and construed in accordance with the laws of India. 
              Any disputes arising from these terms or your use of this website will be subject to the exclusive 
              jurisdiction of the courts in Bangalore, Karnataka.
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
