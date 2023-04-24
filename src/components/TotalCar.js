import { useSelector } from "react-redux";

function TotalCar() {
  const carsTotal = useSelector(({ cars: { data, searchTerm } }) => {
    const filterCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filterCars.reduce((acc, car) => {
      return (acc += car.cost);
    }, 0);
  });

  return (
    <div className="flex justify-center px-8 my-4">
      <div className="flex justify-end w-6/12">
        <label className="mx-4">Total: </label>
        <p>${carsTotal}</p>
      </div>
    </div>
  );
}

export default TotalCar;
