$(".icon-container").on("click", function () {
  $(this)
    .parent()
    .children(".question-answer-list")
    .children(".answer-text")
    .slideToggle();
});

$(".tab-link").on("click", function (e) {
  e.preventDefault();
  $(".tab-link").removeClass("active");
  $(this).addClass("active");
});

$(".progress-bar").each(function () {
  $(this).css("width", `${parseFloat($(this).attr("valuenow")) * 20}%`);
});
