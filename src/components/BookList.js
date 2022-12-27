import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList({books, onDelete, onEdit}) {
    const value = useContext(BooksContext);

    // Maps over the array of books and produces the individual book
    const renderedBooks = books.map((book) => {
        return <BookShow
                onDelete={onDelete}
                onEdit={onEdit}
                key={book.id}
                book={book}
                 />;
    });

    return (
        <div className="book-list">
            {renderedBooks}
            {value}
        </div>
    );
    
}

export default BookList;