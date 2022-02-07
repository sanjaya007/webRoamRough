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

$("#editAccountBtn").on("click", function (e) {
  e.preventDefault();
  $(".inner-main-box").addClass("hidden");
  $("#innerEditBox").removeClass("hidden");
});

$("#saveAccountBtn").on("click", function () {
  $(".inner-main-box").addClass("hidden");
  $("#innerAccountBox").removeClass("hidden");
});
