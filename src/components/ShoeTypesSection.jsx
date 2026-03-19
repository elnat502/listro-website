import React from "react";

import sneaker from "../assets/sneaker.png";
import leather from "../assets/leather.png";
import boots from "../assets/boots.png";
import heels from "../assets/heels.png";
import kids from "../assets/kids.png?v=2";
import sports from "../assets/sports.png?v=2";

export default function ShoeTypesSection({ shoeTypes }) {
  const shoeImages = [sneaker, leather, boots, heels, kids, sports];

  return (
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
  gridTemplateColumns:
    window.innerWidth < 768 ? "repeat(2, 160px)" : "repeat(3, 1fr)",
  gap: window.innerWidth < 768 ? "18px" : "20px",
  justifyContent: "center",
  justifyItems: "center",
  maxWidth: window.innerWidth < 768 ? "360px" : "1000px",
  margin: "0 auto",
  width: "100%",
}}
      >
        {shoeTypes.map((item, index) => (
          <div
            key={index}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 0 18px rgba(212,175,55,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 15px rgba(212,175,55,0.08)";
            }}
            style={{
              backgroundColor: "#111",
              padding: "24px",
              borderRadius: "18px",
              textAlign: "center",
              boxShadow: "0 0 15px rgba(212,175,55,0.08)",
              transition: "0.3s",
              cursor: "pointer",
              width: "150px",
             height: window.innerWidth < 768 ? "180px" : "210px",
              minWidth: "150px",
              maxWidth: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <img
              src={shoeImages[index]}
              alt={item}
              style={{
               width: window.innerWidth < 768 ? "55px" : "70px",
               height: window.innerWidth < 768 ? "55px" : "70px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />

            <div
              style={{
                color: "#fff",
                fontSize: window.innerWidth < 768 ? "18px" : "24px",
                fontWeight: "600",
              }}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}