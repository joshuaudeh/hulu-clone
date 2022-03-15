import React from "react";
import "./Header.css";
function HeaderIcons({ Icon, title }) {
  return (
    <div className="headerIcon__container">
      <Icon className="icon" />
      <p className="title">{title}</p>
    </div>
  );
}

export default HeaderIcons;
