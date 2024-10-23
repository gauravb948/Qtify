import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

export default function Card({ img, chipLabel, heading }) {
  return (
    <div className={styles.card}>
      <div className={styles.mainCard}>
        <img className={styles.albumImage} src={img} alt="" />
        <div className={styles.cardContent}>
          <Chip label={`${chipLabel} follows`} />
        </div>
      </div>
      <p>{heading}</p>
    </div>
  );
}
