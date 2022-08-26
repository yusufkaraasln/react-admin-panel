import React from "react";
import "./sidebar.scss";

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-wrapper-menu">
          <div className="menu-title">Menü</div>
          <ul className="menu-list">
            <li className="menu-list-item active">
             <Link to="/">
             <LineStyle className="icons" />
              Anasayfa
             </Link>
            </li>
            <li className="menu-list-item">
              <Timeline className="icons" />
              İstatistikler
            </li>
            <li className="menu-list-item">
              <TrendingUp className="icons" />
              Satışlar
            </li>
          </ul>
        </div>
        <div className="sidebar-wrapper-menu">
          <div className="menu-title">Hızlı Seçim</div>
          <ul className="menu-list">
            <li className="menu-list-item active">
             <Link to={"/users"}>
             <PermIdentity className="icons" />
              Kullanıcılar</Link>
            </li>
           <Link to={"/products"}>
           <li className="menu-list-item">
              <Storefront className="icons" />
              Ürünler
            </li>
           </Link>
            <li className="menu-list-item">
              <AttachMoney className="icons" />
              İşlemler
            </li>
            <li className="menu-list-item">
              <BarChart className="icons" />
              Raporlar
            </li>
          </ul>
        </div>
        <div className="sidebar-wrapper-menu">
          <div className="menu-title">Bildirimler</div>
          <ul className="menu-list">
            <li className="menu-list-item active">
              <MailOutline className="icons" />
              Mail
            </li>
            <li className="menu-list-item">
              <DynamicFeed className="icons" />
              Geri Dönüşler
            </li>
            <li className="menu-list-item">
              <ChatBubbleOutline className="icons" />
              Mesajlar
            </li>
            
          </ul>
        </div>
        <div className="sidebar-wrapper-menu">
          <div className="menu-title">Personel</div>
          <ul className="menu-list">
            <li className="menu-list-item active">
              <WorkOutline className="icons" />
              Yönet
            </li>
            <li className="menu-list-item">
              <Timeline className="icons" />
              İstatistikler
            </li>
            <li className="menu-list-item">
              <Report className="icons" />
              Raporlar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
