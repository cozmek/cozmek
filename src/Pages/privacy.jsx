import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            1. Information We Collect
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <h3 className="font-medium text-gray-700">Personal Information</h3>
            <p>
              We may collect personal information that you provide directly to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and payment information</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-600">
            <li>Provide, maintain, and improve our services</li>
            <li>Process your transactions</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Communicate with you about products, services, and events</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            3. Information Sharing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate security measures to maintain the safety of your personal information. However, no Internet transmission is ever completely secure or error-free. You should take special care in deciding what information you send to us electronically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            5. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            6. Third-Party Links
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            7. Children's Privacy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            8. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            9. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-2 text-gray-600">
            <p>Email: Thanveerul Islam </p>
            <p>Phone: +91 75107 47180</p>
            <p>Address: Ernakulam, Kerala, India</p>
          </div>
        </section>

        <div className="text-sm text-gray-500 mt-8 pt-4 border-t border-gray-200">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
