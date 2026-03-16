import React from "react";

export default function Navbar({
logo,
isMobile,
activeSection,
setActiveSection,
}) {
return (
<div
style={{
display: "flex",
justifyContent: "space-between",
padding: isMobile ? "14px 16px" : "18px 60px",
borderBottom: "1px solid #111",
backgroundColor: "#000",
alignItems: "center",
}}
>
{/* Logo */}
<img
src={logo}
alt="Listro Logo"
style={{
width: isMobile ? "100px" : "160px",
height: isMobile ? "55px" : "85px",
objectFit: "contain",
}}
/>

  {/* Desktop Navigation */}
  <div
    style={{
      display: isMobile ? "none" : "flex",
      gap: "22px",
    }}
  >
    <span
      onClick={() => setActiveSection("home")}
      style={{
        cursor: "pointer",
        color: activeSection === "home" ? "#d4af37" : "#fff",
      }}
    >
      Home
    </span>

    <span
      onClick={() => setActiveSection("services")}
      style={{
        cursor: "pointer",
        color: activeSection === "services" ? "#d4af37" : "#fff",
      }}
    >
      Services
    </span>

    <span
      onClick={() => setActiveSection("types")}
      style={{
        cursor: "pointer",
        color: activeSection === "types" ? "#d4af37" : "#fff",
      }}
    >
      Shoe Types
    </span>

    <span
      onClick={() => setActiveSection("mode")}
      style={{
        cursor: "pointer",
        color: activeSection === "mode" ? "#d4af37" : "#fff",
      }}
    >
      Service Mode
    </span>

    <span
      onClick={() => setActiveSection("contact")}
      style={{
        cursor: "pointer",
        color: activeSection === "contact" ? "#d4af37" : "#fff",
      }}
    >
      Contact
    </span>
  </div>

  {/* Mobile Hamburger */}
  {isMobile && (
    <div
      style={{
        color: "#d4af37",
        fontSize: "28px",
        cursor: "pointer",
      }}
    >
      ☰
    </div>
  )}
</div>

);
}
