import React from "react";

export default function ShoeTypesSection({ shoeTypes }) {
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
            window.innerWidth < 768 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
          gap: "20px",
          justifyItems: "center",
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
              padding: "28px",
              borderRadius: "18px",
              textAlign: "center",
              boxShadow: "0 0 15px rgba(212,175,55,0.08)",
              transition: "0.3s",
              cursor: "pointer",
              width: "150px",
              height: "220px",
              minWidth: "150px",
              maxWidth: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
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

            <div
              style={{
                color: "#fff",
                fontSize: "24px",
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