import { useEffect, useState } from "react";
import AddBookForm from "./AddBookForm";
import api from "../api";

const BooksList = () => {
  const [ books, setBooks ] = useState([]);
  
  const fetchBooks = async () => {
    try {
      const response = await api.get("/books");
      setBooks(response.data.books);

    } catch(error) {
      console.log("Error fetching books", error);
    }

  };

  const addBook = async (book) => {
    try {
      const response = await api.post("/books", book);
      setBooks((currentBooks) => [...currentBooks, response.data]);

    } catch(error) {
      console.log("Error adding books", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  },[]);

  return(
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.name} by {book.author} ({book.year})</li>
        ))}
      </ul>
      <AddBookForm addBook={addBook} />
    </div>
  );

};

export default BooksList;