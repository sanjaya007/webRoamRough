$(".price-btn").on("click", function () {
  $("#priceBoxWrapper").slideToggle();
});

$("#checkoutBody").on("click", function (e) {
  const targetEl = e.target;
  const className = $(targetEl).attr("class")?.split(" ")[0];
  if (className !== "price-btn") {
    $("#priceBoxWrapper").slideUp();
  }
});

// toggle container starts
$(".choose-room-reserve-btn").on("click", function (e) {
  e.preventDefault();
  $(".main-container").addClass("hidden");
  $("#confirmationContainer").removeClass("hidden");

  $(".tab-link").removeClass("active");
  $("#confirmationTabLink").addClass("active");

  $(window).scrollTop(0);
});

$(".confirmation-confirm-btn").on("click", function (e) {
  e.preventDefault();
  $(".main-container").addClass("hidden");
  $("#checkoutContainer").removeClass("hidden");

  $(".tab-link").removeClass("active");
  $("#checkoutTabLink").addClass("active");

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

$(".check-booking-btn").on("click", function (e) {
  e.preventDefault();
  $(".main-container").addClass("hidden");
  $("#confirmationContainer").removeClass("hidden");

  $(".tab-link").removeClass("active");
  $("#confirmationTabLink").addClass("active");

  $(window).scrollTop(0);
});

// toggle container ends

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

let currentWallet = "esewaPay";
let allowWallet = true;
// payment options
$(".payment-check-box").on("click", function () {
  allowWallet = false;
  $(".payment-check-box").removeClass("active");
  $(".payment-check-box").attr("data-status", "inactive");

  $(".wallet-list").removeClass("active");
  $(".wallet-list").attr("data-status", "inactive");

  $(this).addClass("active");
  $(this).attr("data-status", "active");

  if ($(this).attr("id") === "walletPay") {
    allowWallet = true;
    $(`#${currentWallet}`).addClass("active");
    $(`#${currentWallet}`).attr("data-status", "active");
  }
});

$(".wallet-list").on("click", function () {
  currentWallet = $(this).attr("id");
  allowWallet = true;

  $(".wallet-list").removeClass("active");
  $(".wallet-list").attr("data-status", "inactive");

  $(this).addClass("active");
  $(this).attr("data-status", "active");

  $(".payment-check-box").removeClass("active");
  $(".payment-check-box").attr("data-status", "inactive");

  $("#walletPay").addClass("active");
  $("#walletPay").attr("data-status", "active");
});

// manage booking
$(".travel-check-box").on("click", function () {
  $(".travel-check-box").removeClass("active");
  $(".travel-check-box").attr("data-status", "inactive");

  $(this).addClass("active");
  $(this).attr("data-status", "active");
});

// booking action
$("#completeBookingBtn").on("click", function (e) {
  e.preventDefault();
  if (allowWallet) {
    $(".payment-modal").addClass("hidden");
    $(`#${currentWallet}Modal`).removeClass("hidden");
  } else {
    $(".checkout-wrapper").addClass("hidden");
    $("#checkoutFinalBox").removeClass("hidden");
    $(window).scrollTop(0);
  }
});

$(".payment-confirm-btn").on("click", function () {
  $(".payment-modal").addClass("hidden");
  $(".checkout-wrapper").addClass("hidden");
  $("#checkoutFinalBox").removeClass("hidden");
  $(window).scrollTop(0);
});

// modal
$(".payment-modal").on("click", function (e) {
  const targetEl = e.target;
  const className = $(targetEl).attr("class")?.split(" ")[0];
  if (className === "payment-modal") {
    $(this).addClass("hidden");
    $("#checkoutBody").removeClass("fixed-body");
  }
});

// change room
$(".change-room-link").on("click", function (e) {
  e.preventDefault();
  $("#roomModal").removeClass("hidden");
  $("#checkoutBody").addClass("fixed-body");
});

$("#roomModal").on("click", function (e) {
  const targetEl = e.target;
  const className = $(targetEl).attr("class")?.split(" ")[0];
  if (className === "room-modal") {
    $(this).addClass("hidden");
    $("#checkoutBody").removeClass("fixed-body");
  }
});

// mobile nav
$(".nav-tab").on("click", function () {
  $(".mobile-nav").animate({
    left: "0px",
    opacity: "1",
  });
  $(this).attr("data-value", "close");
  $("#checkoutBody").addClass("fixed-body");
});

$("#checkoutBody").on("click", function (e) {
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
    $("#checkoutBody").removeClass("fixed-body");
  }
});
