import React from "react";

export default function FooterSection({ isMobile, setActiveSection }) {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/971506221783?text=Hello%20Listro,%20I%20would%20like%20to%20book%20a%20shoe%20cleaning%20service.%20Please%20share%20pickup%20time%20and%20pricing",
      "_blank"
    );
  };

  const linkStyle = {
    color: "#bbb",
    fontSize: "15px",
    cursor: "pointer",
    marginBottom: "12px",
    display: "block",
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#0a0a0a",
          padding: isMobile ? "50px 22px 25px" : "60px 50px 30px",
          textAlign: "center",
          borderTop: "1px solid rgba(212,175,55,0.15)",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr 1fr",
            gap: isMobile ? "28px" : "40px",
            textAlign: isMobile ? "center" : "left",
            alignItems: "start",
          }}
        >
          {/* Brand Block */}
          <div>
            <h3
              style={{
                color: "#d4af37",
                fontSize: isMobile ? "30px" : "32px",
                marginBottom: "14px",
              }}
            >
              Listro
            </h3>

            <p
              style={{
                color: "#aaa",
                fontSize: "16px",
                lineHeight: "1.7",
                marginBottom: "12px",
              }}
            >
              Premium Shoe Cleaning & Care Service in UAE
            </p>

            <p
              style={{
                color: "#777",
                fontSize: "15px",
                marginBottom: "18px",
              }}
            >
              Pickup • Onsite • Premium Care
            </p>

            <p
              style={{
                color: "#888",
                fontSize: "15px",
                lineHeight: "1.8",
                marginBottom: "8px",
              }}
            >
              📍 UAE
            </p>

            <a
  href="tel:+971506221783"
  style={{
    color: "#888",
    fontSize: "15px",
    lineHeight: "1.8",
    marginBottom: "8px",
    textDecoration: "none",
    display: "block",
  }}
>
  📞 +971 50 622 1783
</a>

            <p
              style={{
                color: "#888",
                fontSize: "15px",
                lineHeight: "1.8",
              }}
            >
              🕒 Daily pickup & delivery available
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "#d4af37",
                fontSize: "18px",
                marginBottom: "18px",
                letterSpacing: "0.5px",
              }}
            >
              Quick Links
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
              }}
            >
              <span
                onClick={() => setActiveSection?.("home")}
                style={linkStyle}
              >
                Home
              </span>

              <span
                onClick={() => setActiveSection?.("services")}
                style={linkStyle}
              >
                Services
              </span>

              <span
                onClick={() => setActiveSection?.("types")}
                style={linkStyle}
              >
                Shoe Types
              </span>

              <span
                onClick={() => setActiveSection?.("mode")}
                style={linkStyle}
              >
                Service Mode
              </span>

              <span
                onClick={() => setActiveSection?.("contact")}
                style={linkStyle}
              >
                Contact
              </span>
            </div>
          </div>

          {/* Booking Block */}
          <div>
            <h4
              style={{
                color: "#d4af37",
                fontSize: "18px",
                marginBottom: "18px",
                letterSpacing: "0.5px",
              }}
            >
              Book Instantly
            </h4>

            <p
              style={{
                color: "#aaa",
                fontSize: "15px",
                lineHeight: "1.8",
                marginBottom: "18px",
              }}
            >
              Message us directly on WhatsApp for fast booking, pickup timing,
              and service support.
            </p>

            <button
              onClick={openWhatsApp}
              style={{
                backgroundColor: "#d4af37",
                color: "#000",
                border: "none",
                padding: "12px 24px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "12px",
                minWidth: isMobile ? "100%" : "auto",
              }}
            >
              Book via WhatsApp
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div
          style={{
            marginTop: "35px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(212,175,55,0.08)",
          }}
        >
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

      {/* Floating WhatsApp Button */}
     <button className="whatsapp-float"
  onClick={openWhatsApp}
  aria-label="Chat on WhatsApp"
  style={{
  position: "fixed",
  right: "18px",
  bottom: "clamp(80px, 10vh, 110px)",
  width: "58px",
  height: "58px",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "#25D366",
  color: "#fff",
  fontSize: "24px",
  cursor: "pointer",
 
  zIndex: 1200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  
}}
>
  💬
</button>
    </>
  );
}