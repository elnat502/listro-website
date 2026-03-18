import React from "react";

export default function ServicesSection({
  services,
  setSelectedService,
  selectedService,
}) {
  const isMobile = window.innerWidth < 768;
  return (
    <>
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
            marginBottom: "60px",
          }}
        >
          Our Services
        </h2>

        <div
         style={{
  display: "grid",
  gridTemplateColumns: isMobile
    ? "1fr"
    : "repeat(3, minmax(260px, 360px))",
  justifyContent: "center",
  gap: "28px",
  maxWidth: "1400px",
  margin: "0 auto",
}}
        >
          {services.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(item)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(212,175,55,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(212,175,55,0.08)";
              }}
              style={{
                backgroundColor: "#111",
                padding: "30px",
                borderRadius: "18px",
                textAlign: "center",
               boxShadow: "0 14px 35px rgba(212,175,55,0.15)",
                transition: "0.3s",
                cursor: "pointer",
                minHeight: "260px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 style={{ color: "#d4af37" }}>{item.title}</h3>

              <p
                style={{
                  color: "#ddd",
                  fontSize: "17px",
                  marginBottom: "12px",
                }}
              >
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

      {selectedService && (
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
      )}
    </>
  );
}