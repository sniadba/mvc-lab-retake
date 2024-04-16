const cars = [
    {id: 1, make: "Audi", model: "RS7", year: 2023, color: "Czarny"},
    {id: 2, make: "Mercedes", model: "G-63 AMG", year: 2022, color: "Czarny"},
    {id: 3, make: "Porshe", model: "Gt3-RS", year: 2021, color: "Niebieski"},
    {id: 4, make: "Tesla", model: "Roadster", year: 2020, color: "Czerwny"},
    {id: 5, make: "Toyota", model: "Corolla", year: 2022, color: "Biały"}
];


const getCars = () => {
    return cars;
};

const getCarInformation = (id) => {
    const car = cars.find(car => car.id === id);
    if (car) {
        const { make, model, year, color } = car;
        return `Make: ${make}, Model: ${model}, Year: ${year}, Color: ${color}.`;
    } else {
        return "Car doesn't exist";
    }
};

const getCarAge = (id) => {
    const car = cars.find(car => car.id === id);
    if (car) {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - car.year;
        return `Car is ${carAge} years old.`;
    } else {
        return "Car doesn't exist";
    }
};

module.exports = {
    getCars,
    getCarInformation,
    getCarAge
};
