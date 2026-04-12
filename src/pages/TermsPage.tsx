import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { FileText } from 'lucide-react';

interface TermsPageProps {
  language: string;
}

const TermsPage: React.FC<TermsPageProps> = ({ language }) => {
  const isRTL = language === 'ur' || language === 'ar';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.title = 'Terms of Use - Monexo';

    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('config', 'G-KQQWE47RHF', {
        page_title: 'Terms of Use - Monexo',
        page_location: window.location.href,
        page_path: `/${language}/terms`
      });
    }
  }, [language, isRTL]);

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : ''}`}>
      <SEOHead language={language} subPath="terms" />
      <Helmet>
        <meta property="og:title" content="Monexo Terms of Use" />
        <meta property="og:description" content="Read the Terms of Use governing your access to and use of Monexo's remittance services via WhatsApp." />
        <meta property="og:url" content={`https://monexo.ai/${language}/terms`} />
      </Helmet>
      <Header language={language} />

      <main className="pt-16">
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-4">
              <FileText size={32} className="text-brand-secondary mr-3" />
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Terms of Use
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

              <SectionHeading number="1" title="Preamble" />

              <p className="mb-4">
                These Terms of Use (the <strong>"Terms"</strong>) set forth legally binding terms and conditions that govern your access to and use of the Services. The Services is owned, operated, and distributed by Monexo OÜ, a corporation incorporated and operating in Estonia and having the registered address of Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551 (hereinafter referred to as <strong>"Monexo"</strong>, the <strong>"Company"</strong>, <strong>"we"</strong>, and through similar words such as "us", "our", etc.). Monexo enables Customers (each, a <strong>"Customer"</strong>, <strong>"you"</strong> or <strong>"your"</strong>) to access and use remittance services via WhatsApp without the need to download any separate application.
              </p>

              <p className="mb-4">
                These Terms are entered into by and between you and Monexo, and together with the Privacy Policy and any other documents expressly incorporated by reference, in order to govern your access to and use of the Services, as a Customer.
              </p>

              <p className="mb-4">
                By accessing or using the Services, you acknowledge that you have read, understood, and agreed to be bound and abide by the provisions set forth in these Terms. In case of not accepting these Terms (or any part thereof) or the Privacy Policy, you shall cease your access and/or use of the Services immediately.
              </p>

              <p className="mb-10">
                Monexo is fully committed to protecting our Customers' and others' privacy and security and addressing their concerns. You may read our Privacy Policy to learn about how we are handling your personal data, in greater detail.
              </p>

              <SectionHeading number="2" title="Changes to the Terms" />

              <p className="mb-4">
                We reserve the right to withdraw or amend the Services, and any material or content we provide through our Services, at our sole discretion and without any notice.
              </p>

              <p className="mb-4">
                We reserve the right to update and modify these Terms by providing Customers with notice of updates and modifications. In this regard, we will notify you via WhatsApp messages or other direct communication methods at least 15 (fifteen) days before the date on which the updates, modifications, or amendments on the Terms will enter into force. If you do not agree with the change(s) of these Terms, you may terminate these Terms immediately by discontinuing your access or use of the Services. If you continue to access or use the Services after the update, we will consider you as accepted the amended Terms.
              </p>

              <p className="mb-4">
                These Terms shall also apply, including without limitation to any new functions, features, or tools added to the Services.
              </p>

              <p className="mb-10">
                It is in your best interest to regularly check the Terms for any updates, modifications, or amendments that might affect you. The most current version of these Terms may be viewed <strong>upon request through our official communication channels</strong>. We will not be liable if all or any part of the Services is unavailable at any time or for any period. From time to time, we may restrict access to some or all parts of the Services according to these Terms.
              </p>

              <SectionHeading number="3" title="Definitions" />

              <p className="mb-4">Within the context of herein Terms, the following terms shall bear the meanings ascribed to them below:</p>

              <div className="mb-10 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    <DefinitionRow
                      term="Force Majeure Event"
                      definition={<em>Floods, earthquakes, or other comparable elements of nature or acts of God, wars, civil disorders, or revolutions in any country affecting the operations of the Company, or any other event beyond the reasonable control of the non-performing party including without limitation failures of the internet or any public telecommunication network, denial of service attacks, viruses, or other malicious software attacks, governmental restrictions, given that the default or delay could not have been avoided or prevented.</em>}
                    />
                    <DefinitionRow
                      term={<>Intellectual Property Rights</>}
                      definition={<em>All registered or unregistered, registerable, or un-registrable intellectual property rights in whole or in part, anywhere in the world, and including without limitation copyrights, trade secrets, know-how, business names, trademarks, service marks, and patents.</em>}
                    />
                    <DefinitionRow
                      term="Services"
                      definition={<em>For the purposes of this Privacy Policy, "Services" refers to all services provided by Monexo to Customers through WhatsApp communication, including but not limited to information sharing, support, guidance, and any other interactions or activities initiated by Customers with Monexo via WhatsApp.</em>}
                    />
                    <DefinitionRow
                      term="Customer(s)"
                      definition={<em>The individual using the Services, or the company, or other legal entity on behalf of which such individual is accessing or using the Services, as applicable.</em>}
                      isLast
                    />
                  </tbody>
                </table>
              </div>

              <SectionHeading number="4" title="Coverage and Usage of the Services" />

              <p className="mb-4">
                Monexo utilizes advanced technology and secure payment infrastructure to empower Customers to facilitate cross-border money transfers. Through its WhatsApp-native Services, Monexo facilitates the secure collection, processing, and execution of remittance transactions with the explicit consent of Customers. The Services operate at the intersection of financial technology, digital payments, and inclusive innovation, offering solutions that enable Customers to participate in a fast, low-cost, and transparent remittance ecosystem.
              </p>

              <p className="mb-6">
                Monexo collaborates with ecosystem partners including payout companies, financial institutions, and local banks to ensure that funds are delivered reliably and securely to recipients. A key feature of the Services is the ability for Customers to send money instantly and at low cost through WhatsApp, without the need to download a separate application or pay hidden fees.
              </p>

              <SubHeading title="4.1. Registering for an Account" />

              <SubHeading title="Account Creation" underline />

              <p className="mb-4">
                You may use certain Monexo Services via WhatsApp without creating a separate account; however, providing personal information during onboarding is required to access key functionalities of the Services, such as sending or receiving remittances, verifying your identity, managing your transfer preferences, and tracking transaction history.
              </p>

              <p className="mb-4">
                To register or provide necessary information, you will be asked to provide your full name, phone number, government-issued identification details, and any other information required for KYC and regulatory compliance (collectively, the <strong>"Registration Information"</strong>). After completing the registration process, you may be required to verify your identity through WhatsApp or other communication channels to activate full access to the Services.
              </p>

              <p className="mb-4">
                You agree to provide accurate and up-to-date information during the registration process and to maintain the accuracy of this information throughout your use of the Services. Monexo may request additional details if needed to ensure regulatory compliance, transaction security, or to improve the functionality and reliability of the Services.
              </p>

              <p className="mb-6">
                Registration and use of the Services are currently offered free of charge. By providing your Registration Information, you acknowledge and agree that your personal data will be processed in accordance with our Privacy Policy and that you are bound by the terms and conditions set forth in these Terms of Use.
              </p>

              <SubHeading title="Eligibility" underline />

              <p className="mb-4">
                We do not permit individuals under 18 years of age to become a Customer. Unless you are at least 18 years of age, you should not create an account or access the Services in any means.
              </p>

              <p className="mb-4 font-semibold uppercase text-sm tracking-wide text-gray-800">
                BY ACCESSING AND USING THE SERVICES, YOU REPRESENT AND WARRANT THAT YOU ARE AT LEAST 18 YEARS OF AGE AND HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THESE TERMS AND TO ABIDE BY THE PROVISIONS OF THESE TERMS.
              </p>

              <p className="mb-6">
                Children under the age of majority (under 18) may not use the Services, or register for an account. Your account may be deleted without notice if we believe that you are a Minor, you are under 18 years of age and you represent yourself as 18 or older, or you are over 18 and represent yourself as under 18.
              </p>

              <SubHeading title="Account Responsibilities" underline />

              <p className="mb-4">
                You agree to create only 1 (one) unique Monexo profile and be the sole authorized user of your account, keep your account accurate, complete, and with up-to-date information. Your failure to keep your account data accurate, complete, and up to date may lead to your inability to access and use the Services, or your account's termination by us. Therefore, you must either make necessary changes to the account through WhatsApp communication with Monexo or inform us immediately of any changes to your information by contacting our support channels.
              </p>

              <p className="mb-4">
                If you provide any information that is untrue or inaccurate, not current, or incomplete, or if the Company suspects that your information is untrue or inaccurate, not current, or incomplete, the Company may, in its sole discretion, suspend or terminate your account and refuse your current or future access to any Monexo Service.
              </p>

              <p className="mb-4">
                Your understanding and commitment to supplying accurate and reliable financial details are critical for the proper execution of money transfers and for enabling smooth delivery to recipients. Any inaccuracies, outdated information, or discrepancies in your financial details may prevent successful transfers or access to certain Service functionalities, and may result in failed or delayed transactions.
              </p>

              <p className="mb-4">
                All remittance transactions conducted through Monexo are subject to the rules of the corresponding financial partners and payout networks. As such, Monexo is unable to reverse or alter completed transactions once processed. It is your sole responsibility to ensure the correctness of recipient details and other related information prior to initiating any transaction.
              </p>

              <p className="mb-4">
                In compliance with legal obligations and industry standards, the Company places significant emphasis on the accurate and secure provision of financial information by our Customers. Misleading, incomplete, or outdated financial information may lead to the suspension or termination of the Service.
              </p>

              <p className="mb-4 font-semibold uppercase text-sm tracking-wide text-gray-800">
                THE COMPANY RESERVES THE RIGHT TO TAKE APPROPRIATE ACTIONS, INCLUDING LEGAL MEASURES, IN RESPONSE TO ANY INSTANCES OF PROVIDING FALSE OR INACCURATE FINANCIAL INFORMATION, AS SUCH ACTIONS MAY VIOLATE THE TERMS AND CONDITIONS AGREED UPON DURING THE ACCOUNT CREATION PROCESS.
              </p>

              <p className="mb-4">
                By registering for an account and becoming a Customer of the Monexo Services, you agree to be liable for all activities that take place under your account and agree to always keep the safety and privacy of your login credentials. If you become aware of or reasonably suspect any violation of safety, including without limitation any loss, theft, or unlawful disclosure or use of your account, you must promptly notify us. If we suspect that there is likely to be a breach of security or misuse of the Services, or violation of any obligation under these Terms, we may suspend or terminate your account and your use of the Services. Such termination or suspension may be immediate and without notice. In such event, all information held in your account will be deleted without notice, and you accept full responsibility and you hereby release and hold harmless the Company from any and all liability.
              </p>

              <p className="mb-10">
                The Company cannot and will not be held responsible for any loss or harm caused by your inability to maintain the safety of your account. Thus, the Company is not responsible for any loss or damage as a result of someone else using your account, registration information, or WhatsApp profile, with or without your knowledge.
              </p>

              <SubHeading title="4.2. Limitations on Use of the Services" />

              <p className="mb-4">You are solely responsible for all your interactions with Monexo Services via WhatsApp.</p>

              <p className="mb-4">While using the Services, you may not:</p>

              <ul className="mb-4 space-y-3 list-none pl-0">
                {[
                  'defame, abuse, harass, stalk, threaten, or otherwise violate legal rights (e.g., rights of privacy and publicity) of Monexo, or use information learned from the Services to defame, abuse, harass, stalk, threaten, intimidate, or mislead, or otherwise violate legal rights of Monexo or any other person;',
                  'breach any international, federal, or local legislation, regulation, rule, or ordinance;',
                  'contact Monexo to share an information that is defamatory, profane, infringing, obscene, unlawful, offensive, and/or harmful, or that advocates, endorses, condones, or promotes racism, bigotry, hatred, or physical harm of any kind against any individual or group of individuals;',
                  'use the Services for any purpose in violation of applicable local, state, federal, or international law;',
                  'spam, phish, pharm, pretext, bot, crawl, or scrape for any scandalous, obscene or immoral purpose;',
                  'interfere with or circumvent the safety measures of the Services;',
                  'attempt to reverse engineer, de-compile, hack, disable, interfere with, disassemble, copy, or disrupt the integrity or the performance of the Services or Monexo systems;',
                  'restrict or inhibit any other Customer from accessing and using the Services;',
                  'use automated tools, bots, or scripts to scrape, mine, or collect user data or transaction data from the Services;',
                  'remove or modify, visually or otherwise, any copyright, trademarks, or other proprietary marks and rights owned by Monexo;',
                  'engage in any activities that may compromise the security, integrity, or proper functioning of the service;',
                  'attempt to access or use unauthorized financial information or payment card details belonging to other users or entities;',
                  'initiate or facilitate fraudulent transactions, unauthorized payments, or any other illicit financial activities;',
                  "modify or tamper the service's software, code, or security features in any manner that may jeopardize the confidentiality or privacy of user data or compromise the Service's integrity;",
                  'engage in any form of unauthorized data mining, data extraction, or data harvesting from the Services;',
                  "use the Services in a manner which is false or misleading (directly or by omission) or for the purpose of accessing or otherwise obtaining Monexo's trade secrets for public disclosure or other purposes;",
                  'use, transfer, distribute, or dispose of the Services in any manner that could compete with the business of Monexo; or',
                  'cause or induce any third party to engage in the restricted activities listed above.',
                ].map((item, i) => (
                  <BulletItem key={i}>{item}</BulletItem>
                ))}
              </ul>

              <p className="mb-10">
                Any use of the Services or related content in violation of the principles listed above without the prior written permission of Monexo is strictly prohibited and will terminate these Terms, and your access to the Services automatically. Any such unauthorized use may also violate applicable laws and Monexo will take appropriate investigative and legal actions for such illegal or unauthorized use.
              </p>

              <SectionHeading number="5" title="Communications" />

              <p className="mb-4">
                By using the Monexo Services via WhatsApp, you affirmatively consent to receiving important administrative notifications, service updates, and account-related messages through WhatsApp or other official Monexo communication channels. If you do not wish to receive certain administrative notifications, your only way to opt out of such messages is to stop using the Monexo Services and/or close your Monexo account immediately.
              </p>

              <p className="mb-4">
                Monexo reserves the right to contact you through the phone number or WhatsApp account you provided during onboarding or registration.
              </p>

              <p className="mb-4">
                Monexo disclaims all liability for any communication directed to you from any third party directly or indirectly in connection with the Monexo Services (the <strong>"Third-Party Communications"</strong>) that you may receive, and any actions you may take or refrain from taking as a result of such Third-Party Communications. You are solely responsible for assessing and verifying the identity and trustworthiness of the source and content of any Third-Party Communications. Monexo assumes no responsibility for verifying, and makes no representations or warranties regarding, the identity or trustworthiness of the source or content of any Third-Party Communications.
              </p>

              <p className="mb-4">
                By using the Monexo Services, you expressly relieve and hold Monexo harmless from any and all liability arising from Third-Party Communications, including any loss or damage incurred as a result of any dealing between you and any third parties. It is your responsibility to evaluate the content and usefulness of the information obtained from third parties.
              </p>

              <p className="mb-10">
                Without prejudice to the section titled "Data Protection and Privacy", the foregoing clause herein is applicable to the extent permitted by applicable international and Estonian data protection regulations, including the European Union General Data Protection Regulation.
              </p>

              <SectionHeading number="6" title="Ownership of Intellectual Property and Contents on the Services" />

              <p className="mb-4">
                Any content, material, information, text, data, copyright, trademark, logo, design, insignia, image, photo, music, screenshot, video, post, identifying mark, page, software, and other original works of authorship and/or intellectual property uploaded to, or incorporated into the Monexo Services (collectively, the <strong>"Services Content"</strong>) are and will remain the sole and exclusive property of Monexo.
              </p>

              <p className="mb-4">
                We retain all right, title, and interest in and to the Services, including without limitation, <strong>(i)</strong> all texts, graphics, typefaces, formatting, graphs, designs, editorial content, HTML, look and feel, software, and data, <strong>(ii)</strong> all business processes, procedures, methods, and techniques used in the Services, <strong>(iii)</strong> all other material and content uploaded or incorporated into the Services, and <strong>(iv)</strong> all associated trade secrets and <strong>(v)</strong> all financial instruments, proprietary algorithms, transaction processing methods, and data models related to financial transactions conducted through the Services and other intellectual property and proprietary rights recognized anywhere in the world (collectively, the <strong>"Monexo IP"</strong>). The Monexo IP is protected in all forms, media, and technologies currently known or to be developed hereinafter. Monexo owns all Monexo IP, as well as the coordination, selection, arrangement, and enhancement of such Monexo IP as a Collective Work under any applicable intellectual property legislation, and all rights on the Services Content. Monexo IP is protected by the domestic and international laws regarding copyright, patents, and other proprietary rights.
              </p>

              <p className="mb-4">
                All trademarks and service marks, whether registered or unregistered, as well as product names and company names or logos, displayed or mentioned via Services are the property of their respective owners. Reference to any product, service, process, or other information, by trade name, trademark, manufacturer, supplier, or otherwise does not constitute or imply endorsement, sponsorship, or recommendation thereof by Monexo.
              </p>

              <p className="mb-4">
                Violation of this provision may result in infringement of Intellectual Property Rights of Monexo, or other third parties, which is prohibited by law and could result in substantial civil and criminal penalties.
              </p>

              <p className="mb-10">
                Unless explicitly stated herein, nothing in these Terms may be construed as conferring any license to Intellectual Property Rights, whether by estoppel, implication, or otherwise. You represent and warrant that your use of the Services Content will remain consistent with these Terms and will not infringe or violate the rights of any other party or breach any contract or legal duty against any other party or violate any applicable law. In order to request permission for using the Services Content, you may contact Monexo via the channels set forth under Article 18.
              </p>

              <SectionHeading number="7" title="Third-Party Services" />

              <p className="mb-4">
                The Services may include embedded third-party content or links (such as hyperlinks) to third party sites, apps, resources, contents or services that are not owned or controlled by the Company (collectively, <strong>"Third-Party Services"</strong>).
              </p>

              <p className="mb-4">
                When you access Third-Party Services, you do so at your own risk. Third-Party Services are not under our control, and you acknowledge that the Company is not responsible or liable for the content, function, accuracy, legality, appropriateness, or any other aspect of Third-Party Services. If you believe any Third-Party Services violate applicable law or may be inappropriate, please notify the Company. The inclusion of any Third-Party Services does not imply any association between the Company and their operators.
              </p>

              <p className="mb-4">
                By using the Services thereof, you expressly relieve and hold the Company harmless from any and all liability arising from your use of any Third-Party Services, including any loss or damage incurred as a result of any dealing between you and any third parties, or as a result of the presence of such Third-Party Services or failure of such Third-Party Services to function as intended. It is your responsibility to evaluate content and usefulness of the information obtained from third parties.
              </p>

              <p className="mb-4">
                When you are connected to or otherwise accessing to a Third-Party Service, you agree that you are responsible for the following: <strong>(i)</strong> taking necessary measures to protect you and your computer systems from viruses, worms, trojans, malicious code, and other harmful effects; <strong>(ii)</strong> downloading, using or purchasing any material that is sexually explicit, immoral, offensive or otherwise objectionable or unlawful, or that contains technical inaccuracies, typographical errors, or other errors; <strong>(iii)</strong> downloading, using or purchasing any material that violates confidentiality or proprietary rights of third parties and other proprietary rights, or that is subject to additional terms and conditions specified or unspecified; <strong>(iv)</strong> any financial costs or other liabilities against third parties arising from your actions or other activities; <strong>(v)</strong> reading and understanding terms of use and privacy policies applicable to Third-Party Services.
              </p>

              <p className="mb-4">
                You acknowledge that certain Third-Party Services may involve financial transactions, including but not limited to payment processing, credit facilities, or investment opportunities. You agree that any financial activities conducted through such Third-Party Services are solely at your own risk, and the Company bears no responsibility for any financial losses, discrepancies, or disputes arising from your engagement with such services.
              </p>

              <p className="mb-4">
                When accessing Third-Party Services involving financial transactions, you are responsible for safeguarding your financial data, including but not limited to bank account details, credit card information, or other sensitive financial information. The Company encourages you to exercise caution and due diligence in sharing any financial data with third parties and recommends reviewing the applicable terms of use and privacy policies to ensure the protection of your financial information.
              </p>

              <p className="mb-10">
                While utilizing Third-Party Services that involve payment processing, you acknowledge that the Company may collect and store your card information and related payment details. The Company undertakes to handle such data in accordance with industry-standard security measures and data protection protocols. However, you agree that the Company shall not be liable for any breaches, hacks, or unauthorized access to your card or payment information that may occur as a result of actions taken by third-party service providers or external factors beyond the Company's control.
              </p>

              <SectionHeading number="8" title="Data Protection and Privacy" />

              <p className="mb-4">
                Monexo hereby represents and warrants that it shows its best efforts for the compliance with all relevant legislations, rules, regulations, directives, and guidelines on the compilation, use, and disclosure of information and data gathered from or about the Customers relevant to access or use of the Services (jointly, the <strong>"Rules"</strong>).
              </p>

              <p className="mb-10">
                Rules include the European Union General Data Protection Regulation applicable in Estonia, any local Estonian data protection legislation, or any other Rules of another jurisdiction, as well as rules, laws, or any other part of the legislation issued by the relevant data protection authorities, and any amendments and changes thereof or laws as may be repealed or succeeded.
              </p>

              <SectionHeading number="9" title="Representations and Warranties" />

              <p className="mb-4">
                Each Party hereby represents and warrants to the other Party that, <strong>(i)</strong> such Party has the necessary power and authority to be bound by these Terms; <strong>(ii)</strong> compliance with these Terms and fulfillment of the obligations hereunder do not and will not, to the best of each Party's knowledge, violate any other agreement to which it is a party; <strong>(iii)</strong> no other restriction, limitation or contractual or statutory obligation exists preventing a Party from fulfilling its obligations hereunder; and <strong>(iv)</strong> these Terms constitute a legal, valid and binding obligation when agreed upon by both Parties.
              </p>

              <p className="mb-4">
                Monexo hereby represents and warrants to the Customer that, <strong>(i)</strong> it will have all necessary rights, licenses, know-how, expertise, and experience needed to operate the Services hereunder; <strong>(ii)</strong> is the sole proprietor of the Services and the Intellectual Property Rights (to the extent permitted in these Terms) of the Services and has all legal rights, licenses, and authority to provide the Customer with the Services as stipulated herein; <strong>(iii)</strong> the Services shall also comply with all relevant legislations and regulations when used by the Customer in accordance with these Terms.
              </p>

              <p className="mb-10">
                The Customer represents and warrants that <strong>(i)</strong> all information Customer shares with Monexo (<em>if any</em>) is true, accurate, current, and complete, <strong>(ii)</strong> Customer is the sole owner of all rights, titles, and interests in, or have obtained all necessary rights and licenses from the applicable owner of, any information Customer shares with Monexo (<em>if any</em>), and <strong>(iii)</strong> such information, when used for the purposes in which it is submitted onto Monexo, does not infringe the rights of any third party, including without limitation, Intellectual Property Rights, proprietary rights and rights of publicity/privacy. The Customer also acknowledges and agrees that s/he will be solely responsible for all information that s/he share with Monexo (<em>if any</em>) and will use the Services solely for the permitted purposes as defined by these Terms and shall not interfere with the integrity or performance of the Services as articulated by the section of <strong><em>Limitations on Use of the Services</em></strong>.
              </p>

              <SectionHeading number="10" title="Disclaimer of Warranties" />

              <p className="mb-4">
                Except as expressly set forth herein, Monexo does not warrant, or make any representation regarding <strong>(i)</strong> the results obtained from benefiting the Services Content will be wholly accurate, entirely reliable, complete or truthful, or <strong>(ii)</strong> the Services will be provided on an uninterrupted, secure or error-free basis. The Services (and any part thereof), including without limitation any content, data, and any information related thereto, are provided strictly on an <strong>"as is"</strong> and <strong>"as available"</strong> basis, without any warranties or conditions of any kind, either express, implied, or statutory. Monexo makes no representation concerning the benefits or outcomes obtained from the Services by the Customer or any third party.
              </p>

              <p className="mb-4">
                The Services may become inaccessible, or it may not function properly with Customers' web browser, mobile device, and/or operating system. Monexo cannot be held liable for any perceived or actual damages arising from content, operation, use of or inability to use the Services.
              </p>

              <p className="mb-10">
                Some jurisdictions may not allow exclusion and limitation of certain implied warranties. The above exclusions may not apply to Customers, falling within the scope of such jurisdiction's competence. These Terms grant Customers specific legal rights, and Customers may have other rights which vary from state to state. The disclaimers and exclusions under these Terms shall not apply to the extent prohibited by applicable law.
              </p>

              <SectionHeading number="11" title="Limitation of Liability" />

              <p className="mb-4">
                If Monexo's performance of its obligations under these Terms is prevented or delayed by any act or omission of Customer or any third party, Monexo shall not be deemed in breach of its obligations under these Terms.
              </p>

              <p className="mb-4">
                In no event will Monexo, its developers, affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use the Monexo Services via WhatsApp, any related platforms or linked websites, and any content provided through the Services (including the Services Content), including any direct, indirect, special, incidental, consequential, or punitive damages, and also including but not limited to, personal injury, pain and suffering, emotional distress, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.
              </p>

              <p className="mb-4">
                Thus, you expressly agree that you assume all risks in connection with your access and use of any of the Monexo Services. You further expressly waive and release us from any and all liability, claims, causes of action, or damages arising from or in any way relating to your use of any of the Monexo Services.
              </p>

              <p className="mb-4">
                This limitation of liability section shall apply to the fullest extent permitted by law in the applicable jurisdiction whether the alleged liability is based on contract, tort, negligence, strict liability, or whatsoever, even if Monexo has been advised of the possibility of such damage.
              </p>

              <p className="mb-10">
                Some jurisdictions do not allow exclusion or limitation of incidental or consequential damages; therefore above limitations or exclusions may not apply to Customers falling within the scope of such jurisdictions' competence. These Terms give Customers specific legal rights, and Customers may also have other rights which vary from jurisdiction to jurisdiction. The disclaimers, exclusions, and limitations of liability under the Terms shall not apply to the extent prohibited by applicable law.
              </p>

              <SectionHeading number="12" title="Indemnification" />

              <p className="mb-10">
                The Customer shall defend, indemnify, and hold harmless Monexo and its affiliates, co-branders, partners, shareholders, employees, agents, representatives, and/or independent contractors from and against all costs, damages, and losses, including legal expenses resulting from any claim by third parties that <strong>(i)</strong> Customer's use of the Monexo Services via WhatsApp, the Services Content, or any other material infringement of any rights of third parties, including without limitation, breach or violation of the Intellectual Property Rights, privacy rights, or financial rights of such third parties; <strong>(ii)</strong> the information shared with Monexo by Customer via the WhatsApp or onboarding channels is obscene, defamatory, illegal, unethical, or promotes illegal conduct; <strong>(iii)</strong> the Customer has not obtained and/or failed to obtain any necessary permit, license, or consent required to use the Services in accordance with these Terms; and <strong>(iv)</strong> the Customer breaches (de facto or presumably) any of its representations, warranties, and/or responsibilities under these Terms in relation to Monexo Services.
              </p>

              <SectionHeading number="13" title="Unlawful Activity and Termination of Access to the Services" />

              <p className="mb-4">
                Monexo reserves the right to investigate complaints or reported violations of these Terms and to take any action it deems appropriate, including without limitation, reporting any suspected unlawful activity to law enforcement officials, regulators, or other third parties and disclosing any information necessary or appropriate to such persons or entities relating to Customers' phone number, WhatsApp account (if shared by the Customer previously), usage history, IP addresses, and traffic information.
              </p>

              <p className="mb-4">
                Monexo may terminate these Terms immediately in its sole discretion and without any prior notice or liability against you, or suspend or terminate your use of, or access to, the Monexo Services at any time for any reason and under any conditions, including without limitation, if it is reasonably believed in good faith that you have violated or acted inconsistently with these Terms or any applicable law or that you have engaged in conduct that we determine to be inappropriate or unacceptable.
              </p>

              <p className="mb-4">
                You accept, declare, and undertake that you cannot claim any rights or receivables against Monexo due to any termination pursuant to this provision.
              </p>

              <p className="mb-10">
                The Customer may terminate these Terms at any time by ceasing to access or use the Monexo Services. However, sections of these Terms which by their nature should survive the expiration or termination will remain in full force and effect subsequent to and notwithstanding the expiration or termination of these Terms, as stipulated in the section of "Following Termination".
              </p>

              <SectionHeading number="14" title="Following Termination" />

              <p className="mb-4">
                Upon expiry or termination of these Terms for any reason, all rights of the Customer shall be terminated instantly.
              </p>

              <p className="mb-10">
                The following clauses shall survive expiry or termination of these Terms: <strong>"Definitions"</strong>, <strong>"Ownership of Intellectual Property and Contents on the Services"</strong>, <strong>"Disclaimer of Warranty"</strong>, <strong>"Limitation of Liability"</strong>, <strong>"Indemnification"</strong>, <strong>"Unlawful Activity and Termination of Access to the Services"</strong>, <strong>"Following Termination"</strong>, <strong>"Governing Law"</strong>, <strong>"Severability"</strong> and <strong>"Miscellaneous Provisions"</strong>, and all commitments of both Parties under these Terms shall cease to be fulfilled.
              </p>

              <SectionHeading number="15" title="Governing Law" />

              <p className="mb-10">
                These Terms and all materials resulting directly or indirectly therefrom shall be governed and construed in compliance with the legislation of Estonia, regardless of conflict of laws rules.
              </p>

              <SectionHeading number="16" title="Severability" />

              <p className="mb-4">
                If any part of these Terms is found to be unlawful, void, or otherwise unenforceable, such unlawfulness, invalidity or unenforceability shall extend to such clause only. The unlawfulness, invalidity, or unenforceability of such a clause shall in no way influence or render any other part of these Terms, unlawful, void, or otherwise unenforceable, and generally, shall be reformed, construed, and implemented in such a way that reflects intent of the Parties as conveyed in these Terms with its nearest lawful effect.
              </p>

              <p className="mb-10">
                In any jurisdiction, the fact that any provision of these Terms is held to be unlawful, void, or otherwise unenforceable, shall have no effect on the legality, validity, or enforceability of such provision in other jurisdictions.
              </p>

              <SectionHeading number="17" title="Miscellaneous Provisions" />

              <SubHeading title="Headings" underline />
              <p className="mb-6">The headings used in these Terms are for reference reasons only and do not influence understanding and interpretation of these Terms.</p>

              <SubHeading title="Waiver" underline />
              <p className="mb-6">Monexo's failure to assert any right or provision under these Terms shall not constitute a waiver of any such or other right or provision. No waiver shall be considered a further or continuing waiver of such term or any other term.</p>

              <SubHeading title="Service Interruption" underline />
              <p className="mb-4">In order to ensure the utmost possible service level, Monexo reserves the right to interrupt the Services for maintenance, system update or any other change, through informing the Customers appropriately.</p>
              <p className="mb-4">We will not be liable for any reason if all or any part of the Services is unavailable at any time or for any period. From time to time, we may restrict or suspend access to some or all parts of the Services to the Customers.</p>
              <p className="mb-6">Additionally, the Services might not be available due to reasons outside Monexo's reasonable control, such as "Force Majeure".</p>

              <SubHeading title="Remedies Not Exclusive" underline />
              <p className="mb-6">Except as expressly stated herein, no remedy is designed to be excluded from any other remedy that is not available under these Terms or in law or in equity.</p>

              <SubHeading title="Non-Exclusivity" underline />
              <p className="mb-6">These Terms are not exclusive.</p>

              <SubHeading title="No Strict Construction" underline />
              <p className="mb-6">Where an ambiguity or issue occurs with regards to any clause of these Terms, the Terms shall be construed as if collectively approved by the Parties and no presumption or burden of proof shall occur to favor or disadvantage of either Party by virtue of the authorship on these Terms.</p>

              <SubHeading title="Assignment" underline />
              <p className="mb-4">Without prior written approval of Monexo, these Terms or any rights or obligations conferred thereunder may not be transferred and delegated by the Customers. Any attempt to grant, without such approval, any rights or responsibilities arising from these Terms shall be null and void <em>ab initio</em>.</p>
              <p className="mb-6">Monexo reserves the right to transfer, assign, dispose of by novation, or subcontract any or all rights or obligations under these Terms, by taking the Customers' legitimate interests into account. Provisions regarding change of these Terms shall apply accordingly.</p>

              <SubHeading title="Entire Agreement" underline />
              <p className="mb-6">These Terms constitute the entire agreement between the Parties on the subject matter of the Terms and supersede any and all prior written or oral agreements and/or communications relating to the subject matter thereunder.</p>

              <SubHeading title="Force Majeure" underline />
              <p className="mb-6">None of the Parties shall be responsible for any error or delay in fulfilling any of their corresponding obligations arising from these Terms, if a Force Majeure Event prevents them from doing so.</p>

              <SubHeading title="Interpretation" underline />
              <p className="mb-6">Unless the context requires, <strong>(i)</strong> the singular includes the plural and vice versa; <strong>(ii)</strong> if any act which shall be performed in accordance with these Terms is to be done on a day that is not a business day then the act must be performed on or before the next business day; <strong>(iii)</strong> a reference to any legislation or law includes all amendments, consolidations or other provisions thereof, <strong>(iv)</strong> a reference to a natural person shall mean including without limitation a partnership, joint venture, association, government or legal body or legal entity and vice versa shall be interpreted herein.</p>

              <SubHeading title="Independent Legal Advice" underline />
              <p className="mb-10">Customer accepts that it has had the chance to read these Terms, agrees with its provisions, and has been given a chance to seek independent legal advice on the Terms' provisions before acknowledging them.</p>

              <SectionHeading number="18" title="Contact Information" />

              <p className="mb-10">
                If you have any questions or complaints about these Terms, please contact us at <a href="mailto:support@monexo.ai" className="text-brand-secondary hover:underline">support@monexo.ai</a>.
              </p>

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

const SubHeading: React.FC<{ title: string; underline?: boolean }> = ({ title, underline }) => (
  underline
    ? <h4 className="font-bold text-gray-800 underline mb-3 mt-5">{title}</h4>
    : <h3 className="text-base font-bold text-gray-800 mt-6 mb-3">{title}</h3>
);

const BulletItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-secondary" />
    <span>{children}</span>
  </li>
);

const DefinitionRow: React.FC<{ term: React.ReactNode; definition: React.ReactNode; isLast?: boolean }> = ({ term, definition, isLast }) => (
  <tr className={`${isLast ? '' : 'border-b border-gray-200'}`}>
    <td className="w-44 bg-[#0a1a4e] text-white text-sm font-semibold px-4 py-4 align-top text-center">
      {term}
    </td>
    <td className="px-5 py-4 text-sm text-gray-700 leading-relaxed align-top">
      {definition}
    </td>
  </tr>
);

export default TermsPage;
