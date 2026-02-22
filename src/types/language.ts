export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Translations {
  whatsappMessage: string;
  hero: {
    tagline: string;
    subtitle: string;
    downloadButton: string;
    trustText: string;
    instantTransfers: string;
    mobileFirst: string;
    disclaimer: string;
  };
  benefits: {
    title: string;
    zeroFees: {
      title: string;
      description: string;
    };
    fastTransfers: {
      title: string;
      description: string;
    };
    easyToUse: {
      title: string;
      description: string;
    };
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1: {
      title: string;
      description: string;
    };
    step2: {
      title: string;
      description: string;
    };
    step3: {
      title: string;
      description: string;
    };
    flowStep1: string;
    flowStep2: string;
    flowStep3: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    testimonial1: {
      text: string;
      author: string;
      location: string;
    };
    testimonial2: {
      text: string;
      author: string;
      location: string;
    };
    testimonial3: {
      text: string;
      author: string;
      location: string;
    };
    metrics: {
      users: string;
      moneySent: string;
      countries: string;
      rating: string;
    };
  };
  faq: {
    title: string;
    subtitle: string;
    q1: {
      question: string;
      answer: string;
    };
    q2: {
      question: string;
      answer: string;
    };
    q3: {
      question: string;
      answer: string;
    };
    q4: {
      question: string;
      answer: string;
    };
    q5: {
      question: string;
      answer: string;
    };
    q6: {
      question: string;
      answer: string;
    };
    support: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  footer: {
    tagline: string;
    copyright: string;
    compliance: string;
    sections: {
      product: {
        title: string;
        howItWorks: string;
        pricing: string;
        countries: string;
        exchangeRates: string;
      };
      support: {
        title: string;
        helpCenter: string;
        contactUs: string;
        trackTransfer: string;
        reportIssue: string;
      };
      legal: {
        title: string;
        privacyPolicy: string;
        termsOfService: string;
        compliance: string;
        licenses: string;
      };
    };
    trustIndicators: {
      security: string;
      licensed: string;
      countries: string;
    };
  };
  header: {
    downloadApp: string;
    navigation: {
      howItWorks: string;
      countries: string;
      pricing: string;
      help: string;
    };
  };
  phoneApp: {
    title: string;
    subtitle: string;
    youSending: string;
    recipientGets: string;
    transferFee: string;
    free: string;
    exchangeRate: string;
    deliveryTime: string;
    minutes: string;
    sendMoney: string;
    zeroFees: string;
    minDelivery: string;
  };
  downloadPage: {
    hero: {
      title: string;
      subtitle: string;
    };
    features: {
      title: string;
      subtitle: string;
      security: {
        title: string;
        description: string;
      };
      speed: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
    benefits: {
      title: string;
      subtitle: string;
      zeroFees: string;
      instantTransfer: string;
      bankLevel: string;
      multiLanguage: string;
      support247: string;
      easySetup: string;
    };
    cta: {
      title: string;
      subtitle: string;
    };
    downloadOn: string;
    getItOn: string;
    rating: string;
    downloads: string;
  };
  countries: {
    title: string;
    subtitle: string;
    pilot: {
      title: string;
      description: string;
    };
    comingSoon: {
      title: string;
      description: string;
    };
    waitlist: {
      title: string;
      description: string;
      button: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    transfers: {
      title: string;
      fee: string;
    };
    rates: {
      title: string;
      description: string;
    };
    guarantee: {
      title: string;
      description: string;
    };
  };
  security: {
    title: string;
    subtitle: string;
    encryption: {
      title: string;
      description: string;
    };
    compliance: {
      title: string;
      description: string;
    };
    partners: {
      title: string;
      description: string;
    };
  };
  calculator: {
    from: string;
    to: string;
    amount: string;
    exchangeRate: string;
    transferFee: string;
    recipientGets: string;
    estimatedDelivery: string;
    ratesDisclaimer: string;
    termsDisclaimer: string;
  };
  terms: {
    title: string;
    effectiveDate: string;
    welcome: {
      title: string;
      description: string;
    };
    sections: {
      introduction: { title: string; content: string[] };
      eligibility: { title: string; content: string[] };
      useOfServices: { title: string; content: string[] };
      fees: { title: string; content: string[] };
      responsibilities: { title: string; content: string[] };
      privacy: { title: string; content: string[] };
      liability: { title: string; content: string[] };
      termination: { title: string; content: string[] };
      governingLaw: { title: string; content: string[] };
      contact: { title: string; content: string[] };
    };
  };
  privacy: {
    title: string;
    effectiveDate: string;
    intro: {
      title: string;
      description: string;
    };
    sections: {
      informationWeCollect: {
        title: string;
        content: string[];
      };
      howWeUse: {
        title: string;
        intro: string;
        content: string[];
      };
      sharingInformation: {
        title: string;
        intro: string;
        content: string[];
        note: string;
      };
      dataSecurity: {
        title: string;
        content: string[];
      };
      dataRetention: {
        title: string;
        content: string[];
      };
      yourRights: {
        title: string;
        intro: string;
        content: string[];
        contact: string;
      };
      cookies: {
        title: string;
        content: string[];
      };
      changes: {
        title: string;
        content: string[];
      };
      contact: {
        title: string;
        content: string[];
      };
    };
  };
}