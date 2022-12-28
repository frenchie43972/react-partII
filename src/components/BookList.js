import useBooksContext from '../hooks/use-books-context';
import BookShow from './BookShow';


function BookList() {
  // Calls books from BooksContext
  const { books } = useBooksContext();

  // Maps through the books array and returns 
  // individual books by id
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} />
    );
  });

  // Displays the books from renderedBooks in a div with come CSS
  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default BookList;
