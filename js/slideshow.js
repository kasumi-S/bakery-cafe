$(window).on("load", function() {
  $("#thumbnail img").on("click", function () {
    let img_src = $(this).attr("src");
    $("#slideshow-image img").attr("src", img_src);
  });
});

$(window).on("load", function() {
  $("#thumbnail-drink img").on("click", function () {
    let img_src = $(this).attr("src");
    $("#slideshow-image-drink img").attr("src", img_src);
  });
});

$(window).on("load", function() {
  $("#thumbnail-bread img").on("click", function () {
    let img_src = $(this).attr("src");
    $("#slideshow-image-bread img").attr("src", img_src);
  });
});

$(window).on("load", function() {
  $("#thumbnail-pasta img").on("click", function () {
    let img_src = $(this).attr("src");
    $("#slideshow-image-pasta img").attr("src", img_src);
  });
});

$(window).on("load", function() {
  $("#thumbnail-sweets img").on("click", function () {
    let img_src = $(this).attr("src");
    $("#slideshow-image-sweets img").attr("src", img_src);
  });
});