import React from "react";
import "./HeaderStyle.css";
import { useState } from "react";
import { FaAd, FaTrash } from "react-icons/fa";
import { BsFillBookmarksFill } from "react-icons/bs";

const ItemDetailComponent = ({ item2, index }) => {
  return (
    <li className="header" key={index}>
      {item2.productName} | {item2.price} |{" "}
      {item2.status ? "Data tersediasssss" : "Data tidak tersedia"}
    </li>
  );
};

const Header = () => {
  //   let a = 10;
  //   let b = 20;
  //   let namaDepan = "asta";
  //   let namaBelakang = "adji";
  //   let namaLengkap = `${namaDepan} ${namaBelakang}`;
  // const isLoggedIn = false;
  let [user, setUser] = useState({
    username: "",
    password: "",
  });

  const changeInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setUser((values) => ({ ...values, [name]: value }));
  };

  const dataList = [
    {
      id: 1,
      productName: "A",
      price: 30,
      status: true,
    },
    {
      id: 2,
      productName: "B",
      price: 40,
      status: true,
    },
    {
      id: 3,
      productName: "C",
      price: 25,
      status: false,
    },
  ];

  return (
    // <>
    //   <h1>Ini Asta</h1>
    //   <p>Penjumlahan a + b = {a + b}</p>
    //   <p>{`${namaDepan} ${namaBelakang} ${a + b}`}</p>
    //   <p>
    //     {namaDepan} {namaBelakang} {a + b}
    //   </p>
    //   <p>{namaLengkap}</p>
    // </>
    // <>
    //   <ul>
    //     <li>Home</li>
    //     <li>Profile</li>
    //     {isLoggedIn && <li>Atur Profile (setting)</li>}
    //   </ul>
    // </>

    // fragment kosong
    // <>
    //   <ul>
    //     {dataList.map((item, index) => (
    //       <li key={index}>
    //         {item.productName} | {item.price} |{" "}
    //         {item.status ? "Data tersedia" : "Data tidak tersedia"}
    //       </li>
    //     ))}
    //   </ul>
    // </>

    // <>
    //   <ul>
    //     {dataList.map((itemObj, index) => (
    //       <ItemDetailComponent item2={itemObj} index={index} />
    //     ))}
    //   </ul>
    // </>

    <>
      <FaTrash />
      <FaAd />
      <BsFillBookmarksFill />
      <h1 onClick={changeInput}>{JSON.stringify(user)}</h1>
      <input
        type="text"
        name="username"
        value={user.username || ""}
        onChange={changeInput}
      />
      <input
        type="text"
        name="password"
        value={user.password || ""}
        onChange={changeInput}
      />
    </>
  );
};

export default Header;
