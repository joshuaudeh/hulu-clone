import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HeaderIcons from "./HeaderIcons";

function Header() {
  return (
    <header>
      <div className="header__right">
        <HeaderIcons title="HOME" Icon={HomeOutlinedIcon} />
        <HeaderIcons title="TRENDING" Icon={ElectricBoltIcon} />
        <HeaderIcons title="VERIFIED" Icon={CheckCircleOutlinedIcon} />
        <HeaderIcons title="COLLECTIONS" Icon={CollectionsOutlinedIcon} />
        <HeaderIcons title="SEARCH" Icon={SearchOutlinedIcon} />
        <HeaderIcons title="ACCOUNT" Icon={PersonOutlinedIcon} />
      </div>
      <div className="header__left">
        <h1>hulu</h1>
      </div>
    </header>
  );
}

export default Header;
