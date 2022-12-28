import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
    const [title, setTitle] = useState('');
    // Calls the createBook function from BooksContext
    const { createBook } = useBooksContext();

    // Tracks changes to the input field when the user is typing
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // Event that will send the info from the input field and updates the piece of state 'title' and clears the field once submitted 
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };

    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <h3>Add a Book to the Collection</h3>
                <label>Book Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;