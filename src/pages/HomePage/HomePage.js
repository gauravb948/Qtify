import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import axios from "axios";

function HomePage() {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    try {
      const data = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );

      setAlbums(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);
  return (
    <>
      <Hero />
      <Section heading="Top Albums" data={albums} />
    </>
  );
}

export default HomePage;
