import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

const pageTitle = "Amazon's Best Sellers";
// function Greeting() {
//   return (
//     <div>
//       <h2>My first component! updated.</h2>
//       <div>
//         <h3>Hello world</h3>
//       </div>
//     </div>
//   );
// }
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>Dinesh Dixit</h2>;
// const Message = () => <h2>No error!</h2>;

// function Greeting() {
//   return React.createElement("h2", {}, "Hello world");
// }

//timestamp:3.30
// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };
  const handleButtonClick = (e) => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      <h4>Form Example</h4>
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">submit</button>
        <div>
          <button onClick={handleButtonClick}>click me</button>
        </div>
      </form>
    </section>
  );
};

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <div>
      <h3 className="title">{pageTitle}</h3>
      <section className="booklist">
        {/* <Book author={book1.author} title={book1.title} img={book1.image} />
      <Book author={book2.author} title={book2.title} img={book2.image} />
      <Book author={book1.author} title={book1.title} img={book1.image} />
      <Book author={book1.author} title={book1.title} img={book1.image} />  */}
        {/* <EventExample /> */}
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              getBook={getBook}
              number={index + 1}
            />
          );
        })}
      </section>
    </div>
  );
};
// const Image = () => {
//   return <img src="./images/book1.jpg" alt="Amma Diarylo Konni Pageelu" />;
// };
// const Title = () => {
//   return <h2>Amma Diarylo Konni Pageelu</h2>;
// };
// const Author = () => {
//   const inlinAuthorStyle = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.75rem",
//     letterSpacing: "4px",
//   };
//   return (
//     <h4 style={inlinAuthorStyle} className="author">
//       Ravi Mantri
//     </h4>
//   );
// };
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
