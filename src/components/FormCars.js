import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function FormCar() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return state.form;
  });

  const handlerChangeCost = (e) => {
    const value = parseInt(e.target.value) || 0;
    console.log();
    dispatch(changeCost(value));
  };
  const handlerChangeName = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCar({
        name: name,
        cost: cost,
      })
    );
  };

  return (
    <div className=" container mx-auto p-4 w-6/12 ">
      <div className=" my-8 text-base  ">
        <h2>ADD CAR</h2>
      </div>
      <form
        onSubmit={handlerSubmit}
        className="flex border p-8 rounded justify-center items-end"
      >
        <div className="mx-8">
          <label className="mx-4 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            value={name}
            onChange={handlerChangeName}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </div>
        <div className="mx-8">
          <label className="mx-4 block text-sm font-medium text-slate-700">
            Cost
          </label>
          <input
            type="number"
            value={cost || ""}
            onChange={handlerChangeCost}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </div>

        <button className="border px-4 h-8 rounded bg-indigo-500 text-white ">
          Add car
        </button>
      </form>
    </div>
  );
}

export default FormCar;
