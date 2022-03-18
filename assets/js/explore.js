// mobile nav
$(".nav-tab").on("click", function () {
  $(".mobile-nav").animate({
    left: "0px",
    opacity: "1",
  });
  $(this).attr("data-value", "close");
  $("#exploreBody").addClass("fixed-body");
});

$("#exploreBody").on("click", function (e) {
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
    $("#exploreBody").removeClass("fixed-body");
  }
});

let tabValue = "";
// tab container
$(".tab-link").on("click", function (e) {
  e.preventDefault();
  $(".tab-link").removeClass("active");
  const className = $(this).attr("class").split(" ")[1];
  $(`.${className}`).addClass("active");
  $("#mobileTabBox p").text($(this).text());
});

// mobile tab
$("#mobileTabBox").on("click", function () {
  $("#mobileListWrapper").slideToggle();
});

$("#exploreBody").on("click", function (e) {
  const targetEl = e.target;
  const className = $(targetEl).attr("class").split(" ")[0];
  if (
    className !== "tab-box" &&
    className !== "list-box" &&
    className !== "list-wrapper"
  ) {
    $("#mobileListWrapper").slideUp();
  }
});
