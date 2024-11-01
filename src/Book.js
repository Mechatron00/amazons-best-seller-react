const Book = (props) => {
  const { image, title, author, id, getBook, number } = props; //destructuring
  // console.log(props);
  // const displayTitle = () => {
  //   console.log(title);
  // };
  const getSingleBook = () => {
    //if want to invoke a function on element events, need to pass reference of the functions
    getBook(id);
  };
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      {/* <button type="button" onClick={getSingleBook}>
        Get Book
      </button> */}
      <h4 className="author">{author}</h4>
      <span className="number">#{number}</span>
    </article>
  );
};

export default Book;
