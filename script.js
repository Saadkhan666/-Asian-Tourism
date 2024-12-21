const cars = [
{ id: 1, model: "Toyota Corolla", price: "$20,000", image: "https://example.com/images/toyota-corolla.jpg" },
{ id: 2, model: "Honda Civic", price: "$22,000", image: "https://example.com/images/honda-civic.jpg" },
{ id: 3, model: "Ford Mustang", price: "$30,000", image: "https://example.com/images/ford-mustang.jpg" },
// Add more cars here
];

const carListElement = document.getElementById("car-list");
const searchInput = document.getElementById("searchInput");

function displayCars(filter = "") {
carListElement.innerHTML = "";
cars
.filter(car => car.model.toLowerCase().includes(filter.toLowerCase()))
.forEach(car => {
const carElement = document.createElement("div");
carElement.className = "car";
carElement.innerHTML = `
<img src="${car.image}" alt="${car.model}">
<h3>${car.model}</h3>
<p>Price: ${car.price}</p>
`;
carListElement.appendChild(carElement);
});
}

searchInput.addEventListener("input", () => {
displayCars(searchInput.value);
});

// Initial display of cars
displayCars();