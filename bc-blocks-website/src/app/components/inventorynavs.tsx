"use client";
import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./dropdown";
import styles from "../styles/inventorynavs.module.css";
import DropMen from "./reactdropexperment";
function Inventorynavs() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <section className={styles.sectionf}>
      <ul className={styles.navuls}>
        <li
          className={styles.navitemdrop}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Inventory
          {dropdown && <Dropdown />}
        </li>
      </ul>
      <nav>
        <ul className={styles.navul}>
          <li className={styles.navitem}>
            <Link href="/mycart" className={styles.navlinks}>
              Cart
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/contacts" className={styles.navlinks}>
              Contacts
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="#sales" className={styles.navlinks}>
              onSale
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Inventorynavs;
