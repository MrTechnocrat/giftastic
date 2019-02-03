$(document).ready(function() {
//Array Of Characters
    var characters = ["Bart Simpson", "Deadpool", "Doctor Who",]
    console.log(characters);

//Renders Character Buttons
    function renderButtons() {
        $('#buttons-view').empty();

        for (var i = 0; i < characters.length; i++) {

            var newButton = $("<button class='btn btn-primary btn-jg active'>");
            newButton.attr("data-person", characters[i]);
            newButton.text(characters[i]);

            $("#buttons-view").append(newButton);

        }
    }
renderButtons ();

//Pushes Array Items Into DOM
$("#add-character").on("click", function(event) {
    event.preventDefault();
    var char = $("#character-input").val().trim();
    characters.push(char);
    renderButtons();
});


//Changed "document" Listener to More Specific #buttons-view
$("3buttons-view").on("click", ".btn-primary", function() {

    var person = $(this).attr("data-person");

    //API calls returns 15 responses only 1 loads
    //var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    //xhr.done(function(data) { console.log("success got data", data); });

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=1VZkWHsopsYTiNDE7rvUdRqFHMc4c1ep";
    console.log(queryURL);

    //Calls The Giphy API
    $.get(queryURL).done(function(response) {
        var results = response.date;
        console.log(results);

    //Assigned Variables to Still Image and Gif
        var stillImage = results[0].images.orginal_still.url 
        var gifImage = results[0].images.orginal.url 

    //Loads Rating Object to HTML with Click on Character Button
        $('.rating').html('Rated: ' + results[0].rating);

    //Loads Still Image with Click of Character button
        $('.image').html('<img class="img-thumbnail" src="' + stillImage + ' "data-state="' + '>');
        $('.image').html('<img class="img-thumbnail" src="' + gifImage + ' "data-state="' + '>');

    });

    //Suppossed to add clicking Event to image that changes src of still image to gif
    $(".img-thumbnail").on({
        'click': function() {
            var src = ($(this).attr('src') === stillImage) ?
                stillImage :
                gifImage;
            $(this).attr('src', src);
            console.log(img-thumbnail);
        }
    })


})
})