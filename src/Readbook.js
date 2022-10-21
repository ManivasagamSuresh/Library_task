import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Readbook() {
  const [book,setBook] = useState([]);
  useEffect(() => {
    a();
  },[]);
  const params = useParams();
  let a = async (value) => {
    try {
      let data = await axios.get(
        `https://63450500dcae733e8fe7f213.mockapi.io/products/${params.id}`
      );
      setBook(data.data);
      console.log(data.data);
    } 
    catch (error) {
      alert("error");
    }
  };
  return (
    <div className="text-center">
      <p>{book.Book}</p>
    </div>
  );
}

export default Readbook;
