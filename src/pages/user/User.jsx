import React from "react";
import "./user.scss";
import { userData } from "../../dummyData";
import { Link } from "react-router-dom";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@mui/icons-material";
function User() {
  const path = window.location.pathname.split("/")[2];
  const data = [...userData];
  const user = data.find((u) => u.id == path);
  console.log(user);

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Kullanıcı Düzenle</h1>
        <Link to="/newUser">
          <button className="userAddButton">Yeni Kullanıcı Ekle</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={user.profilePic} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
              <span className="userShowUserTitle">{user.title}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Kullanıcı Bilgileri</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">17.10.2002</span>
            </div>
            <span className="userShowTitle">İletişim Bilgileri</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+90 539 (201) 44 54</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">California | LA</span>
            </div>
          </div>
        </div>
        .
        <div className="userUpdate">
          <span className="userUpdateTitle">Kullanıcı Düzenle</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Kullanıcı Adı</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Telefon</label>
                <input
                  type="text"
                  placeholder={user.phone}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>E-Posta</label>
                <input
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Adres</label>
                <input
                  type="text"
                  placeholder={user.address}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
                <div className="userUpdateUpload">
                    <img src={user.profilePic} alt="" className="userUpdateImg" />
                    <label htmlFor="file">
                        <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button className="userUpdateButton">Güncelle</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
