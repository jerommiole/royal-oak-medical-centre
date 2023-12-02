// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/services", key: "services", label: "Services" },
  { href: "/about", key: "about", label: "About" },
  { href: "/contact", key: "contact", label: "Contact" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Standard",
    icon: "/map.svg",
    variant: "blue",
    description:
      "Standard appointments are scheduled for 10-15 minute intervals. Our fees are deliberately kept low and are based on consultations where the consultation and any related tasks (referrals, reports, result follow-up, etc.) are completed in 15 minutes.",
  },
  {
    title: "Longer",
    icon: "/calendar.svg",
    variant: "blue",
    description:
      "If you think you need more than a 15-minute appointment, please remember to book a longer appointment or plan to return for a second appointment, which will incur an extra fee.",
  },
  {
    title: "Medicals",
    icon: "/tech.svg",
    variant: "blue",
    description:
      "Insurance medicals require 1/2 hour appointments. For any other medicals, please ask the receptionist. Please be specific.",
  },
  {
    title: "Urgent",
    icon: "/location.svg",
    variant: "blue",
    description:
      "If you are acutely unwell, please ring the surgery and ask to speak to the nurse, who will make arrangements. We reserve a small number of same-day appointments for patients who become unwell on the day.",
  },
];

// SERVICES SECTION
export const SERVICES = [
  {
    title: "Primary Care Services",
    icon: "/map.svg",
    variant: "blue",
    listItems: [
      "General Practice and Family Care",
      "Well Child Checks",
      "Well Woman and Well Man Checks",
      "Immunizations and Influenza Vaccinations",
      "Repeat Prescriptions",
      "Accident Care",
    ],
  },
  {
    title: "Specialized Services",
    icon: "/calendar.svg",
    variant: "blue",
    listItems: [
      "Cervical Smear Tests and Breast Checks",
      "Diabetes Clinics",
      "ECG (Electrocardiogram)",
      "Shared Maternity Care",
    ],
  },
  {
    title: "Clinical Procedures",
    icon: "/tech.svg",
    variant: "blue",
    listItems: [
      "Cervical Smear Tests and Breast Checks",
      "Diabetes Clinics",
      "ECG (Electrocardiogram)",
      "Shared Maternity Care",
    ],
  },
  {
    title: "Health and Wellness Services",
    icon: "/location.svg",
    variant: "blue",
    listItems: [
      "Contraception",
      "Nurse Lead Clinics",
      "Nutrition Advice",
      "Skin Cancer Checks",
    ],
  },
];

// GUIDELINE FOR APPOINTMENT SECTION
export const APPOINTMENT_GUIDELINES = [
  {
    title: "Step 1",
    image: "/step1.png",
    desc: "Choose a date and time, then scroll to find an available doctor and appointment that suits you.",
  },
  {
    title: "Step 2",
    image: "/step2.png",
    desc: "If you don't have a Vensa login, click 'I'm new here' and proceed to fill out the patient details. If you're already signed up, click 'login' to continue.",
  },
  {
    title: "Step 3",
    image: "/step3.png",
    desc: "Once you have successfully completed the booking process, a confirmation text message will be sent to your mobile phone.",
  },
  {
    title: "Step 4",
    image: "/step4.png",
    desc: "Once your appointment is confirmed, sign up with Vensa for easy appointment management using just your email and password.",
  },
];

// PRESCRIPTIONS SECTION
export const PRESCRIPTIONS = [
  {
    title: "Step 1",
    image: "/step4.png",
    desc: "On the practice's profile page, select 'Repeat a Prescription.'",
  },
  {
    title: "Step 2",
    image: "/step4.png",
    desc: "If you have previously created a Vensa account, you can use your email address and password to log in. If you do not yet have a Vensa account, select 'Sign up now!' to create one!",
  },
  {
    title: "Step 3",
    image: "/step4.png",
    desc: "Once you have created your account or logged in, you will now be ready to request a repeat prescription. Select the '+' sign to get started.",
  },
  {
    title: "Step 4",
    image: "/step4.png",
    desc: "Select 'Request a Repeat Prescription' and move through the steps to finalize your request.",
  },
];

// FEES
// Schedule of Fees
export const SCHEDULE_FEES = [
  {
    consultation: "0 - 13 years",
    acc: "Free",
    enrolled: "Free",
    casual: "$45",
    csc: "$40",
  },
  {
    consultation: "14 - 17 years",
    acc: "$45",
    enrolled: "$45",
    casual: "$75",
    csc: "$70",
  },
  {
    consultation: "18 - 44 years",
    acc: "$55",
    enrolled: "$55",
    casual: "$95",
    csc: "$85",
  },
  {
    consultation: "18 - 44 years",
    acc: "$55",
    enrolled: "$55",
    casual: "$95",
    csc: "$85",
  },
  {
    consultation: "65 years +",
    acc: "$45",
    enrolled: "$45",
    casual: "$75",
    csc: "$70",
  },
];

// New Services Fees
export const NEW_SERVICES_FEES = [
  {
    service: "Nurse Consultation",
    fee: "$165",
  },
  {
    service: "Iron Infusion",
    fee: "$165",
  },
  {
    service: "Vitamin C Infusion*",
    fee: "$185",
  },
  {
    service: "Smear Procedure",
    fee: "$35",
  },
  {
    service: "Injection Fee",
    fee: "$25",
  },
  {
    service: "Liquid Nitrogen",
    fee: "$28",
  },
  {
    service: "Driving Medical",
    fee: "$95",
  },
  {
    service: "Change of Dressing",
    fee: "$25",
  },
  {
    service: "Removal of Stitches",
    fee: "$25",
  },
  {
    service: "Ear Syringe / Ear Suction",
    fee: "$30",
  },
  {
    service: "Blood Test",
    fee: "$15",
  },
  {
    service: "Blood Pressure",
    fee: "$10",
  },
  {
    service: "Circumcision",
    fee: "$700-$850",
  },
];

// OPERATING HOURS SECTION
export const OPERATING_HOURS = [
  {
    day: "Monday to Friday",
    time: "9:00AM - 5:30PM",
  },
  {
    day: "Saturday",
    time: "9:00AM - 12:00PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Links",
    links: [
      { text: "About ROMC", url: "/about" },
      { text: "Hours & Fees", url: "/fees" },
      { text: "Prescriptions", url: "/prescriptions" },
      { text: "Test Results", url: "/test-results" },
      { text: "Contact Us", url: "/contact" },
    ],
  },
  {
    title: "Our Health Policies & Information",
    links: [
      {
        text: "Enrolling with a PHO",
        url: "https://www.tewhatuora.govt.nz/our-health-system/primary-care-sector/primary-health-organisations/enrolment-with-a-general-practice-and-primary-health-organisation",
      },
      {
        text: "Code of Health and Disability Services Consumers' Rights",
        url: "https://www.hdc.org.nz/your-rights/about-the-code/code-of-health-and-disability-services-consumers-rights/",
      },
      {
        text: "Protecting your personal information",
        url: "https://www.privacy.org.nz/assets/New-order/Resources-/Publications/Brochures-posters/Protecting-your-personal-information-new-brochure/Privacy-Core-Brochure.pdf",
      },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Phone", value: "09 625 9221" },
    { label: "Email", value: "reception@royaloakmedical.co.nz" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};
