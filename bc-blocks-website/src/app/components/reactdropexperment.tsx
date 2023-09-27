"use client";

import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styles from "../styles/drop.module.css";
import { useState } from "react";
const DropMen = () => {
  const [food, setFood] = React.useState("pear");

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  return (
    <div className={styles.div}>
      <Dropdown
        options={[
          { label: "Fruit", value: "fruit" },

          { label: "Vegetable", value: "vegetable" },

          { label: "Meat", value: "meat" },
        ]}
        value={food}
        onChange={handleFoodChange}
        className={styles.dropdown}
      />
    </div>
  );
};

export default DropMen;
