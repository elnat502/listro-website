import { useState } from "react";
import shoe from "./assets/shoe.png";
import logo from "./assets/splash-icon.png";
import beforeImage from "./assets/before.png";
import afterImage from "./assets/after.png";
function App() {
  const [activeSection, setActiveSection] = useState("home");
const [hovered, setHovered] = useState(false);
const [selectedService, setSelectedService] = useState(null);
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
      }}
    >
      <style>{fadeStyle}</style>
      {/* NAVBAR */}
     <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    padding: window.innerWidth < 768 ? "14px 12px" : "18px 60px",
    borderBottom: "1px solid #111",
    backgroundColor: "#000",
    alignItems: "center",
    flexWrap: "nowrap",
    overflowX: "auto",
  }}
>
 <img
  src={logo}
  alt="Listro Logo"
  style={{
    width: "160px",
    height: "85px",
    objectFit: "contain",
    display: "block",
  }}
/>

       <div
  style={{
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    whiteSpace: "nowrap",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
>
         <span
  onClick={() => setActiveSection("home")}
  style={{
    cursor: "pointer",
    color: activeSection === "home" ? "#d4af37" : "#fff",
    borderBottom: activeSection === "home" ? "2px solid #d4af37" : "none",
    paddingBottom: "6px",
    transition: "0.3s",
  }}
>
  Home
</span>

         <span
  onClick={() => setActiveSection("services")}
  style={{
    cursor: "pointer",
    color: activeSection === "services" ? "#d4af37" : "#fff",
    borderBottom: activeSection === "services" ? "2px solid #d4af37" : "none",
    paddingBottom: "6px",
    transition: "0.3s",
  }}
>
  Services
</span>

          <span
  onClick={() => setActiveSection("types")}
  style={{
    cursor: "pointer",
    color: activeSection === "types" ? "#d4af37" : "#fff",
    borderBottom: activeSection === "types" ? "2px solid #d4af37" : "none",
    paddingBottom: "6px",
    transition: "0.3s",
  }}
>
  Shoe Types
</span>

          <span
  onClick={() => setActiveSection("modes")}
  style={{
    cursor: "pointer",
    color: activeSection === "modes" ? "#d4af37" : "#fff",
    borderBottom: activeSection === "modes" ? "2px solid #d4af37" : "none",
    paddingBottom: "6px",
    transition: "0.3s",
  }}
>
  Service Mode
</span>

          <span
  onClick={() => setActiveSection("contact")}
  style={{
    cursor: "pointer",
    color: activeSection === "contact" ? "#d4af37" : "#fff",
    borderBottom: activeSection === "contact" ? "2px solid #d4af37" : "none",
    paddingBottom: "6px",
    transition: "0.3s",
  }}
>
  Contact
</span>
        </div>
      </div>

      {/* HOME */}
      {activeSection === "home" && (
        <div
          style={{
            padding: "80px 60px",
            animation: "fadeSlide 0.5s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: "550px" }}>
              <h1 style={{ fontSize: "72px", color: "#d4af37" }}>Listro</h1>

              <h2 style={{ fontSize: "42px", color: "#fff" }}>
                Premium Shoe Care in UAE
              </h2>

              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "1.8",
                  color: "#ccc",
                }}
              >
                Professional sneaker, leather, suede and premium footwear care —
                pickup and delivery available.
              </p>

                       
 <a
href="https://wa.me/971506221783?text=Hello%20Listro,%0A%0AI%20would%20like%20to%20book%20shoe%20cleaning.%0A%0AShoe%20type:%20____%0AService%20needed:%20____%0APickup%20location:%20____%0APreferred%20time:%20____"

  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
>
  <button
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    style={{
      backgroundColor: hovered ? "#f5d76e" : "#d4af37",
      color: "#000",
      padding: "18px 34px",
      border: "none",
      borderRadius: "10px",
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
      transform: hovered ? "translateY(-2px)" : "translateY(0px)",
      transition: "all 0.3s ease",
      boxShadow: hovered
        ? "0 8px 20px rgba(212,175,55,0.35)"
        : "none",
    }}
  >
    WhatsApp Booking
  </button>
</a>
<button
  onClick={() => setActiveSection("services")}
  style={{
    marginLeft: "15px",
    display: "inline-block",
    backgroundColor: "transparent",
    color: "#d4af37",
    padding: "18px 34px",
    border: "1px solid #d4af37",
    borderRadius: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  View Services
</button>
<p
  style={{
    marginTop: "12px",
    color: "#aaa",
    fontSize: "14px",
  }}
>
  Fast response • Pickup available across UAE
</p>
            </div>

            <img src={shoe} alt="shoe" style={{ width: "420px" }} />
          </div>

          {/* MOTTO SECTION */}
          <div
            style={{
              width: "100%",
              marginTop: "60px",
              textAlign: "center",
              borderTop: "1px solid #111",
              paddingTop: "50px",
            }}
          >
            <h2
              style={{
                color: "#d4af37",
                fontSize: "34px",
                marginBottom: "20px",
              }}
            >
              We Keep Your Steps Sharp
            </h2>

            <p
              style={{
                color: "#ccc",
                fontSize: "20px",
                maxWidth: "850px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Listro delivers premium shoe care with trusted handling, modern
              convenience, and professional finishing designed for busy lifestyles
              in UAE.
            </p>
            <div
  style={{
    marginTop: "70px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "25px",
  }}
>
  <div
    style={{
      backgroundColor: "#111",
      padding: "30px",
      borderRadius: "15px",
      textAlign: "center",
    }}
  >
    <h3 style={{ color: "#d4af37" }}>Trusted Handling</h3>
    <p style={{ color: "#ccc" }}>
      Every pair is treated carefully using premium shoe-care methods.
    </p>
  </div>

  <div
    style={{
      backgroundColor: "#111",
      padding: "30px",
      borderRadius: "15px",
      textAlign: "center",
    }}
  >
    <h3 style={{ color: "#d4af37" }}>Pickup & Delivery</h3>
    <p style={{ color: "#ccc" }}>
      Convenient collection and return service designed for busy schedules.
    </p>
  </div>

  <div
    style={{
  backgroundColor: "#111",
  padding: "30px",
  borderRadius: "15px",
  textAlign: "center",
  transition: "0.3s",
  cursor: "pointer",
  boxShadow: "0 0 20px rgba(212,175,55,0.08)",
}}
  >
    <h3 style={{ color: "#d4af37" }}>Premium Finish</h3>
    <p style={{ color: "#ccc" }}>
      Professional finishing that restores freshness and presentation.
    </p>
  </div>
</div>
  <div style={{ padding: "40px 40px 20px", textAlign: "center" }}>
  <h2
    style={{
      color: "#d4af37",
      fontSize: "42px",
      marginBottom: "15px",
    }}
  >
    Real Results
  </h2>

  <p
    style={{
      color: "#aaa",
      fontSize: "18px",
      marginBottom: "50px",
    }}
  >
    See how Listro restores shoes professionally.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,420px))",
      gap: "30px",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        backgroundColor: "#111",
        padding: "15px",
        borderRadius: "20px",
      }}
    >
      <img
        src={beforeImage}
        alt="Before cleaning"
       style={{
  width: "100%",
  maxWidth: "220px",
  height: "auto",
  borderRadius: "15px",
  marginBottom: "15px",
  objectFit: "contain",
}}
      />
      <p style={{ color: "#d4af37", fontWeight: "bold" }}>Before</p>
    </div>

    <div
      style={{
        backgroundColor: "#111",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <img
        src={afterImage}
        alt="After cleaning"
       style={{
  width: "100%",
  maxWidth: "220px",
  height: "auto",
  borderRadius: "15px",
  marginBottom: "15px",
  objectFit: "contain",
}}
      />
      <p style={{ color: "#d4af37", fontWeight: "bold" }}>After</p>
        </div>
    </div>
  </div>
          </div>
        </div>
      )}

      {/* SERVICES */}
      {activeSection === "services" && (
  <div
    style={{
      padding: "60px",
      animation: "fadeSlide 0.5s ease",
    }}
  >
          <h2
            style={{
              textAlign: "center",
              color: "#d4af37",
              fontSize: "42px",
              marginBottom: "50px",
            }}
          >
            Our Services
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
            }}
          >
            {services.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(item)}
                 onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
   e.currentTarget.style.boxShadow = "0 0 18px rgba(212,175,55,0.12)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 0 20px rgba(212,175,55,0.08)";
  }}
 
                style={{
  backgroundColor: "#111",
  padding: "30px",
  borderRadius: "18px",
  textAlign: "center",
  boxShadow: "0 0 20px rgba(212,175,55,0.08)",
  transition: "0.3s",
  cursor: "pointer",
  minHeight: "180px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}}
              >
                <h3 style={{ color: "#d4af37" }}>{item.title}</h3>
               <p style={{ color: "#ddd", fontSize: "17px", marginBottom: "12px" }}>
  {item.desc}
</p>

<p
  style={{
    color: "#d4af37",
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "8px",
  }}
>
 {item.price}
</p>

<p
  style={{
    color: "#777",
    fontSize: "14px",
    marginTop: "8px",
  }}
>
  {item.note}
</p>
              </div>
            ))}
          </div>
        </div>
      )}


{selectedService && (
  <>
  <div
    onClick={() => setSelectedService(null)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        backgroundColor: "#111",
        padding: "40px",
        borderRadius: "20px",
        width: "420px",
        textAlign: "center",
        boxShadow: "0 0 30px rgba(212,175,55,0.2)",
        position: "relative",
      }}
    >
      <div
        onClick={() => setSelectedService(null)}
        style={{
          position: "absolute",
          top: "15px",
          right: "20px",
          color: "#d4af37",
          fontSize: "24px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ×
      </div>

      <div
        style={{
          fontSize: "52px",
          marginBottom: "15px",
          filter: "drop-shadow(0 0 8px rgba(212,175,55,0.35))",
        }}
      >
        {selectedService.icon}
      </div>

      <h2 style={{ color: "#d4af37" }}>{selectedService.title}</h2>

      <p style={{ color: "#ccc" }}>{selectedService.desc}</p>

      <p style={{ color: "#d4af37", fontWeight: "bold" }}>
        {selectedService.price}
      </p>

      <p style={{ color: "#777" }}>{selectedService.note}</p>

      <p style={{ color: "#999", marginTop: "10px" }}>
        Estimated turnaround: 24–48 hours
      </p>

      <button
        onClick={() =>
          window.open(
            `https://wa.me/971506221783?text=Hello%20Listro,%20I%20would%20like%20to%20book%20${selectedService.title}%20service.%20Please%20share%20available%20pickup%20timing.`,
            "_blank"
          )
        }
        style={{
          marginTop: "20px",
          backgroundColor: "#d4af37",
          color: "#000",
          border: "none",
          padding: "12px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Book via WhatsApp
      </button>
    </div>
  </div>

  </>
)}


      {/* SHOE TYPES */}
      {activeSection === "types" && (
       <div
    style={{
      padding: "60px",
      animation: "fadeSlide 0.5s ease",
    }}
  >
          <h2
            style={{
              textAlign: "center",
              color: "#d4af37",
              fontSize: "42px",
              marginBottom: "50px",
            }}
          >
            Shoe Types We Handle
          </h2>

          <div
            style={{
           display: "grid",
gridTemplateColumns: window.innerWidth < 768 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
gap: "20px",
justifyItems: "center", 
            }}
          >
            {shoeTypes.map((item, index) => (
              <div
                key={index}
                onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-5px)";
  e.currentTarget.style.boxShadow = "0 0 18px rgba(212,175,55,0.12)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "0 0 15px rgba(212,175,55,0.08)";
}}
               style={{
  backgroundColor: "#111",
  padding: "28px",
  borderRadius: "18px",
  textAlign: "center",
  boxShadow: "0 0 15px rgba(212,175,55,0.08)",
  transition: "0.3s",
  cursor: "pointer",
  minHeight: "160px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}}
              >
              <div style={{ fontSize: "42px", marginBottom: "15px" }}>
  {index === 0 && "👟"}
  {index === 1 && "👞"}
  {index === 2 && "🥾"}
  {index === 3 && "👠"}
  {index === 4 && "🧒"}
 {index === 5 && "⚽"}
</div>

<div style={{ color: "#fff", fontSize: "24px", fontWeight: "600" }}>
  {item}
</div>
              </div>
            ))}
          </div>
        </div>
      )}

    {/* SERVICE MODES */}
{activeSection === "modes" && (
  <div
   style={{ 
    padding: "40px 60px",
animation: "fadeSlide 0.5s ease",
     }}
     >
    <h2
      style={{
        textAlign: "center",
        color: "#d4af37",
        fontSize: "42px",
        marginBottom: "50px",
      }}
    >
      Service Modes
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "25px",
      }}
    >
      {serviceModes.map((item, index) => (
        <div
          key={index}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 0 28px rgba(212,175,55,0.18)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 0 18px rgba(212,175,55,0.08)";
          }}
          style={{
            backgroundColor: "#111",
            padding: "35px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 0 18px rgba(212,175,55,0.08)",
            transition: "0.3s",
            cursor: "pointer",
            minHeight: "180px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              color: "#d4af37",
              fontSize: "24px",
              marginBottom: "15px",
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              color: "#ccc",
              fontSize: "18px",
              lineHeight: "1.7",
            }}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
)}

{/* CONTACT */}
{activeSection === "contact" && (
  <div
    style={{
      padding: "70px 40px",
      animation: "fadeSlide 0.5s ease",
      textAlign: "center",
      backgroundColor: "#050505",
      borderTop: "1px solid #222",
    }}
  >
    <h2
      style={{
        color: "#d4af37",
        fontSize: "42px",
        marginBottom: "25px",
      }}
    >
      Contact Us
    </h2>

    <p
      style={{
        color: "#ccc",
        fontSize: "20px",
        marginBottom: "14px",
      }}
    >
      📍 Dubai, UAE
    </p>

    <p
      style={{
        color: "#ccc",
        fontSize: "18px",
        marginBottom: "14px",
      }}
    >
      📲 WhatsApp Booking Available
    </p>

    <p
      style={{
        color: "#ccc",
        fontSize: "18px",
        marginBottom: "14px",
      }}
    >
      ⏰ Daily Service Hours: 9:00 AM – 10:00 PM
    </p>

    <p
      style={{
        color: "#777",
        fontSize: "15px",
        marginTop: "20px",
      }}
    >
      Fast pickup response across UAE
    </p>
  </div>
)}

{/* FOOTER */}
<div
  style={{
    backgroundColor: "#0a0a0a",
    padding: "50px 30px 25px",
    textAlign: "center",
    borderTop: "1px solid rgba(212,175,55,0.15)",
    marginTop: "60px",
  }}
>
  <h3
    style={{
      color: "#d4af37",
      fontSize: "28px",
      marginBottom: "15px",
    }}
  >
    Listro
  </h3>

  <p
    style={{
      color: "#aaa",
      fontSize: "16px",
      marginBottom: "10px",
    }}
  >
    Premium Shoe Cleaning & Care Service in UAE
  </p>

  <p
    style={{
      color: "#777",
      fontSize: "15px",
      marginBottom: "20px",
    }}
  >
    Pickup • Onsite • Premium Care
  </p>

  <button
    onClick={() =>
      window.open(
       "https://wa.me/971506221783?text=Hello%20Listro,%20I%20would%20like%20to%20book%20a%20shoe%20cleaning%20service.%20Please%20share%20available%20pickup%20timing",
        "_blank"
      )
    }
    style={{
      backgroundColor: "#d4af37",
      color: "#000",
      border: "none",
      padding: "12px 24px",
      borderRadius: "10px",
      fontWeight: "bold",
      cursor: "pointer",
      marginBottom: "25px",
    }}
  >
    Book via WhatsApp
  </button>

  <p
    style={{
      color: "#555",
      fontSize: "13px",
    }}
  >
    © 2026 Listro. All rights reserved.
  </p>
    </div>
  </div>
)}

export default App;