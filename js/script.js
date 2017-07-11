// global variables
var channels = ["ESL_SC2", "OgamingSC2", "syntag", "freecodecamp", "hardlydifficult", "habathcx", "RobotCaleb", "noobs2ninjas", "Lost_In_House", "serpent_AI"];
var apiURLfirst = 'https://kaypeter.com/homebase/streams/';
var apiURLsecond = 'https://kaypeter.com/homebase/channels/';

$(document).ready(function () {
    // iterate through channels
    channels.forEach(function (channel) {
        return firstAjaxCall(channel);
    });
    // make ajax call to backend server on stream status
    function firstAjaxCall(stream) {
        $.ajax({
            type: 'GET',
            url: apiURLfirst + stream,
            success: function (data) {
                if (data.stream) {
                    return onlineStreams(stream);
                } else {
                    return offlineStreams(stream);
                }
            },
        });
    }
    // make ajax call to backend server on channel data
    function onlineStreams(channel) {
        $.ajax({
            type: 'GET',
            url: apiURLsecond + channel,
            success: function (data) {
                // display message if channel doesn't exist
                if (data.status >= 400) {
                    $(".status span").replaceWith("This channel is either closed or does not exist! Please enter in another channel.");
                    $(".status").css("display", "block");
                } else {
                    console.log(data);
                    // append data to html
                    $("#twitchbox").append('<a href="' + data.url + '" target="_blank"><img src="' + data.logo + '" title="' + "NOW STREAMING:  " + data.game.toString() + ": " + data.status.toString() + '"></a>');
                }
            },
        });
    };
    function offlineStreams(channel) {
        $.ajax({
            type: 'GET',
            url: apiURLsecond + channel,
            success: function (data) {
                // display message if channel doesn't exist
                if (data.status >= 400) {
                    $(".status span").replaceWith("This channel is either closed or does not exist! Please enter in another channel.");
                    $(".status").css("display", "block");
                } else {
                    console.log(data);
                    // append data to html
                    $("#twitchbox").append('<a href="' + data.url + '" target="_blank"><img src="' + data.logo + '" alt="Offline" title="OFFLINE" id="offlinestreams"></a>');
                }
            },
        });
    };
    // add channel click function
    $("#addchannel-button").on('click', function (channel) {
        var channel = $("#addchannel-box").val();
        $(".status").css("display", "none");
        firstAjaxCall(channel);
        $("#addchannel-box").val('');
    });
    // add channel on submit
    $("form").submit(function (e) {
        e.preventDefault();
        $("#addchannel-button").click();
    })
});