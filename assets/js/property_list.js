// mobile nav
$(".nav-tab").on("click", function () {
  $(".mobile-nav").animate({
    left: "0px",
    opacity: "1",
  });
  $(this).attr("data-value", "close");
  $("#propertyListBody").addClass("fixed-body");
});

// room,users selector
var SearchBoxTool = {
  open: function () {
    $("#roomUsersSelector").fadeIn();
  },
  close: function () {
    $("#roomUsersSelector").fadeOut();
  },
  toggle: function () {
    $("#roomUsersSelector").fadeToggle();
  },
};

// calendar init
var calendarInit = {
  open: function () {
    $("#calendarPicker").fadeIn();
  },
  close: function () {
    $("#calendarPicker").fadeOut();
  },
  toggle: function () {
    $("#calendarPicker").fadeToggle();
  },
};

$(".minus-tool").on("click", function (e) {
  var valueDiv = $(this).parent().children(".value");
  var newValue = parseInt($(valueDiv).text()) - 1;

  if (newValue >= 0) {
    $(valueDiv).text(newValue);
    $(this).removeClass("disabled");

    // update value on search box
    var parentClass = $(this).parent().attr("class");
    if (parentClass.indexOf("adults-selector-tool") >= 0) {
      $("#adultsCount").text(newValue);
    }
    if (parentClass.indexOf("children-selector-tool") >= 0) {
      $("#childrenCount").text(newValue);
    }
    if (parentClass.indexOf("room-selector-tool") >= 0) {
      $("#roomCount").text(newValue);
    }
  } else $(this).addClass("disabled");
});

$(".plus-tool").on("click", function (e) {
  var valueDiv = $(this).parent().children(".value");
  var minusTool = $(this).parent().children(".minus-tool");
  var newValue = parseInt($(valueDiv).text()) + 1;
  if (newValue > 0) {
    $(valueDiv).text(newValue);

    // update value on search box
    var parentClass = $(this).parent().attr("class");
    if (parentClass.indexOf("adults-selector-tool") >= 0) {
      $("#adultsCount").text(newValue);
    }
    if (parentClass.indexOf("children-selector-tool") >= 0) {
      $("#childrenCount").text(newValue);
    }
    if (parentClass.indexOf("room-selector-tool") >= 0) {
      $("#roomCount").text(newValue);
    }

    $(minusTool).removeClass("disabled");
  }
});

$(".room-text-wrapper").on("click", function () {
  SearchBoxTool.toggle();
});

let allowSingleMonth = null;

if (window.innerWidth <= 767) {
  allowSingleMonth = true;
  document.getElementById("litepicker").innerHTML = "";
  litePickerInit(1);
} else {
  allowSingleMonth = false;
  document.getElementById("litepicker").innerHTML = "";
  litePickerInit(2);
}

window.addEventListener("resize", function () {
  if (window.innerWidth <= 767) {
    allowSingleMonth = true;
    document.getElementById("litepicker").innerHTML = "";
    litePickerInit(1);
  } else {
    allowSingleMonth = false;
    document.getElementById("litepicker").innerHTML = "";
    litePickerInit(2);
  }
});

// lite picker
function litePickerInit(count) {
  const picker = new Litepicker({
    element: document.getElementById("litepicker"),
    inlineMode: true,
    numberOfColumns: count,
    numberOfMonths: count,
  });
}

$(".date-wrapper").on("click", function () {
  calendarInit.toggle();
});

// close when click outside
$("#propertyListBody").on("click", function (e) {
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
    $("#propertyListBody").removeClass("fixed-body");
  }

  if (
    className !== "right" &&
    className !== "room-text-wrapper" &&
    className !== "room-selector" &&
    className !== "plus-tool" &&
    className !== "minus-tool" &&
    className !== "selector-tool"
  ) {
    SearchBoxTool.close();
  }

  if (
    className !== "date-wrapper" &&
    className !== "button-previous-month" &&
    className !== "button-next-month" &&
    className !== "day-item" &&
    className !== "month-item-name" &&
    className !== "month-item-year"
  ) {
    calendarInit.close();
  }
});

// custom check box
$(".property-box").on("click", function () {
  $(this).toggleClass("active");
});

$(".payment-box").on("click", function () {
  $(this).toggleClass("active");
});

$(".cleaning-box").on("click", function () {
  $(this).toggleClass("active");
});

$(".meal-box").on("click", function () {
  const isAll = $(this).attr("data-value") === "all" ? true : false;
  if (isAll) {
    $(".meal-box").removeClass("active");
    $(this).toggleClass("active");
  } else {
    $(this).toggleClass("active");
  }
});

$(".neighborhood-box").on("click", function () {
  $(this).toggleClass("active");
});

$(".facility-box").on("click", function () {
  $(this).toggleClass("active");
});

$(".room-facility-box").on("click", function () {
  $(this).toggleClass("active");
});

// rating
$(".star-box").on("click", function () {
  $(".star-box").removeClass("active");
  $(this).toggleClass("active");
});

$(".guest-box").on("click", function () {
  $(".guest-box").removeClass("active");
  $(this).toggleClass("active");
});

// list toggle
$(".tab-link").on("click", function (e) {
  e.preventDefault();
  const targetEl = $(this).attr("data-target");

  $(".tab-link").removeClass("active");
  $(this).addClass("active");

  $(".list-container").hide();
  $(`#${targetEl}`).fadeIn();
});

// like
$(".like-icon").on("click", function () {
  const likeStatus =
    $(this).attr("data-status") === "inactive" ? "active" : "inactive";

  $(this).attr("data-status", likeStatus);

  if (likeStatus === "active") {
    $(this).children("img").attr("src", "./assets/image/heart2.png");
  } else {
    $(this).children("img").attr("src", "./assets/image/heart1.png");
  }
});

// mobile tab
// view map
$(".view-map-btn").on("click", function (e) {
  e.preventDefault();
  $("#mapModal").fadeIn();
});

$("#mapModal").on("click", function (e) {
  const target = e.target;
  const elID = $(target).attr("id");

  if (elID === "mapModal") {
    $("#mapModal").fadeOut();
  }
});

// filter
$("#filterBtn").on("click", function (e) {
  e.preventDefault();

  $("#filterContainer").fadeIn();
});

$("#filterClose").on("click", function () {
  $("#filterContainer").fadeOut();
});

$("#filterContainer").on("click", function (e) {
  const target = e.target;
  const elID = $(target).attr("id");

  if (elID === "filterContainer") {
    $("#filterContainer").fadeOut();
  }
});

$(window).resize(function () {
  if (window.innerWidth > 1200) {
    $("#filterContainer").show();
  } else {
    $("#filterContainer").hide();
  }
});

// slider
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $("#amount").val("Rs." + ui.values[0] + " - Rs." + ui.values[1]);
    },
  });
  $("#amount").val(
    "Rs." +
      $("#slider-range").slider("values", 0) +
      " - Rs." +
      $("#slider-range").slider("values", 1)
  );
});
