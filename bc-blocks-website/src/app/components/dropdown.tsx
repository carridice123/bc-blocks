"use client";
import React, { useState } from "react";
import { MenuItems } from "./menuitems";
import Link from "next/link";
import styles from "../styles/dropdown.module.css";
function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul onClick={handleClick} className={styles.drop}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
