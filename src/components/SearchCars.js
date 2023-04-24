import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function SearchCars() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => {
    return state.cars;
  });
  const handlerChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className="flex justify-center px-8">
      <div className="flex justify-end  rounded w-6/12 p-4 items-center">
        <label>Search</label>
        <input
          value={searchTerm}
          onChange={handlerChange}
          className="mx-4 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
        />
      </div>
    </div>
  );
}

export default SearchCars;
