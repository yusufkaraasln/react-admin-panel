import React from "react";
import "./topbar.scss";

import { NotificationsNone,Language,Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
function Topbar() {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
          <Link to="/">
          <div className="topbarWrapperLeft">
            <span className="logo">Casper</span>
          </div></Link>
          <div className="topbarWrapperRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <div className="topbarIconContainer">
              <img src="https://yt3.ggpht.com/yti/AJo0G0ndf-o7Q03FoWBOo8UnNLZzVeuHGsRDjWKv0IQqjQ=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
