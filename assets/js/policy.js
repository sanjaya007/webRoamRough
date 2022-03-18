// mobile nav
$(".nav-tab").on("click", function () {
  $(".mobile-nav").animate({
    left: "0px",
    opacity: "1",
  });
  $(this).attr("data-value", "close");
  $("#policyBody").addClass("fixed-body");
});

$("#policyBody").on("click", function (e) {
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
    $("#policyBody").removeClass("fixed-body");
  }
});
