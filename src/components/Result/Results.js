import React, { useEffect, useState } from "react";
import data from "../api/data";
import Thumbnail from "./Thumbnail";
import { useLocation } from "react-router-dom";

function Results() {
  const [results, setResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const genre = query.get("genre");

  const fetchData = async () => {
    try {
      const rawData = await fetch(
        `https://api.themoviedb.org/3${data[genre].url ||
          data.fetchTrending.url}`
      );
      const response = await rawData.json();
      setResults(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [genre]);

  return (
    <div className="results__Container">
      {results.map((result) => {
        return <Thumbnail key={result.id} {...result} />;
      })}
    </div>
  );
}

export default Results;
