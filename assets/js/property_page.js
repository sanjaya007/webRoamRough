$(".icon-container").on("click", function () {
  $(this)
    .parent()
    .children(".question-answer-list")
    .children(".answer-text")
    .slideToggle();
});

$(".tab-link").on("click", function (e) {
  $(".tab-link").removeClass("active");
  $(this).addClass("active");
});

$(".progress-bar").each(function () {
  $(this).css("width", `${parseFloat($(this).attr("valuenow")) * 20}%`);
});

// weather api
const place = "delhi";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=37a9ad96157584cf50e5350a41295bff`;

const getWeatherData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);

  $("#weatherTemp").text(data.main.temp);
  $("#weatherStatus").text(data.weather[0].main);

  // if (data.weather[0].main.toLowerCase() === "rainy") {
  //   $("#weatherImage").attr("src", `./assets/image/rainy_icon.png`);
  // }
};

getWeatherData();

// lite picker
const picker = new Litepicker({
  element: document.getElementById("litepicker"),
  inlineMode: true,
  numberOfColumns: 2,
  numberOfMonths: 2,
});
