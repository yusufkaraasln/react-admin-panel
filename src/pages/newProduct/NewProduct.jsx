import React from "react";
import "../newUser/newUser.scss";
function NewProduct() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Görsel</label>
          
          <input type="file"  placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Ürün Adı</label>
          <input type="text" placeholder=" " />
        </div>
        <div className="newUserItem">
          <label>Stok</label>
          <input type="number" placeholder=" " />
        </div>
        <div className="newUserItem">
          <label>Aktif</label>
          <select name="active" id="active">
            <option value="yes">Evet</option>
            <option value="no">Hayır</option>

          </select>
        </div>
         
 
        <button>Oluştur</button>
      </form>
    </div>
  );
}

export default NewProduct;
