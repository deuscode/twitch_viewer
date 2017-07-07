// global variables
var channels = ["ESL_SC2", "OgamingSC2", "syntag", "freecodecamp", "hardlydifficult", "habathcx", "RobotCaleb", "noobs2ninjas", "Lost_In_House", "serpent_AI"];
var apiURL = 'https://kaypeter.com/homebase/channels/'

$(document).ready(function () {
    // iterate through channels
    channels.forEach(function (channel) {
        return ajaxCall(channel);
    });
    // make api call to my backend server
    function ajaxCall(channel) {
        $.ajax({
            type: 'GET',
            url: apiURL + channel,
            success: function (data) {
                if (data.status >= 400) {
                     $(".status").append("This channel is either closed or does not exist! Please enter in another channel.");
                } else {
                    console.log(data);
                    // append data to html
                    $("#twitchbox").append('<a href="' + data.url + '" target="_blank"><img src="' + data.logo + '"></a>');
                }
            },
        });
    };

    $("#addchannel-button").on('click', function (channel) {
        var channel = $("#addchannel-box").val();
        ajaxCall(channel);
        $("#addchannel-box").val('');
        var test = $('a')
        console.log('array of channels', test[0])
    })

});
// test localStorage method for saving data
// localStorage.setItem('channels', JSON.stringify(channels))
// JSON.parse()

// data attribute in HTML
// data-chanl="ESL_SC2"