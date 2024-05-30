import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
/* import { useEffect } from "react";
import { fetchFilters } from "../../redux/contactsOps";
 */
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.search}
        value={filter}
        onChange={handleChange}
        type="text"
      />
    </div>
  );
}
