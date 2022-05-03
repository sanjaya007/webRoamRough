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

    if (className !== "input-box") {
      $("#monthBox").hide(500);
    }
  });

  // month drop down
  $("#monthInputBox").on("click", function (e) {
    $("#monthBox").toggle(500);
  });

  $(".month-list").on("click", function () {
    $(".month-list").removeClass("active");
    $(this).addClass("active");
  });

  // pie chart
  // var pieChartLabels = [
  //   "Double Room",
  //   "King Room",
  //   "Normal Room",
  //   "Single Room",
  //   "VIP Room",
  //   "Apartments",
  // ];
  var pieChartColorHex = [
    "#5f2eea",
    "#9d02e6",
    "#e2b93b",
    "#4bde97",
    "#ff5a10",
    "#006CE6",
  ];
  var pieChartDatas = [20, 10, 20, 10, 30, 10];

  const pieChartConfig = {
    type: "pie",
    data: {
      // labels: pieChartLabels,
      datasets: [
        {
          backgroundColor: pieChartColorHex,
          borderColor: pieChartColorHex,
          data: pieChartDatas,
        },
      ],
    },
    options: {
      responsive: true,
    },
  };

  const pieChart = new Chart(
    document.getElementById("pieChart"),
    pieChartConfig
  );

  // line chart
  const lineChartConfig = {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Number of Visitors",
          data: [10, 20, 30, 20, 30, 20, 30, 100],
          fill: false,
          borderColor: "#006ce6",
          tension: 0.4,
        },
      ],
    },
  };

  const lineChart = new Chart(
    document.getElementById("lineChart"),
    lineChartConfig
  );
});
