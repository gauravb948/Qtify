import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import axios from "axios";

function HomePage() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const fetchTopAlbums = async () => {
    try {
      const data = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );

      setTopAlbums(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNewAlbums = async () => {
    try {
      const data = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );

      setNewAlbums(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
  }, []);
  return (
    <>
      <Hero />
      <Section heading="Top Albums" data={topAlbums} />
      <Section heading="New Albums" data={newAlbums} />
    </>
  );
}

export default HomePage;
