$(window).on("load", function () {
  const allowedFileTypes = ["png", "jpg", "jpeg", "JPG", "JPEG", "PNG"];

  const generateUID = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);
    const finalUID = head + tail;
    return finalUID;
  };

  const imageCard = (data) => {
    return `<div class="img-box">
    <img src=${data} alt="hotel" id=${generateUID()} />
    <div class="icon-box flex-css">
      <img src="./assets/image/close.png" alt="close" />
    </div>
  </div>`;
  };

  const triggerImageRemove = () => {
    $(".icon-box").on("click", function () {
      const imgBox = $(this).parent(".img-box");
      imgBox.remove();
    });
  };

  $("#uploadBtn").on("change", function (e) {
    e.preventDefault();
    const files = $(this)[0].files;
    if (files.length > 0) {
      $.each(files, function (index, file) {
        if (allowedFileTypes.indexOf(file.type.replace("image/", "")) >= 0) {
          var reader = new FileReader();
          reader.onload = function (e) {
            const imgData = e.target.result;
            $("#imageWrapper").append(imageCard(imgData));
            triggerImageRemove();
          };
          reader.onerror = function (e) {
            alert("ERROR: " + e.target.error.code);
          };
          reader.readAsDataURL(file);
        } else {
          alert("Invalid file type !!");
        }
      });
    }
  });

  // yes no btn
  $(".yes-no-btn").on("click", function (e) {
    e.preventDefault();
    const parentID = $(this).parent().attr("id");
    toggleYN(parentID, $(this));
  });

  const toggleYN = (id, element) => {
    $(`#${id} .yes-no-btn`).removeClass("active");
    $(`#${id} .yes-no-btn`).attr("data-status", "inactive");

    element.addClass("active");
    element.attr("data-status", "active");
  };

  // selection
  $(".select-btn").on("click", function (e) {
    e.preventDefault();
    const parentID = $(this).parent().attr("id");
    toggleSelect(parentID, $(this));
  });

  const toggleSelect = (id, element) => {
    $(`#${id} .select-btn`).removeClass("active");
    $(`#${id} .select-btn`).attr("data-status", "inactive");

    element.addClass("active");
    element.attr("data-status", "active");
  };
});
