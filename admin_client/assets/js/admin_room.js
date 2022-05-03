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

    const target = e.target;
    const className = $(target).attr("class")?.split(" ")[0];

    if (className !== "icon") {
      $("#sortBox").slideUp();
    }

    if (
      className !== "icon" &&
      className !== "filter-box" &&
      className !== "form-box" &&
      className !== "select-box" &&
      className !== "select-wrapper" &&
      className !== "select-input" &&
      className !== "btn-container" &&
      className !== "reset-filter"
    ) {
      $("#filterBox").slideUp();
    }
  });

  $("#sortIcon").on("click", function (e) {
    $("#filterBox").slideUp();
    $("#sortBox").slideToggle();
  });

  $(".sort-list").on("click", function () {
    $(".sort-list").removeClass("active");
    $(this).addClass("active");
  });

  $("#filterIcon").on("click", function (e) {
    $("#sortBox").slideUp();
    $("#filterBox").slideToggle();
  });

  $("#filterBtn").on("click", function (e) {
    e.preventDefault();
    $("#filterBox").slideUp();
  });

  $("#resetFilterBtn").on("click", function (e) {
    e.preventDefault();
    $("#filterBox").slideUp();
  });

  // toggle container
  $(".room-link").on("click", function (e) {
    e.preventDefault();
    const elId = $(this).attr("data-toggle");
    const title = $(this).attr("data-title");

    $(".toggle-container").hide();
    $("#roomTitle").text(title);
    $(`#${elId}`).fadeIn(200);
    $(window).scrollTop(0);
  });
});
