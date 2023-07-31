import React, { useEffect, useState } from "react";
//API
import { getData } from "../services/api.js";
//Component
import Loader from "./Loader.jsx";
import Coin from "./Coin.jsx";
//Style
import "./Landing.css";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setCoins(await getData());
    };
    fetchAPI();
  }, []);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mainContainer">
      <input
        className="input"
        type="text"
        name="search"
        onChange={changeHandler}
        value={search}
        placeholder="Search Coin..."
      />
      {coins.length ? (
        <div className="coinContainer">
          {searchCoins.map((coin) => (
            <Coin key={coin.id} coinData={coin} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Landing;
