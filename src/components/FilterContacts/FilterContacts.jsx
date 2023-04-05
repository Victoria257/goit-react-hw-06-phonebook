// import PropTypes from 'prop-types';
import css from './FilterContacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';

const FilterContacts = () => {
  const filter = useSelector(state => state.filterContact.filters);
  const dispatch = useDispatch();

  const onChange = event => dispatch(setStatusFilter(event.target.value));

  return (
    <div className={css.filter}>
      <h3>Find contacts by name</h3>
      <input
        className={css.filterInput}
        type="text"
        name="text"
        value={filter}
        onChange={onChange}
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
      ></input>
    </div>
  );
};

export default FilterContacts;

// FilterContacts.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
