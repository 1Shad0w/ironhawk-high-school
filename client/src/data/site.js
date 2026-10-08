// Central site configuration: identity, navigation, contacts, and quick links.

export const school = {
  name: "Ironhawk High School",
  shortName: "Ironhawk",
  mascot: "Ironhawk",
  tagline: "Learn. Grow. Achieve.",
  motto: "One School. One Community.",
  district: "Ironhawk Unified School District",
  address: {
    line1: "123 Ironhawk Way",
    city: "Ironhawk",
    state: "USA",
    zip: ""
  },
  phone: "(555) 010-2026",
  fax: "(555) 010-2027",
  email: "info@ironhawkhs.edu",
  hours: "Office Hours: 7:30 AM – 4:00 PM",
  founded: 1974
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Athletics", to: "/athletics" },
  { label: "Student Life", to: "/student-life" },
  { label: "Campus", to: "/campus" },
  { label: "News & Events", to: "/news" },
  { label: "Contact", to: "/contact" }
];

export const utilityLinks = [
  { label: "Students", to: "/portal" },
  { label: "Parents", to: "/portal" },
  { label: "Staff", to: "/directory" },
  { label: "Calendar", to: "/calendar" },
  { label: "Directory", to: "/directory" }
];

export const quickLinks = [
  {
    label: "Student Portal",
    description: "Grades, assignments & schedules",
    to: "/portal",
    icon: "student"
  },
  {
    label: "Parent Portal",
    description: "Progress & conference sign-up",
    to: "/portal",
    icon: "parent"
  },
  {
    label: "School Calendar",
    description: "Events, breaks & important dates",
    to: "/calendar",
    icon: "calendar"
  },
  {
    label: "Bell Schedule",
    description: "Daily class periods & times",
    to: "/bell-schedule",
    icon: "bell"
  },
  {
    label: "Lunch Menu",
    description: "This week in the Hawk Commons",
    to: "/lunch-menu",
    icon: "lunch"
  },
  {
    label: "Attendance",
    description: "Report an absence online",
    to: "/attendance",
    icon: "attendance"
  }
];

export const stats = [
  { value: "2,400+", label: "Students" },
  { value: "95%", label: "Graduation Rate" },
  { value: "40+", label: "Clubs & Activities" },
  { value: "18:1", label: "Student–Teacher Ratio" }
];

export const social = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "X", href: "https://x.com", icon: "x" }
];

export const footerResources = [
  { label: "Student Portal", to: "/portal" },
  { label: "Parent Portal", to: "/portal" },
  { label: "Calendar", to: "/calendar" },
  { label: "Attendance", to: "/attendance" },
  { label: "Lunch Menu", to: "/lunch-menu" },
  { label: "Staff Directory", to: "/directory" }
];

export const footerQuickLinks = [
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Athletics", to: "/athletics" },
  { label: "Student Life", to: "/student-life" },
  { label: "Campus", to: "/campus" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" }
];
