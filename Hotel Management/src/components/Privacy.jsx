import React from 'react';
import '../Assetts/Privacy.css'; 

const Privacy = () => {
  return (
    <div className="Pri">
      <div className="privacy-policy">
        <h2>Privacy Policy for Hotel Management System</h2>
        <div className="policy-content">
          <section>
            <h3>Information Collection and Use:</h3>
            <p>
              We collect personal information to provide our services, including names, contact details, payment information, stay preferences, etc.
              Our aim is to ensure a personalized and efficient experience for all our users.
            </p>
          </section>

          <section>
            <h3>Use of Information:</h3>
            <p>
              The information collected is used to process reservations, improve our offerings, communicate with users about bookings, and provide personalized services.
              Additionally, we analyze this data to enhance our services and tailor them to better suit our customers' needs.
            </p>
          </section>

          <section>
            <h3>Data Security:</h3>
            <p>
              We take appropriate measures to secure the data collected, including encryption, access controls, and regular security assessments.
              Our priority is to safeguard our users' information and ensure its confidentiality.
            </p>
          </section>

          <section>
            <h3>Cookie Policy:</h3>
            <p>
              We may use cookies to enhance user experience and track usage patterns.
              Users can control cookies through their browser settings and may choose to opt-out if desired.
            </p>
          </section>

          <section>
            <h3>Contact Us:</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us .
              Your feedback is valuable in helping us improve our services and policies.
            </p>
            <p>
              By using our hotel management system, you agree to the terms outlined in this Privacy Policy.
              We appreciate your trust in us and assure you of our commitment to protecting your privacy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
