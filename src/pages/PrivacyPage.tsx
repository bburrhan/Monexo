import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Shield } from 'lucide-react';

interface PrivacyPageProps {
  language: string;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ language }) => {
  const isRTL = language === 'ur' || language === 'ar';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.title = 'Privacy Policy - Monexo';

    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('config', 'G-KQQWE47RHF', {
        page_title: 'Privacy Policy - Monexo',
        page_location: window.location.href,
        page_path: `/${language}/privacy`
      });
    }
  }, [language, isRTL]);

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : ''}`}>
      <SEOHead language={language} subPath="privacy" />
      <Helmet>
        <meta property="og:title" content="Monexo Privacy Policy" />
        <meta property="og:description" content="Learn how we collect, use, and protect your data. Read our commitment to transparency and trust." />
        <meta property="og:url" content={`https://monexo.ai/${language}/privacy`} />
        <meta property="og:image" content="https://res.cloudinary.com/drr0qosem/image/upload/v1765550071/Screenshot_2025-12-12_at_17.30.13_r1jdo5.png" />
      </Helmet>
      <Header language={language} />

      <main className="pt-16">
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-4">
              <Shield size={32} className="text-brand-secondary mr-3" />
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Privacy Policy
              </h1>
            </div>
            <p className="text-center text-gray-500 text-sm">
              Monexo OÜ &mdash; Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551, Estonia
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">

              <p className="mb-6">
                As Monexo OÜ, a corporation incorporated and validly operating in Estonia and having the registered address of Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551 (hereinafter referred to as <strong>"Monexo"</strong>, the <strong>"Company"</strong>, <strong>"We"</strong>, and through similar words such as "us", "our", etc.), we respect your privacy. We provide services under the name of Monexo, which can be accessed directly by Customers (<strong>"Customers"</strong>, <strong>"you"</strong> or <strong>"your"</strong>) through WhatsApp communication, without any dedicated website or mobile application.
              </p>

              <p className="mb-6">
                This Global Privacy Policy (the <strong>"Policy"</strong>) describes Monexo's practices and policies with regards to use and process of personal information while providing the services thereunder (the <strong>"Service"</strong>). In this regard, this Policy describes the types of personal information we collect through our services, how we use that information, our legal basis for doing so, with whom we share it, your rights and choices in this regard, and how you can contact us about our privacy practices. This Policy does not apply to third-party sites, products, or services, even if they link to our services, and you should consider privacy practices of those third-parties carefully.
              </p>

              <p className="mb-6">
                Capitalized words not defined under this Policy shall be understood as described under our Terms of Use (the <strong>"Terms"</strong>).
              </p>

              <p className="mb-10">
                By accepting this Policy, you are familiarized yourself with this Policy, understood and are agreeing with the terms and practices described in this Policy (including new versions of the Policy when and as they come into effect), and the Terms, which governs this Policy and contains all disclaimers of warranties and limitation of liabilities.
              </p>

              <SectionHeading number="1" title="DEFINITIONS" />

              <p className="mb-4">Within the scope of this Policy, following terms shall have the meanings ascribed to them below:</p>

              <div className="mb-10 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    <DefinitionRow
                      term="Company"
                      definition={
                        <>
                          Monexo OÜ, a corporation incorporated and validly operating in Estonia and having the registered address of Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551.
                          <br /><br />
                          <em><strong>For the purposes of the GDPR</strong>, the Company is the Data Controller</em>
                        </>
                      }
                    />
                    <DefinitionRow
                      term="Data Controller"
                      definition={
                        <em>For the purposes of the GDPR, the Company acts as the data controller, as it is the legal person which, alone or jointly with others, determines the purposes and means of the processing of Personal Data.</em>
                      }
                    />
                    <DefinitionRow
                      term="Data Subject"
                      definition={<em>A natural person who can be identified or rendered identifiable through the personal data related to them.</em>}
                    />
                    <DefinitionRow
                      term="Device"
                      definition={<em>Any device that is suitable to access the Service such as a computer, a mobile phone or a digital tablet.</em>}
                    />
                    <DefinitionRow
                      term="GDPR"
                      definition={<em>The General Data Protection Regulation (Regulation (EU) 2016/679), a directly applicable European Union regulation which governs the processing of personal data and the free movement of such data within the European Economic Area.</em>}
                    />
                    <DefinitionRow
                      term="Personal Data"
                      definition={
                        <>
                          <em>Any information that relates to an identified or identifiable individual.</em>
                          <br /><br />
                          <em><strong>For the purposes of the GDPR</strong>, Personal Data means any information relating to an identified or identifiable natural person ('data subject'); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</em>
                        </>
                      }
                    />
                    <DefinitionRow
                      term="Services"
                      definition={<em>For the purposes of this Privacy Policy, "Services" refers to all services provided by Monexo to Customers through WhatsApp communication, including but not limited to information sharing, support, guidance, and any other interactions or activities initiated by Customers with Monexo via WhatsApp.</em>}
                    />
                    <DefinitionRow
                      term="Service Provider"
                      definition={
                        <>
                          <em>Any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the service, to provide the service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the service is used.</em>
                          <br /><br />
                          <em><strong>For the purposes of the GDPR</strong>, Service Providers are considered Data Processors.</em>
                        </>
                      }
                    />
                    <DefinitionRow
                      term="Usage Data"
                      definition={<em>Data collected automatically, either generated by the use of the service or from the service infrastructure itself (for example, duration of a page visit).</em>}
                    />
                    <DefinitionRow
                      term="Customer"
                      definition={
                        <>
                          <em>The individual using the Services, or the company, or other legal entity on behalf of which such individual is accessing or using the Services, as applicable.</em>
                          <br /><br />
                          <em>The Customer may be referred to as "you" in this Policy.</em>
                          <br /><br />
                          <em><strong>For the purposes of the GDPR</strong>, the Customer can be referred to as the Data Subject.</em>
                        </>
                      }
                      isLast
                    />
                  </tbody>
                </table>
              </div>

              <SectionHeading number="2" title="OVERVIEW" />

              <p className="mb-4">If you access or interact with our Services, we may collect certain Personal Data relating to you. This may occur in the following circumstances:</p>

              <ul className="mb-6 space-y-3 list-none pl-0">
                <BulletItem>
                  <strong>When you contact us via WhatsApp:</strong> If you reach out to Monexo on WhatsApp regarding money transfer services or any other inquiries, we may collect your name, phone number, messages exchanged, and any other information you voluntarily provide.
                </BulletItem>
                <BulletItem>
                  <strong>When you provide transfer information:</strong> To facilitate transfers, we may collect details such as the recipient's name, bank account information, transfer amount, currency, and other information necessary to process the transaction.
                </BulletItem>
                <BulletItem>
                  <strong>When you use our Services:</strong> We may collect information regarding your interactions with our Services through WhatsApp, including messages, instructions, and any other content you provide.
                </BulletItem>
              </ul>

              <SectionHeading number="3" title="APPLICABILITY OF THE POLICY" />

              <SubHeading title="Monexo Services and Platform Use" />

              <p className="mb-4">This Policy explains how we process your personal information when you interact with Monexo, communicate with our team via WhatsApp, or use our Services in any capacity. It applies to personal information collected during your relationship with us, including your communication on WhatsApp, provision of transfer details, and any other interaction necessary to facilitate our money transfer services for migrant workers in GCC countries.</p>

              <p className="mb-4">Monexo may also prepare separate privacy notices for specific groups such as employees, service providers, or business partners. These notices will be made available to the relevant groups when necessary.</p>

              <p className="mb-4">Where applicable, we will inform you whether the provision of personal data is mandatory and the potential consequences of not providing such information. If you choose not to provide certain personal information, you may not be able to access some functionalities of our Services, including completing money transfers.</p>

              <p className="mb-4">Your ability to use Monexo's Services depends on the accuracy and completeness of the information you provide, particularly regarding your identity and transfer details. We rely on this information to deliver our services securely and efficiently.</p>

              <p className="mb-6">This Policy does not apply to third-party services or platforms that you may use independently of Monexo, such as external financial institutions or communication tools not operated by Monexo. Please refer to their respective privacy policies for more details.</p>

              <SubHeading title="Data Sharing and Consent" />

              <p className="mb-10">If you are uncomfortable with the ways your data may be processed—including data recorded on blockchain or data shared to receive rewards—we advise you not to use the Services or its data monetization functionalities. Your use of the Services signifies your understanding of and agreement with the processing activities described in this Policy.</p>

              <SectionHeading number="4" title="TYPES OF DATA WE COLLECT" />

              <SubHeading title="a. Personal Data that We Collect from You" />

              <p className="mb-4">While using our Services, you may provide us with certain personally identifiable information, which may include your first and last name, phone number, and financial information. This occurs in contexts such as:</p>

              <ul className="mb-4 space-y-2 list-none pl-0">
                <BulletItem>When you use WhatsApp-native transfers to send or receive money,</BulletItem>
                <BulletItem>When you initiate onboarding and complete identity verification (KYC) through the chat.</BulletItem>
              </ul>

              <p className="mb-6">You may also choose to engage with us via our social media accounts or third-party integrations where applicable, in which case your interactions and shared data may be processed as part of our engagement analysis.</p>

              <SubHeading title="b. Information Collected During Customer Onboarding" />

              <p className="mb-4">As part of the onboarding process for participating in the Monexo ecosystem, we may request information such as:</p>

              <ul className="mb-10 space-y-3 list-none pl-0">
                <BulletItem>Identification details such as your full name, date of birth, nationality, government-issued identification documents, and biometric verification where applicable, for the purposes of identity verification;</BulletItem>
                <BulletItem>Contact information including your phone number (used for WhatsApp-native transfers and communications), e-mail address, and preferred language of communication;</BulletItem>
                <BulletItem>Residency and remittance corridor information such as your country of residence, sending and receiving jurisdictions, and intended transfer corridors, to ensure compliance with applicable regulatory frameworks;</BulletItem>
                <BulletItem>Financial and payout details such as linked bank accounts, payout partner details, transfer purpose, typical amounts, frequency, and recipient details, to facilitate the processing and settlement of transactions.</BulletItem>
              </ul>

              <p className="mb-10">We do not guarantee that all of the Third Parties we work with will honor the elections you make using those options, but we strive to work with Third Parties that do.</p>

              <SectionHeading number="5" title="HOW WE USE PERSONAL DATA" />

              <SubHeading title="a. Our Services" />

              <p className="mb-4">We rely on several legal bases to ensure that the processing of your Personal Data is lawful, fair, and transparent, as required under the General Data Protection Regulation (GDPR). These include the performance of a contract, your explicit consent, compliance with legal obligations, and our legitimate business interests.</p>

              <SubHeading title="Contractual and Pre-contractual Relationships:" small />

              <p className="mb-4">We process your Personal Data to register your participation in the Monexo ecosystem, enable you to use our Services via WhatsApp, and ensure proper performance of the Customer agreement. These include:</p>

              <ul className="mb-6 space-y-3 list-none pl-0">
                <BulletItem>Collecting and verifying identity documents during the onboarding process (KYC) to comply with anti-money laundering and counter-terrorist financing requirements.</BulletItem>
                <BulletItem>Processing payment instructions and transfer details, including sender and recipient names, contact information, transfer amount, and payout destination.</BulletItem>
                <BulletItem>Providing customer support, transaction notifications, and security confirmations to ensure smooth and reliable service delivery.</BulletItem>
              </ul>

              <SubHeading title="Service Analytics and Improvements:" small />

              <p className="mb-4">We use technical and usage data to analyze how Customers interact with Monexo's WhatsApp-native Services. These include:</p>

              <ul className="mb-6 space-y-3 list-none pl-0">
                <BulletItem>Monitoring onboarding flows to improve usability and reduce friction.</BulletItem>
                <BulletItem>Enhancing the reliability and speed of settlement and payout processes.</BulletItem>
                <BulletItem>Personalizing communication based on language preferences and Customer needs.</BulletItem>
                <BulletItem>Analyzing transaction trends (e.g., typical transfer amounts, corridors, and frequency) to improve fraud detection and system performance.</BulletItem>
              </ul>

              <SubHeading title="Compliance with Legal Obligations:" small />

              <p className="mb-4">We may process your data to comply with regulatory obligations, including:</p>

              <ul className="mb-6 space-y-3 list-none pl-0">
                <BulletItem>Performing AML and CTF checks, including transaction monitoring and reporting obligations.</BulletItem>
                <BulletItem>Maintaining accurate accounting and tax records.</BulletItem>
                <BulletItem>Responding to lawful requests by regulators, supervisory authorities, or law enforcement agencies.</BulletItem>
              </ul>

              <SubHeading title="Legitimate Business Interests:" small />

              <p className="mb-4">We process certain Personal Data under the basis of legitimate interests, such as:</p>

              <ul className="mb-6 space-y-3 list-none pl-0">
                <BulletItem>Detecting, preventing, and investigating fraud, misuse, or suspicious activity.</BulletItem>
                <BulletItem>Ensuring the security and integrity of our systems and protecting Customer data from unauthorized access.</BulletItem>
                <BulletItem>Developing anonymized statistics and market insights to improve service design and adoption.</BulletItem>
                <BulletItem>Facilitating settlement and payout operations with our banking and financial partners.</BulletItem>
              </ul>

              <p className="mb-4">In all cases, we carefully balance our legitimate interests with your privacy rights, and we apply additional safeguards (such as pseudonymization or access controls) where required.</p>

              <p className="mb-6">If we need to use your Personal Data for a new purpose that is not compatible with the ones described here, we will inform you and, where required, request your consent in advance.</p>

              <SubHeading title="b. Marketing and Communications" />

              <p className="mb-4">With your explicit consent, we may send you communications regarding:</p>

              <ul className="mb-4 space-y-3 list-none pl-0">
                <BulletItem>New Monexo features, transfer options, and payout partnerships.</BulletItem>
                <BulletItem>Educational content on safe money transfers and compliance practices.</BulletItem>
                <BulletItem>Promotional campaigns, Customer surveys, or product testing opportunities aimed at improving our Services.</BulletItem>
              </ul>

              <p className="mb-10">You can opt out of receiving these emails at any time by clicking the "unsubscribe" link included in each message or by contacting us via the information provided in the "Contact Us" section below.</p>

              <SectionHeading number="6" title="HOW WE SHARE PERSONAL DATA" />

              <p className="mb-4">Monexo may share your Personal Data to <strong>(i)</strong> satisfy any applicable law, regulation, legal process, or governmental request; <strong>(ii)</strong> enforce this Policy and our Terms, including investigation of potential violations hereof; <strong>(iii)</strong> detect, prevent, or otherwise address fraud, security, or technical issues; <strong>(iv)</strong> respond to your requests; or <strong>(v)</strong> protect our rights, property or safety, our Customers and the public.</p>

              <p className="mb-4">We share Personal Data with a limited number of our Service Providers. We have Service Providers that provide services on our behalf, such as website hosting, information technology and related infrastructure. These Service Providers may need to access Personal Data to perform their services properly. We authorize such Service Providers to use or disclose the Personal Data only as necessary to perform services on our behalf or comply with legal requirements. We require such Service Providers to contractually commit to protecting security and confidentiality of the Personal Data they process on our behalf. Our Service Providers are predominantly located in European countries.</p>

              <p className="mb-4">We will encourage our service partners to adopt and post transparent privacy policies. However, use of your personal information by our service partners is governed by their privacy policies and is not under our control. You acknowledge that we are not responsible for the violations caused by our service partners.</p>

              <p className="mb-4">We share Personal Data with third-party business partners when this is necessary to provide our services to our Customers.</p>

              <p className="mb-4">We share data with parties directly authorized by a Customer to receive Personal Data. The use of Personal Data by an authorized third party is subject to such third party's privacy policy.</p>

              <p className="mb-4">In the event that we enter into, or intend to enter into, a transaction that alters the structure of our business, such as a reorganization, merger, sale, joint venture, assignment, transfer, change of control, or other disposition of all or any portion of our business, assets or stock, we may share Personal Data with third parties for the purpose of facilitating and completing such transaction. If we do, we will inform such entities of the requirement to handle your information in accordance with this Privacy Policy or inform you that you are covered by a new privacy policy. You will have the opportunity to opt-out of any such transfer if the new entity's planned processing of your information differs materially from that set forth in this Privacy Policy.</p>

              <p className="mb-4">We share Personal Data as we believe necessary: <strong>(i)</strong> to comply with applicable law; <strong>(ii)</strong> to protect the rights, privacy, safety and property of Monexo, you or others; and <strong>(iii)</strong> to respond requests of the courts, law enforcement agencies, regulatory agencies, and other public and government authorities, which may include authorities outside your country of residence.</p>

              <SubHeading title="Employees and Authorized Contractors" />

              <p className="mb-10">Other relevant units within Monexo, including technical support, software team and authorized contractors may need to access information about you when they require this information to perform their job. For example, a customer support representative would need access to your account to validate your identity and respond to your question or request; our email communications team would need access to your contact information to ensure this information is sent correctly and any unsubscribe requests are properly managed; and our security staff would need to review information to investigate attempted denial of service attacks, fraudulent account activity, or other attempts to compromise the Services. All our employees and contractors are required to agree to maintain the confidentiality and protect the privacy of your information.</p>

              <SectionHeading number="7" title="YOUR RIGHTS AND CHOICES UNDER GDPR" />

              <p className="mb-4">Monexo is committed to respecting the confidentiality of your Personal Data and ensuring that you can exercise your rights under the General Data Protection Regulation (EU) 2016/679 ("GDPR"). If you are located within the European Union or European Economic Area (EEA), you have the following rights concerning your Personal Data:</p>

              <div className="mb-6 space-y-4">
                <RightItem title="Right of Access">
                  You have the right to obtain confirmation as to whether or not we process Personal Data concerning you. Where that is the case, you may request access to such data and information about how it is processed.
                </RightItem>
                <RightItem title="Right to Rectification">
                  You have the right to request the correction of inaccurate Personal Data and to have incomplete Personal Data completed.
                </RightItem>
                <RightItem title='Right to Erasure ("Right to be Forgotten")'>
                  You may request the deletion of your Personal Data where, for example, it is no longer necessary for the purposes for which it was collected, or where you have withdrawn your consent (where applicable).
                </RightItem>
                <RightItem title="Right to Restriction of Processing">
                  You may request that we restrict the processing of your Personal Data under certain circumstances, such as when you contest the accuracy of the data or object to its processing.
                </RightItem>
                <RightItem title="Right to Data Portability">
                  You have the right to receive your Personal Data in a structured, commonly used, and machine-readable format and to transmit it to another data controller without hindrance, where the processing is based on consent or contract and is carried out by automated means.
                </RightItem>
                <RightItem title="Right to Object">
                  You may object to the processing of your Personal Data where the processing is based on legitimate interests, including profiling. You always have the right to object to the processing of your data for direct marketing purposes.
                </RightItem>
                <RightItem title="Right Not to Be Subject to Automated Decision-Making">
                  You have the right not to be subject to a decision based solely on automated processing, including profiling, that produces legal effects or significantly affects you, unless certain exceptions apply.
                </RightItem>
                <RightItem title="Right to Lodge a Complaint">
                  You have the right to file a complaint with a supervisory authority in the EEA if you believe that your rights under the GDPR have been infringed.
                </RightItem>
                <RightItem title="Right to Compensation">
                  If you suffer material or non-material damage as a result of an infringement of the GDPR, you may be entitled to receive compensation.
                </RightItem>
              </div>

              <SubHeading title="Exercising Your Data Protection Rights arising from the UK GDPR" />

              <p className="mb-4">You can exercise your rights of access, rectification, erasure, restriction, objection, and data portability by contacting us at the details provided in the "Contact Us" section of this Policy. We may ask you to verify your identity before we act on your request. We aim to respond to all legitimate requests within one month, although this period may be extended where necessary.</p>

              <p className="mb-10">If you have concerns about how we process your Personal Data, you also have the right to lodge a complaint with your local Data Protection Authority. You can find their contact details at: <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:underline">https://edpb.europa.eu/about-edpb/board/members_en</a>.</p>

              <SectionHeading number="8" title="SECURITY AND RETENTION" />

              <p className="mb-4">We are making reasonable efforts to provide you with an appropriate level of security for the risks associated with process of your Personal Data. We take organizational, technical, and administrative measures designed to protect your Personal Data against unauthorized access, destruction, loss, alteration, or abuse. Your Personal Data may only be accessed by a limited number of personnel who need access to such information in order to perform their duties properly. Unfortunately, no data transmission or storage system can be guaranteed to be 100% secure. If you have a reason to believe that your interaction with us is no longer secure, please contact us immediately.</p>

              <p className="mb-10">If you are a Customer of our Services, we retain your Personal Data as long as we are providing the services to you. We retain Personal Data after we cease providing services to you, to the extent necessary to comply with our legal and regulatory obligations. We also retain Personal Data to comply with our tax, accounting, and financial reporting obligations, where we are required to retain the data due to our contractual commitments to our financial and business partners. Where we retain data, we do so in accordance with any limitation periods and record retention obligations that are imposed by applicable laws.</p>

              <SectionHeading number="9" title="YOUR COMMUNICATION CHOICES" />

              <SubHeading title="Legal Communications and Service Announcements" />

              <p className="mb-6">By providing Monexo with phone number and/or using the Services you affirmatively consent to use of your phone number for legal and service notifications or Monexo to send you notifications regarding important service announcements and other legal and administrative communications related to your use of the Services. We may send the following to you by phone number; this Policy, our Terms, Cookie Notice, including legal disclosures; future changes to this Policy, Terms, and other notices, legal communications or disclosures and information related to the Services. Such communications are part of the Services which you cannot opt out of receiving. However, if you do not wish to receive certain service and other administrative and legal notifications, your only way to opt out of such messages is to stop using the Services and/or (if any) delete your account by emailing us at <a href="mailto:support@monexo.ai" className="text-brand-secondary hover:underline">support@monexo.ai</a>.</p>

              <SubHeading title="Promotional Communications" />

              <p className="mb-4">You may receive marketing and advertising communications (e.g., informing you of Service benefits and features, notifying you of new transfer options or payout partners, sharing updates on service improvements, or offering you promotional campaigns) about Monexo and our Services, pursuant to your prior explicit and informed consent. To receive marketing and advertising communications from Monexo, you can contact our customer service, support assistant, or give your explicit consent in the applicable areas. Due to our global privacy practices, we provide our Customers with the opportunity to "opt-in" and "opt out" of receiving marketing and advertising communications other than those for purposes directly related to your transactions with us and in general legal and administrative communications regarding your account.</p>

              <p className="mb-10">If you prefer to opt-in to Promotional Communications, you may receive periodic promotions and other offers or materials that we believe might be of interest to you until you unsubscribe or opt-out.</p>

              <SectionHeading number="10" title="INTERNATIONAL DATA TRANSFERS" />

              <p className="mb-10">We are a global business. Personal Data may be stored and processed in any country where we have operations or where we engage Service Providers. We may transfer Personal Data that we maintain about you to recipients in countries other than the country in which the Personal Data was originally collected. Those countries may have data protection rules that are different from those of your country. However, we will take measures to ensure that any such transfers comply with applicable data protection laws and that your Personal Data remains protected to the standards described in this Policy. In certain circumstances; courts, law enforcement agencies, regulatory agencies, or security authorities in those other countries may be entitled to access your Personal Data.</p>

              <SectionHeading number="11" title="USE BY MINORS" />

              <p className="mb-10">The services are not directed to individuals under the age of eighteen (18), and they shall not provide Personal Data through the Service. If you have a reason to believe that anyone under the age of 18 has provided us with any personal information, please contact us.</p>

              <SectionHeading number="12" title="UPDATES TO THIS POLICY AND NOTIFICATIONS" />

              <p className="mb-10">We may change this Policy from time to time to reflect new services, changes in our Personal Data practices, or relevant laws. The "Last Updated Date" legend at the top of this Policy indicates when this Policy was last revised. We may provide you with disclosures and alerts regarding the Policy or Personal Data collected by contacting you through the phone number you provided (if any).</p>

              <SectionHeading number="13" title="LINKS TO OTHER WEBSITES" />

              <p className="mb-10">The services may provide the ability to connect to other sites. These sites may operate independently from us and may have their own privacy notices or policies, which we strongly suggest you review. If any linked website is not owned or controlled by us, we are not responsible for its content, any use of such website, or the privacy practices of the website's operator.</p>

              <SectionHeading number="14" title="JURISDICTION" />

              <p className="mb-4">Monexo is established in Estonia and complies with the European Union's General Data Protection Regulation (GDPR). Our data processing activities are subject to the supervision of the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon).</p>

              <p className="mb-4">You have the right to request additional information about how we process your personal data under the applicable laws of your country of residence. If you are located in the European Economic Area (EEA), you may also file a complaint with your local data protection authority or with the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon).</p>

              <p className="mb-10">For inquiries or complaints, you may contact the Estonian Data Protection Inspectorate at: <a href="https://www.aki.ee" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:underline">https://www.aki.ee</a>.</p>

              <SectionHeading number="15" title="CONTACT US" />

              <p className="mb-4">If you have any questions or complaints about this Policy, please contact us at <a href="mailto:support@monexo.ai" className="text-brand-secondary hover:underline">support@monexo.ai</a>.</p>

              <p className="mb-4">You may send us your request on exercising your above-mentioned rights, together with documents providing your identity and the scope of your request through following channels:</p>

              <ul className="mb-6 space-y-3 list-none pl-0">
                <BulletItem>By sending an e-mail to <a href="mailto:support@monexo.ai" className="text-brand-secondary hover:underline">support@monexo.ai</a>, with or without a secured electronic signature;</BulletItem>
                <BulletItem>Through delivery by hand, by notary, or by certified mail to the address of Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551.</BulletItem>
              </ul>

              <p className="mb-10">We are committed to answering your request as soon as possible, not more than 30 (thirty) days, and free of charge as long as there is no transaction cost.</p>

            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

const SectionHeading: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
    {number}. {title}
  </h2>
);

const SubHeading: React.FC<{ title: string; small?: boolean }> = ({ title, small }) => (
  small
    ? <p className="font-semibold text-gray-800 mb-2">{title}</p>
    : <h3 className="text-base font-bold text-gray-800 mt-6 mb-3">{title}</h3>
);

const BulletItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-secondary" />
    <span>{children}</span>
  </li>
);

const RightItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="pl-4 border-l-2 border-brand-secondary/30">
    <span className="font-semibold text-gray-800">{title}: </span>
    <span>{children}</span>
  </div>
);

const DefinitionRow: React.FC<{ term: string; definition: React.ReactNode; isLast?: boolean }> = ({ term, definition, isLast }) => (
  <tr className={`${isLast ? '' : 'border-b border-gray-200'}`}>
    <td className="w-40 bg-[#0a1a4e] text-white text-sm font-semibold px-4 py-4 align-top text-center">
      {term}
    </td>
    <td className="px-5 py-4 text-sm text-gray-700 leading-relaxed align-top">
      {definition}
    </td>
  </tr>
);

export default PrivacyPage;
