import BorrowBtn from "./BorrowBtn";

const BookCard = ({ elem }) => {
  // get the required props from the parent Component
  return (
    <div className="book_card">
      <div style={{ border: "1px solid" }}>
        <h3>{elem.title}</h3>
        <h5>{elem.author}</h5>
        <h6>{elem.category}</h6>
        <p>{elem.isbn}</p>
        <BorrowBtn />
        {/* Add the title in h3 tag, author in h5 tag, category in h6 tag, isbn in p tag. use BorrowBtn to create the required buttons in Book Card */}
        <div data-cy="container">
          <h3></h3>
        </div>
      </div>
      {/* you can user the BorrowBtn here */}
    </div>
  );
};

export default BookCard;
