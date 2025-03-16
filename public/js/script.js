console.log("js is running in the browser");
const form = document.querySelector("form");
const input = document.querySelector("#inputField");
const weatherLists = document.querySelector("#weather__lists");

// FUNCTIONS
const createInfo = function (data) {
  const html = `  <li class="weather_list">
            <h2 class="weather__title">
           <i class="bi bi-buildings"></i>
              ${data.location}
            </h2>
            <p class="weather__description flex">
           <i class="bi bi-info-circle"></i>
            ${data.forecast}
            </p>
          </li>`;

  weatherLists.insertAdjacentHTML("beforeend", html);
};

const clearInput = () => {
  input.value = null;
  input.focus();
};
const showError = (error) => {
  weatherLists.innerHTML = "";
  weatherLists.insertAdjacentHTML("beforeend", error);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = input.value.trim();

  if (!inputValue) {
    return alert("Please give a try to give an input into the filed");
  }

  // fetching data
  fetch(`http://localhost:3000/weather?address=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        showError(data.error);
      } else {
        weatherLists.innerHTML = "";
        createInfo(data);
      }
    });
  // clean Input
  clearInput();
});
