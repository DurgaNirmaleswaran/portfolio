// src/components/HotelBookingVisual.jsx
import { motion } from "framer-motion";
import { MapPin, Star, CalendarDays, ArrowUpRight } from "lucide-react";

const hotelCards = [
  { name: "Ocean View", price: "$129", rating: "4.8" },
  { name: "City Stay", price: "$96", rating: "4.6" },
];

export default function HotelBookingVisual() {
  return (
    <div className="hotel-visual-card">
      <div className="hotel-browser-bar">
        <span />
        <span />
        <span />
        <p>ideassion-tech.ui</p>
      </div>

      <div className="hotel-hero-mini">
        <div>
          <span className="hotel-kicker">Find your stay</span>
          <h4>Book rooms with a cleaner flow.</h4>
        </div>

        <motion.div
          className="hotel-search-pill"
          initial={{ opacity: 0.75, y: 0 }}
          animate={{ opacity: [0.75, 1, 0.75], y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <MapPin size={13} />
          <span>Chennai</span>
          <CalendarDays size={13} />
        </motion.div>
      </div>

      <div className="hotel-card-grid">
        {hotelCards.map((hotel, index) => (
          <motion.div
            className="hotel-mini-card"
            key={hotel.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.2 + index * 0.16,
              ease: "easeOut",
            }}
          >
            <div className="hotel-image-block">
              <motion.span
                animate={{ x: ["-20%", "120%"] }}
                transition={{
                  duration: 2.8,
                  delay: index * 0.7,
                  repeat: Infinity,
                  repeatDelay: 1.8,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="hotel-card-copy">
              <strong>{hotel.name}</strong>
              <div>
                <span>{hotel.price}/night</span>
                <p>
                  <Star size={11} />
                  {hotel.rating}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="hotel-booking-panel">
        <div>
          <span>Room details</span>
          <strong>Deluxe · 2 guests · Breakfast included</strong>
        </div>

        <motion.button
          type="button"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          View details
          <ArrowUpRight size={13} />
        </motion.button>
      </div>

      <div className="hotel-ui-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>Layouts</span>
        <span>Booking UI</span>
      </div>
    </div>
  );
}