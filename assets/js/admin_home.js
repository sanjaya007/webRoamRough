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

  $("#adminHomeBody").on("click", function (e) {
    if (allowToggle) {
      const targetEl = e.target;
      const className = $(targetEl).attr("class")?.split(" ")[0];
      console.log(className);
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

    if (className !== "input-box") {
      $("#monthBox").hide(500);
    }
  });

  $("#monthInputBox").on("click", function (e) {
    $("#monthBox").toggle(500);
  });

  $(".month-list").on("click", function () {
    $(".month-list").removeClass("active");
    $(this).addClass("active");
  });

  // stat chart
  const statConfig = {
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

  const statChart = new Chart(document.getElementById("statChart"), statConfig);

  // booking status chart
  const bookingStatusconfig = {
    type: "line",
    responsive: true,
    data: {
      labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Number of Visitors",
          data: [10, 20, 30, 20, 30, 20, 30, 100],
          borderColor: "#006ce6",
          tension: 0.4,
        },
      ],
    },
  };

  const bookingStatusChart = new Chart(
    document.getElementById("bookingStatusChart"),
    bookingStatusconfig
  );
});
