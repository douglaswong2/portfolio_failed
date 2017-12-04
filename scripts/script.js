$(document).ready(function(){
    $("#link_about").click(function(){
        $("#page__content").load("about.html", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "error")
                $("#page__content").text("Error: " + xhr.status + ": " + xhr.statusText);
        });
        $("#page__title").text("Who am I?");
    });
    $("#link_photos").click(function(){
        $("#page__content").load("photo.html", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "error")
                $("#page__content").text("Error: " + xhr.status + ": " + xhr.statusText);
        });
        $("#page__title").text("");

        $("#link_contact").click(function() {
            $("#page__content").load("contact.html", function (responseTxt, statusTxt, xhr) {
                if (statusTxt == "error")
                    $("#page__content").text("Error: " + xhr.status + ": " + xhr.statusText);
            });
            $("#page__title").text("");
        });

    });
});
