"use client";
import React from "react";
import Select from "react-select";
import styles from "../styles/input.module.css";
const options = [
  { value: "building", label: "Building" },
  { value: "bathroom", label: "Bathroom" },
  { value: "roofing", label: "Roofing" },
  { value: "flooring", label: "Flooring" },
];

const Input = () => {
  return (
    <Select placeholder="search" options={options} className={styles.srch} />
  );
};

export default Input;
