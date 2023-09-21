"use client";
import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./dropdown";
import styles from "../styles/inventorynavs.module.css";
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
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navul}>
          <li
            className={styles.navitemdrop}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Inventory <i className="fas fa-caret-down" />
            {dropdown && <Dropdown />}
          </li>
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
              On-sale
              <i className="fas fa-caret-down" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Inventorynavs;
