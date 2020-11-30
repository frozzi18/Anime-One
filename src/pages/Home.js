import React, { useEffect, useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import { getAnimes } from "../functions/Animes";

const Home = () => {
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    getAnimes().then((res) => {
      setTopAnime(res.data.top);
    });
  }, []);

  return (
    <>
      <div>
        <Jumbotron anime={topAnime[0]} />
      </div>
      {/* <h1>Home Pages</h1> */}
      {/* {JSON.stringify(topAnime)} */}
    </>
  );
};

export default Home;
