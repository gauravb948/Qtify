import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";

function Section({ heading, data }) {
  const [buttonText, setButtonText] = useState("Collapse");

  const handleClick = () => {
    setButtonText(buttonText === "Collapse" ? "Show All" : "Collapse");
  };
  return (
    <div className={styles.headingWrapper}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <Button onClick={handleClick}>{buttonText}</Button>
      </div>
      <div className={styles.sectionContainer}>
        {buttonText === "Show All" ? (
          data.map((item) => (
            <Card
              key={item.id}
              img={item.image}
              heading={item.title}
              chipLabel={item.follows}
            />
          ))
        ) : (
          <Carousel key={heading} data={data} />
        )}
      </div>
    </div>
  );
}

export default Section;
