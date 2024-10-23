import React from "react";
import BookSingleComponent from "./BookSingleComponent";
const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => {
        return <BookSingleComponent key={item._id} book={item} />;
      })}
    </div>
  );
};

export default BooksCard;
