import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);
    // Calls the edit book function from BookContext
    const { editBookById } = useBooksContext();

    // Tracks changes to the input field when the user is typing
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // Event that will send the info from the input field and updates the piece of state 'title' and clears the field once submitted 
    const handleSubmit = (event) => {
        event.preventDefault(); 
        // From the BookShow component
        // It will save the "new" id and title
        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Book Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">
                Save
            </button>
        </form>
    );
}

export default BookEdit;