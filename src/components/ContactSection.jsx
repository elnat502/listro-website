import React from "react";
import { FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";
export default function ContactSection() {
  return (
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
    fontSize: "18px",
    marginBottom: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  }}
>
  <FaMapMarkerAlt color="#d4af37" size={18} />
  Dubai, UAE
</p>

<p
  style={{
    color: "#ccc",
    fontSize: "18px",
    marginBottom: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  }}
>
  <FaWhatsapp color="#d4af37" size={18} />
  WhatsApp Booking Available
</p>

<p
  style={{
    color: "#ccc",
    fontSize: "18px",
    marginBottom: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    lineHeight: "1.4",
  }}
>
 <FaClock color="#d4af37" size={18} style={{ marginTop: "-2px" }} />
  Daily Service Hours: 9:00 AM – 10:00 PM
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
  );
}