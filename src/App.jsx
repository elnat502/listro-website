import BookingForm from "./components/BookingForm";
import { useState } from "react";
import shoe from "./assets/shoe.png";
import logo from "./assets/splash-icon.png";
import beforeImage from "./assets/before.png";
import afterImage from "./assets/after.png";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServicesSection";
import ShoeTypesSection from "./components/ShoeTypesSection";
import ServiceModeSection from "./components/ServiceModeSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
function App() {
  const [activeSection, setActiveSection] = useState("home");
const [hovered, setHovered] = useState(false);
const [selectedService, setSelectedService] = useState(null);
const [menuOpen, setMenuOpen] = useState(false);
const isMobile = window.innerWidth < 768;
  const services = [
  {
    title: "Standard Cleaning",
    icon: "👟",
    desc: "Surface cleaning and fresh finishing.",
    price: "Starting from 19 AED",
    note: "Final quote depends on shoe condition.",
  },
 {
  title: "Deep Cleaning",
   icon: "🧼",
  desc: "Complete inside and outside material treatment.",
  price: "Starting from 29 AED",
  note: "Final quote depends on shoe condition.",
},
  {
    title: "Whitening",
     icon: "✨",
    desc: "Midsole and outsole brightening.",
    price: "Starting from 15 AED",
    note: "Final quote depends on shoe condition.",
  },
  {
  title: "Sole Repair",
  icon: "🔧",
  desc: "Professional sole restoration for damaged footwear.",
  price: "Price on inspection",
  note: "Final quote after damage assessment."
},
  {
    title: "Polish & Shine",
    icon: "⭐",
    desc: "Premium shine treatment for leather shoes.",
    price: "Starting from 20 AED",
    note: "Final quote depends on shoe finish.",
  },
  {
    title: "Leather Care",
     icon: "🛡️",
    desc: "Conditioning and protection for premium leather shoes.",
    price: "Starting from 35 AED",
    note: "Final quote depends on leather material condition."
  },
];

  const shoeTypes = [
    "Sneakers",
    "Leather Shoes",
    "Boots",
    "Heels",
    "Kids Shoes",
    "Sports Shoes",
  ];

  const serviceModes = [
    {
      title: "Onsite Service",
      text: "Cleaner comes to customer location for direct shoe care service.",
    },
    {
      title: "Pickup & Warehouse Cleaning",
      text: "Shoes are collected, cleaned professionally, then delivered back.",
    },
  ];
const fadeStyle = `
@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
  return (
    <div
  style={{
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "Arial",
    minHeight: "100vh",
    width: "100%",
    margin: "0",
    padding: "0",
  }}
>
      <style>{fadeStyle}</style>
      {/* NAVBAR */}
    <Navbar
  logo={logo}
  isMobile={isMobile}
  activeSection={activeSection}
  setActiveSection={setActiveSection}
/>

{/* HOME */}

     {activeSection === "home" && (
  <HomeSection
    isMobile={isMobile}
    hovered={hovered}
    setHovered={setHovered}
    setActiveSection={setActiveSection}
    shoe={shoe}
    beforeImage={beforeImage}
    afterImage={afterImage}
  />
)}

      {/* SERVICES */}
    {activeSection === "services" && (
  <ServicesSection
    services={services}
    selectedService={selectedService}
    setSelectedService={setSelectedService}
  />
)}


      {/* SHOE TYPES */}
     {activeSection === "types" && (
  <ShoeTypesSection shoeTypes={shoeTypes} />
)}
    {/* SERVICE MODES */}
{activeSection === "mode" && (
  <ServiceModeSection serviceModes={serviceModes} />
)}

{/* CONTACT */}
{activeSection === "contact" && <ContactSection />}

      {/* FOOTER */}
      <FooterSection
  isMobile={isMobile}
  setActiveSection={setActiveSection}
/>
    </div>
  );
}

export default App;