import React, {  useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



function Section({ heading, data, isSongs, genre }) {
  const [buttonText, setButtonText] = useState("Show All");
  const [value, setValue] = useState('');
  const [shownSongs, setShownSongs] = useState([]);


  const handleChange = (event, newValue) => {
    console.log(event, newValue);
    
    setValue(newValue);
    setShownSongs(data.filter(song=>
      song?.genre?.key === newValue
    ))
  };

  useEffect(()=>{
    if(isSongs){
      setShownSongs(data)
    }
  },[data, isSongs])



  const handleClick = () => {
    setButtonText(buttonText === "Collapse" ? "Show All" : "Collapse");
  };

  return (
    <div className={styles.headingWrapper}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        {!isSongs && <Button onClick={handleClick}>{buttonText}</Button>}
      </div>
      {isSongs &&  (
        <Box sx={{ width: "100%", color: "white" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", color: "white" }}>
            <Tabs
              value={value}
              style={{ color: "white" }}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {  
                genre?.data && genre.data.map((gen, i) => (
                  <Tab
                    key={i}
                    value={gen.key}
                    style={{ color: "white" }}
                    label={gen.label}
                   
                  />
                ))}
                
            </Tabs>
          </Box>
        </Box>
      )}
      
      <div className={styles.sectionContainer}>
      
        {!isSongs && buttonText === "Collapse" ? (
          data.map((item) => (
            <Card
              key={item.id}
              img={item.image}
              heading={item.title}
              chipLabel={item.follows}
            />
          ))
        ) : (
          <Carousel key={heading} data={isSongs ? shownSongs: data} isSongs={isSongs} />
        )}
      </div>
    </div>
  );
}

export default Section;
