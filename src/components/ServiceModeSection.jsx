import React from "react";

export default function ServiceModeSection({ serviceModes }) {
  return (
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
              e.currentTarget.style.boxShadow =
                "0 0 28px rgba(212,175,55,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 18px rgba(212,175,55,0.08)";
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
  );
}