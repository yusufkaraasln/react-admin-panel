import React from "react";
import "./newUser.scss";
function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Kullanıcı Adı</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Ad Soyad</label>
          <input type="text" placeholder=" " />
        </div>
        <div className="newUserItem">
          <label>E-Posta</label>
          <input type="text" placeholder=" " />
        </div>
        <div className="newUserItem">
          <label>Şifre</label>
          <input type="password" placeholder=" " />
        </div>
        <div className="newUserItem">
          <label>Telefon</label>
          <input type="text" placeholder=" " />
        </div>
        
        <div className="newUserItem">
          <label>Adres</label>
          <input type="text" placeholder=" " />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Cinsiyet</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Erkek</label>
            <input type="radio" name="gender" id="female" value={"female"} />
            <label htmlFor="female">Kadın</label>
            <input type="radio" name="gender" id="other" value={"other"} />
            <label htmlFor="other">Belirtmek İstemiyorum</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Aktif</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Evet</option>
            <option value="no">Hayır</option>

          </select>
        </div>
        <button>Oluştur</button>
      </form>
    </div>
  );
}

export default NewUser;
