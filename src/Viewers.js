import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Viewers() {
    const [books, setBooks] = useState([]);
  useEffect(() => {
    data();
  });
  let data = async () => {
    let book = await axios.get(
      "https://63450500dcae733e8fe7f213.mockapi.io/products"
    );
    setBooks(book.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-lg-12 position-relative"
          style={{ height: "200px", backgroundColor: "#DCDCDC" }}
        >
          <h1 className="position-absolute top-50 start-50 translate-middle">
            Lists of Books
          </h1>
        </div>
      </div>
      
      <div className="row">
        {books.map((item) => {
            return(
    <div class="card mt-3 ms-3" style={{width: "18rem"}}>
    <img class="card-img-top" src={item.image} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{item.name}</h5>
      <p class="card-text">{item.description}</p>
      <p class="card-text"><h6>written by :</h6>{item.author}</p>
      <Link to={`Viewersread/${item.id}`} class="btn btn-primary">Read Book</Link>
    </div>
  </div>)}
  )}
  </div>
  </div>
  
  ) 
}

export default Viewers