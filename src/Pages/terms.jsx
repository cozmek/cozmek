import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Terms and Conditions
      </h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our website. By accessing and using this website, you accept and agree to be bound by the terms and conditions described here.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            2. Use License
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            3. Disclaimer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            4. Limitations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            5. Revisions and Errata
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            6. Links
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            7. Modifications
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            8. Governing Law
          </h2>
          <p className="text-gray-600 leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <div className="text-sm text-gray-500 mt-8 pt-4 border-t border-gray-200">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Terms;
