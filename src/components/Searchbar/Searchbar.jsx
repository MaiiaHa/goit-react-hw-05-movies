import { useState } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { FaSistrix } from 'react-icons/fa';
import Notiflix from 'notiflix'; // all modules
// import { toast } from 'react-toastify';

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const formSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      return Notiflix.Notify.info('Please enter your request');
      // return toast('Enter your search');
    }
    onSubmit(value);
    resetForm();
  };

  const formChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  const resetForm = () => {
    setValue('');
  };

  return (
    <div className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={formSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <FaSistrix fill="blue" width={40} height={40} />
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Type your movie search"
          value={value}
          onChange={formChange}
        />
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
