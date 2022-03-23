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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryData = await fetch(
          `https://api.themoviedb.org/3${
            !data[genre] ? data.fetchAction.url : data[genre].url
          }`
        );
        const response = await queryData.json();
        setResults(response.results);
      } catch (error) {
        // console.log(error);
      }
    };
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
