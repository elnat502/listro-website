import React, { useState } from "react";

export default function Navbar({
  logo,
  isMobile,
  activeSection,
  setActiveSection,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItemStyle = (section) => ({
    cursor: "pointer",
    color: activeSection === section ? "#d4af37" : "#fff",
    padding: "14px 0",
    borderBottom: "1px solid #222",
    fontSize: "18px",
    letterSpacing: "1px",
    width: "100%",
    textAlign: "left",
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: isMobile ? "space-between" : "space-between",
          padding: isMobile ? "18px 16px" : "18px 60px",
          borderBottom: "1px solid #111",
          backgroundColor: "#000",
          alignItems: "center",
          flexDirection: isMobile ? "row" : "column",
          gap: isMobile ? "0" : "14px",
          position: "relative",
        }}
      >
        {/* Mobile Hamburger */}
        {isMobile && (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              color: "#fff",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            ☰
          </div>
        )}

        {/* Logo */}
        <img
          src={logo}
          alt="Listro Logo"
          style={{
            width: isMobile ? "140px" : "160px",
            height: "auto",
            maxWidth: "none",
            display: "block",
            flexShrink: 0,
            objectFit: "contain",
          }}
        />

        {/* Desktop Navigation */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "22px",
              flexWrap: "wrap",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: "600",
              letterSpacing: "0.3px",
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
        )}
      </div>

      {/* Premium Mobile Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            backgroundColor: "#000",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div onClick={() => { setActiveSection("home"); setMenuOpen(false); }} style={menuItemStyle("home")}>
            Home
          </div>

          <div onClick={() => { setActiveSection("services"); setMenuOpen(false); }} style={menuItemStyle("services")}>
            Services
          </div>

          <div onClick={() => { setActiveSection("types"); setMenuOpen(false); }} style={menuItemStyle("types")}>
            Shoe Types
          </div>

          <div onClick={() => { setActiveSection("mode"); setMenuOpen(false); }} style={menuItemStyle("mode")}>
            Service Mode
          </div>

          <div onClick={() => { setActiveSection("contact"); setMenuOpen(false); }} style={menuItemStyle("contact")}>
            Contact
          </div>

          <div
            style={{
              padding: "14px 0",
              color: "#888",
              fontSize: "18px",
              letterSpacing: "1px",
            }}
          >
            About Listro
          </div>
        </div>
      )}
    </>
  );
}