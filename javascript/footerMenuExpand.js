$(document).ready(function() {
    $("#collapseOne").hide();

    $(".panel-heading").click(function() {
        $("#collapseOne").toggle();
    });
});