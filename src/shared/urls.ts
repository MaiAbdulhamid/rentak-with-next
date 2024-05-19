// append urls here, DO NOT remove this line

const URLS = {
  home: "/",
  notFound: "/404",
  faq: "https://rent-ak.com/Home/FAQs",
  auth: {
    login: "/login-register",
    forgetPassword: "/forget-password",
    resetPassword: "/reset-password",
    register: "/register",
    verify: "/verify",
    verifyForgetPassword: "/verify-forget-password",
  },
  settings: "/settings",
  notifications: "/notifications",
  wallet: "/wallet",
  invoices: "/invoices",
  rentPayment: "/rent-payment",
  rentCollection: "/rent-collection",
  maintenancePayment: "/maintenance-payment",
  units: "/units",

  pages: {
    aboutUs: "/about-us",
    termsConditions: "/terms-conditions",
    privacyPolicy: "/privacy-policy",
  },
  landlord: "#",
  tenants: "#",

  //Pages
  aboutUs: "#",
  projects: "#",
  contactUs: "https://rent-ak.com/Home/ContactUs",
  team: "#",
  services: "#",

  //Services
  kitchen: "#",
  livingArea: "#",
  bathroom: "#",
  dinningHall: "#",
  bedroom: "#",
  serviceOne: "",
  serviceTwo: "",
  serviceThree: "",
  serviceFour: "",

  //Properties
  unit: "/unit/:id",
  property: (property: { id: string }) =>
    `/unit/${property.id}` ||
    `https://rent-ak.com/Listing/Details/${property.id}`,
  //Contract
  contract: "/contract",
  survey: "/survey/:id",

  //Social Media
  facebook: "https://www.facebook.com/Rentakapp/",
  instagram: "https://www.instagram.com/rentakapp/",
  whatsapp: "https://wa.me/+201111111541",
  linkedin: "https://www.linkedin.com/company/rentak-app/",
  //Contact Info
  mailTo: "mailto:Info@rent-ak.com",
  tel: "tel:+201111111541",
  address: `https://www.google.com/maps/@30.080352032099128,31.01614931151753,10z`,
};

export default URLS;
