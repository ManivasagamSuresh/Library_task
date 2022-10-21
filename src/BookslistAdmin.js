import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BookslistAdmin() {
  let deletebook
   = async(id)=>{
   try{
     
    await axios.delete(`https://63450500dcae733e8fe7f213.mockapi.io/products/${id}`)
    
   
   alert('success')}
   catch(error){
    alert("error")
   }

  }
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
          <Link
            to={"/Addbooks"}
            className="position-absolute top-0 end-0 btn btn-outline-secondary"
          >
            Add Book
          </Link>
        </div>
      </div>
      <div className="row">
        {books.map((item) => {
          return (
            <div className="col-lg-4 mt-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src={item.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">{item.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <span>Author Name : {`${item.author}`}</span>
                  <Link to={`/readbook/${item.id}`}>Read Book</Link>
                  <br />
                  <Link to={`/Editbook/${item.id}`}>Edit Book</Link>
                  <br />
                  <button style={{width:"200px"}}className="btn btn-primary" onClick={()=>{deletebook(`${item.id}`)}}>Delete Book</button>
                  <br />
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookslistAdmin;
