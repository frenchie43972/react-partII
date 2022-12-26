import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import './index.css';

function App() {
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        // This is how you update an element inside an array
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title: newTitle};
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
        // Uses the filter method to remove a book if it matches the selected id
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                // Generates a random book id
                id: Math.round(Math.random() *  9999),
                title,
            },
        ];

        setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <h1>My Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    ); 
}

export default App;