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

  $("#adminHotelBody").on("click", function (e) {
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

    if (className !== "input-box") {
      $("#monthBox").hide(500);
    }
  });

  $("#sortIcon").on("click", function (e) {
    $("#sortBox").slideToggle();
  });

  $(".sort-list").on("click", function () {
    $(".sort-list").removeClass("active");
    $(this).addClass("active");
  });

  $("#monthInputBox").on("click", function (e) {
    $("#monthBox").toggle(500);
  });

  $(".month-list").on("click", function () {
    $(".month-list").removeClass("active");
    $(this).addClass("active");
  });

  $(".view-link").on("click", function (e) {
    e.preventDefault();
    console.log("hello");
  });

  // chart
  const config = {
    type: "bar",
    data: {
      labels: ["Dec", "Jan", "Feb", "March", "April"],
      datasets: [
        {
          label: "Revenue",
          data: [60, 40, 50, 20, 10, 100],
          fill: false,
          backgroundColor: "#006ce6",
          tension: 0.4,
        },
      ],
    },
  };

  const hotelChart = new Chart(document.getElementById("hotelChart"), config);
});
