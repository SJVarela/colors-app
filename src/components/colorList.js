import React from "react";
import ColorItem from "./colorItem";

const ColorList = ({ colors = [], onRate = f => f }) => (
  <div className="color-list">
    {colors.length === 0 ? (
      <p>No colors listed</p>
    ) : (
      colors.map(color => (
        <ColorItem
          key={color.id}
          {...color}
          onRate={rating => onRate(color.id, rating)}
        />
      ))
    )}
  </div>
);

export default ColorList;
