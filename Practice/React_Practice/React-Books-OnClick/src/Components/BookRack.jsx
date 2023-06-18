import React from "react";
import { useState } from "react";
import BookCard from "./BookCard";

const BookRack = () => {
  const [state, setState] = useState();
  const [btn, setbtn] = useState(false);
  const getdata = async () => {
    let get = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books"
    );
    let res = await get.json();
    setState(res.data);
    setbtn(true);
    console.log(res.data);
  };
  return (
    <div>
      {/* create the h1 tag as mentioned in the boiler plate */}
      <h1>Book House</h1>

      {/* Either Hide Books button + data-cy="container" is visible or else Get Books button will be visible at a time */}

      {btn == false ? (
        <button className="get-books" onClick={getdata}>
          Get Books
        </button>
      ) : (
        <button className="hide-books" onClick={() => setbtn(false)}>
          Hide Books
        </button>
      )}

      <div
        data-cy="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          margin: "auto",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* you can render the data here by using BookCard */}
        {btn &&
          state.map((elem, i) => {
            return <BookCard elem={elem} key={i} />;
          })}
      </div>
    </div>
  );
};

export default BookRack;
