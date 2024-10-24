import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { useContacts } from '../../hooks';
import { changeFilter } from '../../redux/contacts/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const { filter } = useContacts();
  const searchFieldId = useId();

  const changeFilterHandler = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label className={css.label} htmlFor={searchFieldId}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          id={searchFieldId}
          value={filter}
          onChange={changeFilterHandler}
        />
      </label>
    </div>
  );
};

export default SearchBox;
