// global variables
var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var apiURL = 'https://kaypeter.com/homebase/streams/'

// iterate through streams
for (var i = 0; i < streams.length; i++) {
    ajaxCall();
};
// make api call to backend server
function ajaxCall() {
    $.ajax({
        type: 'GET',
        url: apiURL + streams[i] + '?callback=?',
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log('error');
        }
    });
};