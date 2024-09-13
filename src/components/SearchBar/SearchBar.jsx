import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import style from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter text to search for images');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <button className={style.btnSearch} type="submit">
          <FaSearch />
        </button>
        <input
          className={style.inpyt}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          values={query}
          onChange={handleChange}
        />
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
