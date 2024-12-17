// Создайте на основе старого массива новый массив объектов по образу: [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const newCars = cars.map( car => ({
    brand: car.brand,
    isDiesel: car.isDiesel
}));
console.log(newCars);

// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const newCars1 = cars.filter((car) => car.isDiesel)
console.log(newCars1);

// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const newCars2 = cars.filter((car) => !car.isDiesel)
console.log(newCars2);

// Посчитайте общую стоимость всех машин не с дизельным двигателем.

const sum = cars
.filter((car) => !cars.isDiesel)
.reduce((acc, car) => acc + car.price, 0)
console.log(sum);

// Повысьте цену всех машин в массиве на 20%.

const newCarPrice = cars.map(car=>({
    ...car,
    price: car.price * 1.2
}))
console.log(newCarPrice);

// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

const newBrand = cars.filter((car) => car.isDiesel)







