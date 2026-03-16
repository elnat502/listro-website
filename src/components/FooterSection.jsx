import React from "react";

export default function FooterSection() {
  return (
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
  );
}