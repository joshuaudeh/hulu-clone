import React from "react";
import "./thumbnail.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const image = "https://image.tmdb.org/t/p/w500";

const Thumbnail = (props) => {
  const {
    poster_path,
    title,
    name,
    original_title,
    overview,
    release_date,
    first_air_date,
    vote_count,
  } = props;

  return (
    <div className="thumbnail">
      <img src={image + poster_path} alt="" />
      <p>{overview.substring(0, 50) + "..."}</p>
      <h3>{title || name || original_title}</h3>
      <div className="thumbnail__Info">
        <p>{`${release_date || first_air_date}`}</p>
        <ThumbUpOffAltIcon className="thumbnail_Icon" />
        <p>{vote_count}</p>
      </div>
    </div>
  );
};

export default Thumbnail;
