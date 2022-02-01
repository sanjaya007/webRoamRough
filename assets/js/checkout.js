$(".price-btn").on("click", function () {
  $("#priceBoxWrapper").slideToggle();
});

$("#checkoutBody").on("click", function (e) {
  const targetEl = e.target;
  const className = $(targetEl).attr("class")?.split(" ")[0];
  console.log(className);
  if (className !== "price-btn") {
    $("#priceBoxWrapper").slideUp();
  }
});
