import { nanoid } from 'nanoid';
import { setFilter } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

import { IoIosSearch } from 'react-icons/io';

const Filter = () => {
  const inputFilterId = nanoid();
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <label className={css.labelTitle} htmlFor={inputFilterId}>
        <p className={css.labelTitle}>Find contacts by name</p>
        <input
          id={inputFilterId}
          className={css.input}
          type="text"
          onChange={handleChange}
        />
        <IoIosSearch className={css.searchIcon} />
      </label>
    </>
  );
};

export default Filter;
