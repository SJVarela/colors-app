import React from "react";
import StarRating from "./starRating";
const ColorItem = ({ title, color, rating = 0, onRate = f => f }) => (
  <section className="color">
    <h1>{title}</h1>
    <div className="color" style={{ backgroundColor: color }} />
    <div>
      <StarRating starsSelected={rating} onRate={onRate} />
    </div>
  </section>
);

export default ColorItem;
