
const countries = [
  { 
    name: "Saudi Arabia", 
    attractions: ["Kaaba", "Masjid-e-Nabwi", "Historic Jeddah", "Al-Ula"], 
    image: "https://example.com/images/saudi-arabia.jpg" 
  },
  { 
    name: "Japan", 
    attractions: ["Mount Fuji", "Tokyo Tower", "Kyoto Temples", "Osaka Castle"], 
    image: "https://example.com/images/japan.jpg" 
  },
  { 
    name: "India", 
    attractions: ["Taj Mahal", "Jaipur", "Kerala Backwaters", "Goa Beaches"], 
    image: "https://example.com/images/india.jpg" 
  },
  { 
    name: "Thailand", 
    attractions: ["Phuket Beaches", "Floating Markets", "Grand Palace", "Chiang Mai"], 
    image: "https://example.com/images/thailand.jpg" 
  },
  { 
    name: "China", 
    attractions: ["Great Wall", "Forbidden City", "Terracotta Army", "Zhangjiajie Mountains"], 
    image: "https://example.com/images/china.jpg" 
  },
  { 
    name: "Indonesia", 
    attractions: ["Bali", "Borobudur Temple", "Komodo Island", "Lake Toba"], 
    image: "https://example.com/images/indonesia.jpg" 
  },
  { 
    name: "Malaysia", 
    attractions: ["Petronas Towers", "Langkawi Islands", "Batu Caves", "Penang"], 
    image: "https://example.com/images/malaysia.jpg" 
  },
  { 
    name: "Singapore", 
    attractions: ["Marina Bay Sands", "Sentosa Island", "Gardens by the Bay", "Orchard Road"], 
    image: "https://example.com/images/singapore.jpg" 
  },
  { 
    name: "Vietnam", 
    attractions: ["Ha Long Bay", "Hanoi Old Quarter", "Cu Chi Tunnels", "Hue Citadel"], 
    image: "https://example.com/images/vietnam.jpg" 
  },
  { 
    name: "South Korea", 
    attractions: ["Gyeongbokgung Palace", "Jeju Island", "Busan Beaches", "Seoul Tower"], 
    image: "https://example.com/images/south-korea.jpg" 
  },
  { 
    name: "Philippines", 
    attractions: ["Boracay", "Chocolate Hills", "Palawan", "Cebu"], 
    image: "https://example.com/images/philippines.jpg" 
  },
  { 
    name: "Nepal", 
    attractions: ["Mount Everest", "Kathmandu Valley", "Pokhara", "Lumbini"], 
    image: "https://example.com/images/nepal.jpg" 
  },
  { 
    name: "Sri Lanka", 
    attractions: ["Sigiriya", "Galle Fort", "Ella", "Yala National Park"], 
    image: "https://example.com/images/sri-lanka.jpg" 
  },
  { 
    name: "Pakistan", 
    attractions: ["Hunza Valley", "Lahore Fort", "Badshahi Mosque", "Swat Valley"], 
    image: "https://example.com/images/pakistan.jpg" 
  },
  { 
    name: "Bangladesh", 
    attractions: ["Sundarbans", "Cox's Bazar", "Dhakeshwari Temple", "Sonargaon"], 
    image: "https://example.com/images/bangladesh.jpg" 
  },
];

const countryListElement = document.getElementById("country-list");
const searchInput = document.getElementById("searchInput");

function displayCountries(filter = "") {
  countryListElement.innerHTML = "";
  countries
    .filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(country => {
      const countryElement = document.createElement("div");
      countryElement.className = "country";
      countryElement.innerHTML = `
        <img src="${country.image}" alt="${country.name}">
        <h3>${country.name}</h3>
        <p>Attractions: ${country.attractions.join(", ")}</p>
      `;
      countryListElement.appendChild(countryElement);
    });
}

searchInput.addEventListener("input", () => {
  displayCountries(searchInput.value);
});

// Initial display of countries
displayCountries();
