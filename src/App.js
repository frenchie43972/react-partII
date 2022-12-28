import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";
import './index.css';

function App() {
    const { fetchBooks } = useContext(BooksContext);

    // Use the useEffect function to render and rerender on loading
    // and reloading the page. If not, it will loop through 
    // network requests via the axios.get request from fetchBooks()
    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="app">
            <h1>My Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    ); 
}

export default App;