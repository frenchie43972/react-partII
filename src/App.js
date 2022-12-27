import axios from "axios";
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import './index.css';

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

    // Use the useEffect function to render and rerender on loading
    // and reloading the page. If not, it can be looping through 
    // network requests
    useEffect(() => {
        fetchBooks();
    }, []);

    const editBookById = async (id, newTitle) => {
        const respone = await axios.put(`http://localhost:3001/books/${id}`,
        {title: newTitle});
        // This is how you update an element inside an array
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {
                    ...book,
                    ...respone.data,
                };
            }
            return book;
        });

        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        await axios.put(`http://localhost:3001/books/${id}`);
        // Uses the filter method to remove a book if it matches the selected id
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        const updatedBooks = [
            ...books,
            response.data,
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