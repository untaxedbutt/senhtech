interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export function useFAQs(): FAQ[] {
  return [
    {
      id: 1,
      question: "How quickly can AI automation be implemented in my business?",
      answer: "Implementation time varies based on your needs, but most of our solutions can be deployed within 2-4 weeks. We ensure a smooth transition with minimal disruption to your operations."
    },
    {
      id: 2,
      question: "What kind of ROI can I expect from AI automation?",
      answer: "Our clients typically see ROI within 3-6 months, with cost reductions of 30-50% in automated processes and significant improvements in customer satisfaction metrics."
    },
    {
      id: 3,
      question: "Is my data safe with AI automation?",
      answer: "Absolutely. We implement enterprise-grade security measures and comply with all relevant data protection regulations. Your data is encrypted and securely stored."
    },
    {
      id: 4,
      question: "Do I need technical expertise to use your AI solutions?",
      answer: "No technical expertise is required. We provide user-friendly interfaces and comprehensive training for your team, along with 24/7 support."
    }
  ];
}