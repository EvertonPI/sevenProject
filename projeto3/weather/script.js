document.querySelector(".search").addEventListener("submit", e => {
  e.preventDefault();

  let input = document.querySelector("#searchInput").value;

  if (input !== "") {
    clearInfo();
    showWarning("Carregando...");

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      input
    )}&appid=01eae5db3f2774cfe57cac9359a2bf98&units=metric&lang=pt_br`;

    const consult = async url => {
      let results = await fetch(url);
      const json = await results.json();

      if (json.cod === 200) {
        showInfo({
          name: json.name,
          country: json.sys.country,
          temp: json.main.temp,
          tempIcons: json.weather[0].icon,
          windSpeed: json.wind.speed,
          windAngle: json.wind.deg,
        });
        return showInfo;
      }
      clearInfo();
      showWarning("Não encontramos esta localização.");
    };
    consult(url);
  } else {
    clearInfo();
  }
});
const clearInfo = () => {
  showInfo("");
  document.querySelector(".resultado").style.display = "none";
};
const showInfo = json => {
  const { name, country, temp, windSpeed, windAngle, tempIcons } = json;
  showWarning("");
  document.querySelector(".resultado").style.display = "block";
  document.querySelector(".title").innerHTML = `${name}, ${country}`;
  document.querySelector(".tempInfo").innerHTML = `${temp} <sup>ºC</sup>`;
  document.querySelector(
    ".ventoInfo"
  ).innerHTML = `${windSpeed} <span>km/h</span>`;

  document
    .querySelector(".temp img")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${tempIcons}@2x.png`
    );
  document.querySelector(".ventoPonto").style.transform = `rotate(${
    windAngle - 90
  }deg)`;
};

const showWarning = msg => {
  document.querySelector(".warning").innerHTML = msg;
};
