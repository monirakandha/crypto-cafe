import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
        console.log(data);
      });
  }, [id]);
  return (
    <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl">General Info:</h1>
          <hr />
          <h1>Coin name : {coin.name}</h1>
          <h1>Market Cap Rank: {coin.market_cap_rank}</h1>
          <h1>
            Origin:{" "}
            {coin.country_origin ? coin.country_origin : "Not Avaliable"}{" "}
          </h1>
          <h1>Contract Address: {coin.contract_address}</h1>
          <h1>Hashing Algorithm: {coin.hashing_algorithm}</h1>
          <h1>Genesis Date: {coin.genesis_date}</h1>
          <h1>Last Updated: {coin.last_updated}</h1>
          <h1 className="text-3xl mt-4">Scores:</h1>
          <hr />
          <h1>Community Score: {coin.community_score}</h1>
          <h1>Developer Score: {coin.developer_score}</h1>
          <h1>Liquidity Score: {coin.liquidity_score}</h1>
          <h1>Public Interest Score: {coin.public_interest_score}</h1>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <img src={coin.image?.large} alt="coinimage" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
