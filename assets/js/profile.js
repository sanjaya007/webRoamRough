// tab
$(".tab-link").on("click", function () {
  $(".tab-link").removeClass("active");
  $(this).addClass("active");

  const elId = $(this).attr("id");
  const finalId = elId.split("TabLink")[0] + "Box";

  if (finalId === "accountBox") {
    $(".inner-main-box").addClass("hidden");
    $("#innerAccountBox").removeClass("hidden");
  }

  $(".main-box").addClass("hidden");
  $(`#${finalId}`).removeClass("hidden");
});

// edit account
$("#editAccountBtn").on("click", function (e) {
  e.preventDefault();
  $(".inner-main-box").addClass("hidden");
  $("#innerEditBox").removeClass("hidden");
});

$("#saveAccountBtn").on("click", function () {
  $(".inner-main-box").addClass("hidden");
  $("#innerAccountBox").removeClass("hidden");
});

// drop box tab
$(".info-title-link").on("click", function () {
  $(".info-title-link").removeClass("active");
  $(this).toggleClass("active");

  if ($(this).parent().children(".info-wrapper").css("display") === "block") {
    $(this).parent().children(".info-wrapper").slideUp();
    $(".info-title-link").removeClass("active");
    return false;
  }
  $(".info-wrapper").slideUp(50);
  $(this).parent().children(".info-wrapper").slideDown();
});

// payment method
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

$("#paymentSaveBtn").on("click", function (e) {
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

$(".payment-modal").on("click", function (e) {
  const targetEl = e.target;
  const className = $(targetEl).attr("class")?.split(" ")[0];
  if (className === "payment-modal") {
    $(this).addClass("hidden");
    $("#profileBody").removeClass("fixed-body");
  }
});

// edit modal
$("#emailVerificationBtn").on("click", function () {
  $(".modal-wrapper").addClass("hidden");
  $("#emailChangeModal").removeClass("hidden");
});

$("#passwordVerificationBtn").on("click", function () {
  $(".modal-wrapper").addClass("hidden");
  $("#passwordChangeModal").removeClass("hidden");
});

$(".modal-wrapper").on("click", function (e) {
  const targetEl = e.target;
  const className = $(targetEl).attr("class")?.split(" ")[0];

  if (className === "modal-wrapper") {
    $(".modal-wrapper").addClass("hidden");
  }
});

// mobile nav
$(".nav-tab").on("click", function () {
  $(".mobile-nav").animate({
    left: "0px",
    opacity: "1",
  });
  $(this).attr("data-value", "close");
  $("#profileBody").addClass("fixed-body");
});

$("#profileBody").on("click", function (e) {
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
    $("#profileBody").removeClass("fixed-body");
  }
});
