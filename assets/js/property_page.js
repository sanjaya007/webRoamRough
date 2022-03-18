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
const place = "pokhara  ";
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

let allowSingleMonth = null;

if (
  window.innerWidth <= 767 ||
  (window.innerWidth <= 1150 && window.innerWidth > 1023)
) {
  allowSingleMonth = true;
  document.getElementById("litepicker").innerHTML = "";
  litePickerInit(1);
} else {
  allowSingleMonth = false;
  document.getElementById("litepicker").innerHTML = "";
  litePickerInit(2);
}

window.addEventListener("resize", function () {
  if (
    window.innerWidth <= 767 ||
    (window.innerWidth <= 1150 && window.innerWidth > 1023)
  ) {
    allowSingleMonth = true;
    document.getElementById("litepicker").innerHTML = "";
    litePickerInit(1);
  } else {
    allowSingleMonth = false;
    document.getElementById("litepicker").innerHTML = "";
    litePickerInit(2);
  }
});

// lite picker
function litePickerInit(count) {
  const picker = new Litepicker({
    element: document.getElementById("litepicker"),
    inlineMode: true,
    numberOfColumns: count,
    numberOfMonths: count,
  });
}

// mobile nav
$(".nav-tab").on("click", function () {
  $(".mobile-nav").animate({
    left: "0px",
    opacity: "1",
  });
  $(this).attr("data-value", "close");
  $("#propertyBody").addClass("fixed-body");
});

$("#propertyBody").on("click", function (e) {
  const targetEl = e.target;
  const className = $(targetEl).attr("class")?.split(" ")[0];
  if (
    className !== "nav-tab" &&
    className !== "mobile-nav" &&
    className !== "mb-link"
  ) {
    $(".mobile-nav").animate({
      left: "-100%",
      opacity: "0",
    });
    $("#propertyBody").removeClass("fixed-body");
  }
});
