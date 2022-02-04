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

$(".choose-room-reserve-btn").on("click", function (e) {
  e.preventDefault();
  $(".main-container").addClass("hidden");
  $("#confirmationContainer").removeClass("hidden");

  $(".tab-link").removeClass("active");
  $("#confirmationTabLink").addClass("active");

  $(window).scrollTop(0);
});

$(".confirmation-back-btn").on("click", function (e) {
  e.preventDefault();
  $(".main-container").addClass("hidden");
  $("#chooseRoomContainer").removeClass("hidden");

  $(".tab-link").removeClass("active");
  $("#chooseRoomTabLink").addClass("active");

  $(window).scrollTop(0);
});

$("#specialBtn").on("click", function () {
  $("#dropWrapper").slideToggle();
});

$("#checkoutBody").on("click", function (e) {
  const targetEl = e.target;
  const className = $(targetEl).attr("class")?.split(" ")[1];
  if (className !== "special-btn") {
    $("#dropWrapper").slideUp();
  }
});

// check out form container
$("#receiveTextInput").on("click", function () {
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(this).attr("data-status", "active");
  } else {
    $(this).attr("data-status", "inactive");
  }
});

$("#termsAndConditionsInput").on("click", function () {
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(this).attr("data-status", "active");
  } else {
    $(this).attr("data-status", "inactive");
  }
});
