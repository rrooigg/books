import { useState } from "react";

const AddBookForm = ({ addBook }) => {
  const [book, setBook ] = useState({
    name: "",
    author: "",
    year: 0
  });

  const handleChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target; //destructuring

    // currentBook means holds the current inputs i.e stores book name & author before filling the year
    setBook((currentBook) => ({
      ...currentBook, 
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    // prevents HTML to perform it's normal form-submission and allows React to do it
    event.preventDefault();

    if(book.name && book.author && book.year) {
      // ...book -> creates copy of object
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