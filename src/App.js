import React from "react";
import boring from "./images/boring.jpg";
import dunno from "./images/dunno.jpg";
import js from "./images/js.jpg";
import "./App.css";

const bookList = [
  {
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    price: 100,
    image: js,
  },
  {
    title:
      "Automate the Boring Stuff with Python, 2nd Edition: Practical Programming for Total Beginners",
    author: "Al Sweigart",
    price: 10,
    image: boring,
  },
  {
    title: "You Don't Know JS: Scope & Closures",
    author: "Kyle Simpson",
    price: 50,
    image: dunno,
  },
];
const Book = (props) => {
  const { title, author, price, image } = props.book;
  console.log(props.book);
  console.log(props.title);
  return (
    <>
      <div className="book">
        <div className="image_div">
          <img className="book_image" src={image} alt="No image" />
        </div>
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <div className="price">{price}</div>
      </div>
    </>
  );
};
const Books = (props) => {
  return (
    <>
      {props.books.map((book) => {
        return <Book book={book} />;
      })}
    </>
  );
};
const App = () => {
  return <Books books={bookList} />;
};
// console.log(bookList[0]);
export default App;
