import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import axios from "axios";

function HomePage() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genre, setGenre] = useState([]);

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

  const fetchSongs = async () => {
    try {
      const data = await axios.get("https://qtify-backend-labs.crio.do/songs");

      setSongs(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGenre = async () => {
    try {
      const data = await axios.get("https://qtify-backend-labs.crio.do/genres");

      setGenre(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
    fetchGenre();
  }, []);
  return (
    <>
      <Hero />
      <Section
        heading="Top Albums"
        data={topAlbums}
        isSongs={false}
        genre={genre}
      />
      <Section
        heading="New Albums"
        data={newAlbums}
        isSongs={false}
        genre={genre}
      />
      <Section heading="Songs" data={songs} isSongs={true} genre={genre} />
    </>
  );
}

export default HomePage;
