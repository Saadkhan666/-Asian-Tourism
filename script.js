const cars = Array.from({ length: 250 }, (_, index) => ({
  id: index + 1,
  model: `Car Model ${index + 1}`,
  price: `$${(20000 + index * 100).toLocaleString()}`,
  image: `https://via.placeholder.com/150?text=Car+Model+${index + 1}`,
}));

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