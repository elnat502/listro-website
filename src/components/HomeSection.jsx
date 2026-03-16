import React from "react";

export default function HomeSection({
  isMobile,
  hovered,
  setHovered,
  setActiveSection,
  shoe,
  beforeImage,
  afterImage,
}) {
  return (
    <div
      style={{
        padding: isMobile ? "50px 20px" : "80px 60px",
        animation: "fadeSlide 0.5s ease",
      }}
    >
      {/* HERO */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "550px" }}>
          <h1 style={{ fontSize: isMobile ? "54px" : "72px", color: "#d4af37" }}>Listro</h1>

         <h2 style={{ fontSize: isMobile ? "24px" : "42px", color: "#fff" }}>
            Premium Shoe Care in UAE
          </h2>

          <p
            style={{
              fontSize: isMobile ? "16px" : "22px",
              lineHeight: "1.8",
              color: "#ccc",
            }}
          >
            Professional sneaker, leather, suede and premium footwear care —
            pickup and delivery available.
          </p>

          <a
            href="https://wa.me/971506221783?text=Hello%20Listro,%0A%0AI%20would%20like%20to%20book%20shoe%20cleaning.%0A%0AShoe%20type:%20____%0AService%20needed:%20____%0APickup%20location:%20____%0APreferred%20time:%20____"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                backgroundColor: hovered ? "#f5d76e" : "#d4af37",
                color: "#000",
                padding: "18px 34px",
                border: "none",
                borderRadius: "10px",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                transform: hovered ? "translateY(-2px)" : "translateY(0px)",
                transition: "all 0.3s ease",
                boxShadow: hovered
                  ? "0 8px 20px rgba(212,175,55,0.35)"
                  : "none",
              }}
            >
              WhatsApp Booking
            </button>
          </a>

          <button
            onClick={() => setActiveSection("services")}
            style={{
              marginLeft: "15px",
              backgroundColor: "transparent",
              color: "#d4af37",
              padding: "18px 34px",
              border: "1px solid #d4af37",
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            View Services
          </button>

          <p
            style={{
              marginTop: "12px",
              color: "#aaa",
              fontSize: "14px",
            }}
          >
            Fast response • Pickup available across UAE
          </p>
        </div>

        <img src={shoe} alt="shoe" style={{ width: "420px" }} />
      </div>

      {/* MOTTO */}
      <div
        style={{
          width: "100%",
          marginTop: "60px",
          textAlign: "center",
          borderTop: "1px solid #111",
          paddingTop: "50px",
        }}
      >
        <h2
          style={{
            color: "#d4af37",
            fontSize: "34px",
            marginBottom: "20px",
          }}
        >
          We Keep Your Steps Sharp
        </h2>

        <p
          style={{
            color: "#ccc",
            fontSize: "20px",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Listro delivers premium shoe care with trusted handling, modern
          convenience, and professional finishing designed for busy lifestyles
          in UAE.
        </p>

        {/* FEATURE CARDS */}
        <div
          style={{
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              backgroundColor: "#111",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#d4af37" }}>Trusted Handling</h3>
            <p style={{ color: "#ccc" }}>
              Every pair is treated carefully using premium shoe-care methods.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#d4af37" }}>Pickup & Delivery</h3>
            <p style={{ color: "#ccc" }}>
              Convenient collection and return service designed for busy schedules.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#d4af37" }}>Premium Finish</h3>
            <p style={{ color: "#ccc" }}>
              Professional finishing that restores freshness and presentation.
            </p>
          </div>
        </div>

        {/* BEFORE AFTER */}
        <div style={{ padding: "40px 40px 20px", textAlign: "center" }}>
          <h2
            style={{
              color: "#d4af37",
              fontSize: "42px",
              marginBottom: "15px",
            }}
          >
            Real Results
          </h2>

          <p
            style={{
              color: "#aaa",
              fontSize: "18px",
              marginBottom: "50px",
            }}
          >
            See how Listro restores shoes professionally.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,420px))",
              gap: "30px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#111",
                padding: "15px",
                borderRadius: "20px",
              }}
            >
              <img
                src={beforeImage}
                alt="Before cleaning"
                style={{
                  width: "100%",
                  maxWidth: "220px",
                  borderRadius: "15px",
                  marginBottom: "15px",
                }}
              />
              <p style={{ color: "#d4af37", fontWeight: "bold" }}>Before</p>
            </div>

            <div
              style={{
                backgroundColor: "#111",
                padding: "15px",
                borderRadius: "20px",
              }}
            >
              <img
                src={afterImage}
                alt="After cleaning"
                style={{
                  width: "100%",
                  maxWidth: "220px",
                  borderRadius: "15px",
                  marginBottom: "15px",
                }}
              />
              <p style={{ color: "#d4af37", fontWeight: "bold" }}>After</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}