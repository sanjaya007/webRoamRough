$(window).on("load", function () {
  let allowToggle = null;

  if (window.innerWidth <= 1200) {
    allowToggle = true;
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1200) {
      allowToggle = false;
      $(".left-container").css({
        left: "0",
        opacity: "1",
      });
    } else {
      allowToggle = true;
      $(".left-container").css({
        left: "-100%",
        opacity: "0",
      });
    }
  });

  $(".nav-tab").on("click", function () {
    $(".left-container").animate({
      left: "0px",
      opacity: "1",
    });
  });

  $("#adminClientBody").on("click", function (e) {
    if (allowToggle) {
      const targetEl = e.target;
      const className = $(targetEl).attr("class")?.split(" ")[0];
      if (
        className !== "left-container" &&
        className !== "box" &&
        className !== "list" &&
        className !== "logout-box"
      ) {
        $(".left-container").animate({
          left: "-100%",
          opacity: "0",
        });
      }
    }
  });

  // toggle container
  $(".faq-link").on("click", function (e) {
    e.preventDefault();
    const elId = $(this).attr("data-toggle");

    $(".toggle-container").hide();
    $(`#${elId}`).fadeIn(200);
    $(window).scrollTop(0);
  });

  // qa
  $(".question-box").on("click", function () {
    const parentEl = $(this).parent();
    const answerBox = parentEl.children(".answer-box");
    const status = parentEl.attr("active-status");

    if (status === "false") {
      parentEl.attr("active-status", "true");
      parentEl.addClass("active");
      answerBox.slideDown();
    } else {
      parentEl.attr("active-status", "false");
      answerBox.slideUp(function () {
        parentEl.removeClass("active");
      });
    }
  });
});
