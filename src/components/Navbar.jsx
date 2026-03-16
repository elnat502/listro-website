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
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "14px" : "0",
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Listro Logo"
        style={{
          width: isMobile ? "120px" : "160px",
          height: isMobile ? "65px" : "85px",
          objectFit: "contain",
        }}
      />

      {/* Navigation */}
      <div
  style={{
    display: "flex",
    gap: isMobile ? "10px" : "22px",
    flexWrap: "wrap",
    justifyContent: "center",
    fontSize: isMobile ? "13px" : "18px",
    maxWidth: isMobile ? "260px" : "none",
    lineHeight: "1.8",
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
    </div>
  );
}