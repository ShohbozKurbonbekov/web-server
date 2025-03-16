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
  const errorMsg = `<h5 class="alert alert-danger">${error}</h5>`;
  weatherLists.insertAdjacentHTML("beforeend", errorMsg);
};

const showLoadingStatus = () => {
  weatherLists.innerHTML = "";
  const html = `<button class="btn btn-secondary text-white" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>`;

  weatherLists.insertAdjacentHTML("beforeend", html);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // fetching input from the field
  const inputValue = input.value.trim();
  if (!inputValue) {
    return alert("Please give a try to give an input into the filed");
  }

  // Show loadig message
  showLoadingStatus();

  // fetching data
  fetch(`http://localhost:3000/weather?address=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      //Show error mesage
      if (data.error) {
        showError(data.error);
      } else {
        // Showing success message
        weatherLists.innerHTML = "";
        createInfo(data);
      }
    });

  // clean Input
  clearInput();
});
