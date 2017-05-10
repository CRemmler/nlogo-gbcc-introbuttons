jQuery(document).ready(function() {
  
  // click on Command Center code input so gbcc-run-code will work
  $(".CodeMirror-line").trigger("click");

  // when student clicks on button on Student Interface
  $(".netlogo-widget-container").on("click", ".student-button", function() {
    socket.emit("send command", {hubnetMessageTag: $(this).text().trim(), hubnetMessage:""});
  });
});