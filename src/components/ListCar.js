import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
function ListCar() {
  const dispatch = useDispatch();
  const { data, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return {
      data: filteredCars,
      name: form.name,
    };
  });

  const renderData = data.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div className="flex justify-between border rounded w-full my-2 px-8 py-4">
        <p className={`${bold && "font-bold"}`}>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => {
            dispatch(removeCar(car.id));
          }}
          className="border px-4 h-8 rounded bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className=" flex px-8 justify-center">
      <div className="flex flex-col items-center  w-6/12">{renderData}</div>
    </div>
  );
}

export default ListCar;
