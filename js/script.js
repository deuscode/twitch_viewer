// global variables
var channels = ["ESL_SC2", "OgamingSC2", "syntag", "freecodecamp", "hardlydifficult", "habathcx", "RobotCaleb", "noobs2ninjas", "Lost_In_House", "serpent_AI"];
var apiURL = 'https://kaypeter.com/homebase/channels/'

$(document).ready(function () {
    // iterate through channels
    channels.forEach(function (channel) {
        return ajaxCall(channel);
    });
    // make ajax call to backend server
    function ajaxCall(channel) {
        $.ajax({
            type: 'GET',
            url: apiURL + channel,
            success: function (data) {
                // display message if channel doesn't exist
                if (data.status >= 400) {
                     $(".status span").replaceWith("This channel is either closed or does not exist! Please enter in another channel.");
                     $(".status").css("display", "block");
                } else {
                    console.log(data);
                    // append data to html
                    $("#twitchbox").append('<a href="' + data.url + '" target="_blank"><img src="' + data.logo + '"></a>');
                }
            },
        });
    };
    // add channel click function
    $("#addchannel-button").on('click', function(channel) {
        var channel = $("#addchannel-box").val();
        $(".status").css("display", "none");
        ajaxCall(channel);
        $("#addchannel-box").val('');
    });
    // add channel on submit
    $("form").submit(function(e) {
            e.preventDefault();
            $("#addchannel-button").click();
    })
});
