import React, { useState, useEffect } from "react";

export default function BookingForm() {
  const [shoeType, setShoeType] = useState("Sneakers");
  const [quantity, setQuantity] = useState(1);
  const [service, setService] = useState("Deep Cleaning");
  const [time, setTime] = useState("Morning (9AM - 12PM)");
  const [location, setLocation] = useState("");
useEffect(() => {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;
      setLocation(mapsLink);
    },
    (err) => {
      console.log("Location denied or error", err);
    }
  );
}, []);
  const handleLocation = () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    const mapUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    setLocation(mapUrl);

    // optional: also open map in new tab
    window.open(mapUrl, "_blank");
  });
};

  const handleSubmit = () => {
 const message = `*LISTRO PREMIUM BOOKING*

- Shoe Type: ${shoeType}
- Service: ${service}
- Quantity: ${quantity}

- Pickup Time: ${time}

Pickup Location:
Tap to open map
${location}

- Estimated Price: ${getPrice()} AED

Pay after service
Fast pickup & delivery
Premium care guaranteed

Please confirm this booking.`;

    const phone = "971506221783"; // 🔴 PUT YOUR NUMBER

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };
const getPrice = () => {
  let base = 0;

  if (service === "Deep Cleaning") {
    if (shoeType === "Sneakers") base = 29;
    if (shoeType === "Leather Shoes") base = 35;
    if (shoeType === "Boots") base = 39;
    if (shoeType === "Heels") base = 35;
    if (shoeType === "Kids Shoes") base = 19;
    if (shoeType === "Suede (Premium Care)") base = 45;
  }

  if (service === "Standard Cleaning") base = 19;
  if (service === "Whitening") base = 15;

  return base * quantity;
};
  return (
    <div
  style={{
    padding: "30px",
    background: "rgba(255,255,255,0.03)",
    borderRadius: "20px",
    marginTop: "30px",
    border: "1px solid rgba(212,175,55,0.2)",
    backdropFilter: "blur(10px)",
    maxWidth: "420px",
  }}
>
      <h2
  style={{
    color: "#fff",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  }}
>
  Quick Booking
</h2>
<select
  onChange={(e) => setQuantity(Number(e.target.value))}
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #333",
    background: "#000",
    color: "#fff",
    marginBottom: "15px",
  }}
>
  <option value={1}>1 Pair</option>
  <option value={2}>2 Pairs</option>
  <option value={3}>3 Pairs</option>
  <option value={4}>4 Pairs</option>
  <option value={5}>5+ Pairs</option>
</select>
     <select
  onChange={(e) => setShoeType(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #333",
    background: "#000",
    color: "#fff",
    marginBottom: "15px",
  }}
>
  <option>Sneakers</option>
  <option>Leather Shoes</option>
  <option>Boots</option>
 <option>Suede (Premium Care)</option>
  <option>Heels</option>
  <option>Kids Shoes</option>
</select>

      

     <select
  onChange={(e) => setService(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #333",
    background: "#000",
    color: "#fff",
    marginBottom: "15px",
  }}
>
  <option>Deep Cleaning</option>
  <option>Standard Cleaning</option>
  <option>Whitening</option>
</select>

      

  <select
  onChange={(e) => setTime(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #333",
    background: "#000",
    color: "#fff",
    marginBottom: "15px",
  }}
>
  <option>Morning (9AM - 12PM)</option>
  <option>Afternoon (1PM - 4PM)</option>
  <option>Evening (5PM - 8PM)</option>
</select>

 {/* ✨ PREMIUM BADGE (SUede only) */}
{shoeType === "Suede (Premium Care)" && (
  <div
    style={{
      background: "rgba(212,175,55,0.15)",
      color: "#d4af37",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      display: "inline-block",
      marginBottom: "10px",
      textAlign: "center",
      width: "100%",
    }}
  >
    ✨ Premium Care
  </div>
)}

{/* 💰 PRICE BLOCK */}
<div style={{ textAlign: "center", marginBottom: "10px" }}>
  
  <div
    style={{
      color: "#d4af37",
      fontWeight: "bold",
      fontSize: "20px",
    }}
  >
    {getPrice()} AED
  </div>

  <div
    style={{
      color: "#777",
      fontSize: "14px",
      textDecoration: "line-through",
    }}
  >
    {getPrice() + 10} AED
  </div>

</div>

{/* ⏳ URGENCY TEXT */}
<p style={{ fontSize: "12px", color: "#aaa", textAlign: "center" }}>
  Limited time offer • Pay after service
</p>   

      <button onClick={handleLocation}>
        📍 Use My Location
      </button>

      <br /><br />

      <button
        onClick={handleSubmit}
        style={{
          background: "#25D366",
          color: "#fff",
          padding: "12px 20px",
          border: "none",
          borderRadius: 8,
          fontWeight: "bold",
        }}
      >
        Book via WhatsApp
      </button>
    </div>
  );
}