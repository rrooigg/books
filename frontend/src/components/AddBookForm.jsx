import { useState } from "react";

const AddBookForm = ({ addBook }) => {
  const [book, setBook ] = useState({
    name: "",
    author: "",
    year: 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setBook((currentBook) => ({
      ...currentBook, 
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(book.name && book.author && book.year) {
      addBook({...book});
      setBook({
        name: "",
        author: "",
        year: 0
      });

    }
  };

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} value={book.name} placeholder="Enter book name..."/>
      <input type="text" name="author" onChange={handleChange} value={book.author} placeholder="Enter author's name..."/>
      <input type="number" name="year" onChange={handleChange} value={book.year} placeholder="Enter year of publication..."/>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddBookForm;