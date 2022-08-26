import React from "react";
import "../user/user.scss";
import { data2, productData } from "../../dummyData";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@mui/icons-material";
import "./product.scss";
function Product() {
  String.prototype.toUpperFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  const path = window.location.pathname.split("/")[2];
  const data = [...productData];
  const product = data.find((u) => u.id == path);
  console.log(product);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Ürün Düzenle</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Yeni Ürün Ekle</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={data2} dataKey="sales" title="Satış Performansı" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img className="productInfoImg" src={product.img} alt="" />
            <span>{product.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID</span>
              <span className="productInfoValue">{product.id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Stok</span>
              <span className="productInfoValue">{product.stock}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Durum</span>
              <span className="productInfoValue">
                {product.status.toUpperFirstLetter()}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Fiyat</span>
              <span className="productInfoValue">{product.price}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Ürün Adı</label>
            <input type="text" placeholder={product.name} />
            <label>Stok</label>
            <input type="text" placeholder={product.stock} />
            <label>Stok Durumu</label>
            <select name="stock" id="stock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Aktif</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Fiyat</label>
            <input type="text" placeholder={product.price} />
          </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img className="productUploadImg" src={product.img} alt="" />
                    <label htmlFor="file">
                        <Publish />
                    </label>
                    <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button className="productButton">Güncelle</button>
            </div>

        </form>
      </div>
    </div>
  );
}

export default Product;
