import React from "react";
import styles from "./PrivacyPolicy.module.css";
import { ArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Privacy_policy = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={handleBack} className={styles.backButton}>
          <ArrowLeft fontSize="small" />
          Privacy Policy
        </button>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Privacy Policy</h1>

        <div className={styles.section}>
          <p className={styles.paragraph}>
            Arete HealthTech Private Limited, a company incorporated under the
            Companies Act, 2013, with its registered office at 69, Anekant
            Place, 29 Rajpur Road, Dehradun, Uttarakhand – 248001, India
            ("Company" or "we" or "our" or "us"), owns and operates its websites
            and digital offerings, including any associated mobile applications
            and digital platforms (collectively referred to as the “Platforms”).
          </p>

          <p className={styles.paragraph}>
            This Privacy Policy is an electronic record prepared and published
            in accordance with the Information Technology Act, 2000, and the
            rules made thereunder, including the Information Technology
            (Reasonable Security Practices and Procedures and Sensitive Personal
            Data or Information) Rules, 2011, and other applicable regulations.
          </p>

          <p className={styles.paragraph}>
            This Privacy Policy sets out how we collect, use, store, share, and
            protect the personal and sensitive information of our users,
            including employees, contractors, vendors, business partners, their
            customers/patients, and visitors to our Platforms (collectively
            referred to as “Users” or “You” or “Your”).
          </p>

          <p className={styles.paragraph}>
            By accessing or using our Platforms and/or submitting your
            information to us, you agree that you have read, understood, and
            consented to the practices described in this Privacy Policy. If you
            do not agree with this Privacy Policy, please do not use the
            Platforms. If you are accessing the Platforms on behalf of another
            individual or entity, you represent that you are authorized to do so
            and to consent on their behalf.
          </p>

          <p className={styles.paragraph}>
            This document is generated electronically and does not require any
            digital or physical signatures.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          <p className={styles.paragraph}>
            We collect both personal and non-personal information as defined
            below:
          </p>

          <ul className={styles.list}>
            <li>
              Personal Information includes, but is not limited to: your name,
              contact number, email address, postal address, date of birth,
              gender, etc.
            </li>
            <li>
              Sensitive Personal Data or Information (SPDI) may include:
              passwords, financial information, health records, medical
              conditions, biometric information, etc., which are collected only
              with your explicit consent.
            </li>
            <li>
              Non-Personal Information includes demographic details, browser
              types, geolocation, IP address, device information, etc., which do
              not directly identify you.
            </li>
          </ul>

          <p className={styles.paragraph}>
            You may browse certain sections of our Platforms without providing
            any Personal Information. However, certain functionalities and
            services may require you to submit your information.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Use of Information</h2>
          <p className={styles.paragraph}>
            We may use your Personal Information and SPDI for purposes such as:
          </p>

          <ul className={styles.list}>
            <li>Facilitating your use of the Platforms</li>
            <li>Providing customer support and resolving issues</li>
            <li>Processing transactions and providing services</li>
            <li>Sending administrative and service-related communications</li>
            <li>Conducting internal research and analysis</li>
            <li>Ensuring compliance with legal obligations</li>
            <li>Protecting our rights and the security of our Platforms</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Cookies and Logs</h2>
          <p className={styles.paragraph}>
            Our Platforms use cookies and similar tracking technologies to
            enhance your experience. These cookies do not personally identify
            you but collect data about your device, browser, visit time, pages
            viewed, etc. You may choose to disable cookies via your browser
            settings; however, this may limit functionality on our Platforms.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Disclosure of Information</h2>
          <p className={styles.paragraph}>
            We may share your information with:
          </p>

          <ul className={styles.list}>
            <li>
              Clients or Partners: Based on your interactions with our Platforms
              and subject to your consent.
            </li>
            <li>
              Third-party service providers: For services such as hosting,
              payments, communication, analytics, and logistics, subject to
              strict confidentiality obligations.
            </li>
            <li>
              Legal or regulatory authorities: As mandated under applicable
              laws.
            </li>
          </ul>

          <p className={styles.paragraph}>
            We may also share anonymized or aggregated data for research,
            analytics, or marketing, which will not identify any individual.
          </p>

          <p className={styles.paragraph}>
            In the event of a merger, acquisition, or restructuring, your data
            may be transferred to another entity, which will adhere to this
            Privacy Policy.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Storage and Localization</h2>
          <p className={styles.paragraph}>
            Your information may be stored on secure servers in India or in
            other jurisdictions depending on business requirements and
            applicable legal permissions. We implement reasonable security
            measures to protect your data. However, no system is completely
            secure, and we disclaim liability for breaches caused by force
            majeure or third-party actions.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Retention</h2>
          <p className={styles.paragraph}>
            We retain your Personal Information and SPDI as long as necessary to
            provide our services and comply with legal obligations. On request,
            and where permissible, we may delete your data, excluding anonymized
            records and data retained for legal compliance.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Choices</h2>
          <ul className={styles.list}>
            <li>
              You can access, update, or delete your account information by
              emailing us at: ayushjain@aretehealth.tech
            </li>
            <li>
              You can unsubscribe from promotional communications or adjust
              cookie settings through your browser or device settings.
            </li>
            <li>
              For any grievances related to data privacy, contact our Grievance
              Officer (details below).
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Security Measures</h2>
          <p className={styles.paragraph}>
            We follow industry-standard practices to safeguard your data,
            including restricted access and encryption where applicable.
            However, internet-based transmissions carry inherent risks, and we
            cannot guarantee absolute security.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Policy Updates</h2>
          <p className={styles.paragraph}>
            We reserve the right to update this Privacy Policy at any time.
            Please review this document periodically for changes. Continued use
            of the Platforms after updates constitutes acceptance of the revised
            policy.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.paragraph}>
            If you have questions, concerns, or complaints regarding this
            Privacy Policy, you may contact:
          </p>

          <div className={styles.contactInfo}>
            <p>
              <strong>Grievance Officer:</strong>
            </p>
            <p>Arete HealthTech Private Limited</p>
            <p>69, Anekant Place, 29 Rajpur Road,</p>
            <p>Dehradun, Uttarakhand - 248001, India</p>
            <p> Phone: +91-9650496830</p>
            <p>Email: ayushjain@aretehealth.tech</p>
            <p>
              Working Hours: 9:30 AM to 6:30 PM, Monday to Friday (excluding
              public holidays)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy_policy;
