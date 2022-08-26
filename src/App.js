import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Sidebar from "./components/siderbar/Sidebar";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";

function App() {

  <Product/>


  return (
    <Router>
      <Topbar />

      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:id" element={<User />}></Route>
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<Product/>}></Route>
          <Route path="/newProduct" element={<NewProduct />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
