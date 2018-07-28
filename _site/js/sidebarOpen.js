// function sidebar_open() {
//     document.getElementById("sidebar").style.display = "block";
// }
//
// function sidebar_close() {
//     document.getElementById("sidebar").style.display = "none";
// }
$(document).ready(function(){
    $("button").click(function(){
        $("#sidebar").toggle();
    });
});
