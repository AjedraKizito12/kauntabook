// NAVIGATION
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

export const NAV_LINKS: NavigationItem[] = [
  { href: "#home-section", current: false, name: "Home" },
  { href: "#faq-section", current: false, name: "How it Works?" },
  { href: "#features-section", current: false, name: "Features" },
  { href: "#pricing-section", current: false, name: "Pricing" },
  { href: "#footer-section", current: false, name: "About Us" },
];
// TESTIMONIES
interface TestimoniesItem {
  name: string;
  image: string;
  description: string;
  link: string;
}

export const TESTIMONIES: TestimoniesItem[] = [
  {
    name: "Anisha Li",
    description:
      "Kauntabook supercharges our workflow, maintaining visibility on milestones, keeping the team motivated.",
    image: "/images/profile/person-2.png",
    link: "Learn more",
  },
  {
    name: "Bravo Richard",
    description:
      "Kauntabook supercharges workflow, maintaining visibility on milestones, keeping the team motivated.",
    image: "/images/profile/person-1.png",
    link: "Learn more",
  },
  {
    name: "Alexandra Chen",
    description:
      "As a freelancer, Kauntabook's flexibility and customization streamline financial processes, giving more time for focused work.",
    image: "/images/profile/person-3.png",
    link: "Learn more",
  },
  {
    name: "Samuel Rodriguez",
    description:
      "Kauntabook brings clarity to our financial landscape, helping small businesses understand and manage finances seamlessly.",
    image: "/images/profile/person-4.png",
    link: "Learn more",
  },
  {
    name: "Emily Parker",
    description:
      "Kauntabook stands out with a user-friendly interface and robust functionality, making it an integral part of my business routine.",
    image: "/images/profile/person-1.png",
    link: "Learn more",
  },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/images/profile/person-1.png",
  "/images/profile/person-2.png",
  "/images/profile/person-3.png",
  "/images/profile/person-4.png",
];

// FEATURES SECTION

export const FEATURES = [
  {
    title: "Real-time Financial Reports",
    icon: "/map.svg",
    variant: "green",
    description:
      "Access real-time financial reports even without an internet connection. Stay informed about your business's financial health anytime, anywhere.",
  },
  {
    title: "Set Budgetary Schedules",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Plan and schedule budgetary activities with ease. Ensure timely financial planning and adherence to budget constraints.",
  },

  {
    title: "Monthly Financial Expansion",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Experience monthly financial growth with our system. Join a global community of businesses sharing their best financial practices and insights.",
  },

  {
    title: "Secure Cloud Storage",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Store financial data securely in the cloud, ensuring accessibility, backup, and protection against data loss.",
  },
  {
    title: "Expense Tracking",
    icon: "/tech.svg",
    variant: "orange",
    description:
      "Keep track of business expenses, categorize them, and generate insightful reports for better financial decision-making.",
  },
  {
    title: "Real-time Financial Reporting",
    icon: "/tech.svg",
    variant: "orange",
    description:
      "Access real-time financial reports and analytics to monitor the financial health of your business at any moment.",
  },
];

// FOOTER SECTION

export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      { href: "#home-section", current: false, name: "About kauntabook" },
      { href: "#feature-section", current: false, name: "Press Releases" },
      { href: "#home-section", current: false, name: "Environment" },
      { href: "#home-section", current: false, name: "Jobs" },
      { href: "#home-section", current: false, name: "Privacy Policy" },
      { href: "#footer-section", current: false, name: "Contact Us" },
    ],
  },
  {
    title: "Our Community",
    links: [
      { href: "#financing-section", current: false, name: "Financing" },
      { href: "#analytics-section", current: false, name: "Analytics" },
      {
        href: "#visualization-section",
        current: false,
        name: "Data visualization",
      },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "info@kauntabook.com" },
  ],
};

interface SocialsItem {
  name: string;
  image: string;
  href: string;
}

export const SOCIALS = {
  title: "Social",
  links: [
    {
      name: "facebook",
      image: "images/socials/facebook.svg",
      href: "#facebook",
    },
    {
      name: "instagram",
      image: "images/socials/instagram.svg",
      href: "#instagram",
    },
    {
      name: "twitter",
      image: "images/socials/twitter.svg",
      href: "#twitter",
    },
    {
      name: "youtube",
      image: "images/socials/youtube.svg",
      href: "#youtube",
    },
    {
      name: "wordpress",
      image: "images/socials/wordpress.svg",
      href: "#wordpress",
    },
  ],
};

export const FAQ_LIST = [
  {
    title: "How can I simplify financial record-keeping?",
    description:
      "Kauntabook makes financial record-keeping easy. Simply use our intuitive interface to record all your financial transactions, including income and expenses.",
  },
  {
    title: "Are real-time financial reports available?",
    description:
      "Absolutely! Kauntabook provides real-time financial reports and analytics, allowing you to monitor your business's financial health anytime, anywhere.",
  },
  {
    title: "What types of financial reports does Kauntabook offer?",
    description:
      "Kauntabook offers a variety of financial reports, including comprehensive profit and loss statements, balance sheets, and detailed cash flow statements.",
  },
  {
    title: "Can I use Kauntabook offline?",
    description:
      "Yes, Kauntabook is designed for offline use, ensuring that you can continue managing your finances seamlessly, even without an internet connection.",
  },
  {
    title: "How can I add new business locations?",
    description:
      "Adding new business locations with Kauntabook is a breeze. Navigate to settings, and you'll find an option to effortlessly add new business locations and expand your business profile.",
  },
  {
    title: "What subscription packages does Kauntabook offer?",
    description:
      "Kauntabook offers flexible subscription packages tailored to your business needs. Choose from daily, weekly, monthly, or yearly subscriptions to access premium features.",
  },
  {
    title: "Can I add and manage multiple staff members?",
    description:
      "Absolutely! Kauntabook allows you to efficiently add and manage multiple staff members with distinct permissions, ensuring secure and collaborative financial management.",
  },
  {
    title: "How do I track and analyze expenses in Kauntabook?",
    description:
      "Tracking expenses in Kauntabook is a breeze. Enter your expenses, categorize them, and leverage insightful analytics to make informed financial decisions.",
  },
  {
    title: "What is Kauntabook's 'Business Registration' feature?",
    description:
      "Kauntabook's 'Business Registration' feature simplifies the registration process. Visit the 'More' tab, select 'Business Registration,' and follow the steps to provide your business information and complete the registration.",
  },
  {
    title: "How can I evaluate my business performance with Kauntabook?",
    description:
      "Evaluate your business performance with ease. Navigate to the 'More' tab, select 'Business Performance,' choose your desired period, and gain valuable insights from detailed reports.",
  },
];
