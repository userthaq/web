function maximizeWindow() {
  var newWid = $(document).width();
  var newHit = $(document).height();
  $(".doc-browser").addClass("maximized").css("margin-top", "0px");
  $(".doc-browser").animate({
    width: newWid,
    height: newHit,
    top: 0,
    left: 0,
  });
  $(".sidebar-folder-list").animate({
    height: newHit - 35 + "px",
  });
  $(".main-content-view").animate({
    width: newWid - $(".sidebar-folder-list").width(),
    height: newHit - 25 + "px",
  });
}

function minimizeWindow() {
  var newWid = 600;
  var newHit = 400;
  var center = $(document).width() / 2 - newWid / 2;
  $(".doc-browser").removeClass("maximized");
  $(".doc-browser").animate({
    width: 600,
    height: 400,
    top: "10%",
    left: center,
  });
  $(".sidebar-folder-list").animate({
    height: newHit - 35,
  });
  $(".main-content-view").animate({
    width: newWid - $(".sidebar-folder-list").width(),
    height: newHit - 25,
  });
}

function centerElementAbsolute(elem) {
  var center = $(document).width() / 2 - $(elem).width() / 2;
  $(elem).css("left", center);
}

$(document).ready(function () {
  centerElementAbsolute(".doc-browser");

  // Color variables for sidebar list items
  var listNorm = "#CACDD1";
  var listSel = "#ADB0B2";

  // Give the "Documents" item an initial selected color
  $("#docs").css({ "background-color": listSel });

  /* List Item Click
   *
   * Change all list items back to the normal color, then
   * give the clicked list item the selected color.
   *
   * Hide the currently shown content, then show
   * the content for the selected item
   */
  $(".folder-list-item").click(function () {
    // Iterate items, give all normal color
    $(".folder-list-item").each(function () {
      $(this).css({ "background-color": listNorm });
    });
    // Then give the selected item the selected color
    $(this).css({ "background-color": listSel });

    // Iterate all content and hide each
    $(".main-content-view").each(function () {
      $(this).hide();
    });

    // Figure out which content to display and display it
    if ($(this).attr("id") == "docs") {
      $("#docs-content").fadeIn(500);
    } else if ($(this).attr("id") == "projects") {
      $("#projects-content").fadeIn(500);
    } else if ($(this).attr("id") == "samples") {
      $("#samples-content").fadeIn(500);
    } else if ($(this).attr("id") == "about-me") {
      $("#about-content").fadeIn(500);
    }
  });

  $(".doc-browser").draggable({
    handle: ".window-bar",
    containment: "document",
  });

  $(".w-min").click(function () {
    minimizeWindow();
  });

  $(".w-max").click(function () {
    maximizeWindow();
  });

  $(".min-window").click(function () {
    $(this).hide();
    $(".doc-browser").show(600);
  });
});
