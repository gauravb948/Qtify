import React from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

function Section({ heading, data }) {
  return (
    <div className={styles.headingWrapper}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <Button>Collapse</Button>
      </div>
      <div className={styles.sectionContainer}>
        {data.map((item) => (
          <Card
            key={item.id}
            img={item.image}
            heading={item.title}
            chipLabel={item.follows}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
