import React from 'react'
import "./productlist.scss"
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {productData} from '../../dummyData'

import "../userList/userList.scss";

function ProductList() {

const [data,setData] = React.useState(productData)
const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Ürün Adı",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stok", width: 300 },
    {
      field: "status",
      headerName: "Durum",
      width: 200,
    },
    {
      field: "price",
      headerName: "Fİyat",
      sortable: false,
      width: 200,
    },
    {
      field: "action",
      headerName: "İşlem",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="userListEdit">Düzenle</button>
            </Link>
            <button
              onClick={() => handleDelete(params.row.id)}
              className="userListDelete"
            >
              Sil
            </button>
          </>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    
    
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
      setData(data.filter((item) => item.id !== id));
    
        
    }        
     
    console.log(id + " id'li kullanıcı silindi");
  };

  return (
    <div className='productList'>
         <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList