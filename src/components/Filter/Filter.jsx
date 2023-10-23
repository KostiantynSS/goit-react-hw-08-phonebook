import { useDispatch, useSelector } from 'react-redux';
// import css from './filter.module.css';
import { filterContacts } from 'redux/slice/filterSlice';
import { selectFilter } from 'redux/slice/selectors';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    const data = e.currentTarget.value;
    dispatch(filterContacts(data));
  };

  return (
    <TextField
      id="filter"
      type="text"
      size="small"
      variant="outlined"
      value={filter}
      onChange={changeFilter}
    />
  );
};

export default Filter;
