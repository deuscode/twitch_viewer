$(document).ready(function() {

    $.ajax({
        type: 'GET',
        url: 'https://wind-bow.glitch.me/twitch-ap/streams/freecodecamp?callback=?',
        header: {'Client-ID': 'hs5elqgum44iq9qdg3a1a3ydpyp00b'},
        success: function(data) {
            console.log(data);
        },
        error: function(err) {
            console.log("error");
        }
    });
});