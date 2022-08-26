import React, { useState } from "react";
import "./userList.scss";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {userData} from '../../dummyData'
function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "Kullanıcı Adı",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilePic} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "E-Posta", width: 300 },
    {
      field: "status",
      headerName: "Durum",
      width: 200,
    },
    {
      field: "transaction",
      headerName: "İşlem Hacmi",
      description: "Kullanıcının Yapmış Olduğu İşlem Hacmi",
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
            <Link to={"/user/" + params.row.id}>
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



  const [data, setData] = useState(userData);

  const handleDelete = (id) => {
    
    
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
      setData(data.filter((item) => item.id !== id));
    
        
    }        
     
    console.log(id + " id'li kullanıcı silindi");
  };

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;
