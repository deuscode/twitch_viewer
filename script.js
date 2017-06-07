// global variables
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var apiURL = 'https://kaypeter.com/homebase/channels/'

// iterate through channels
for (var i = 0; i < channels.length; i++) {
    ajaxCall();
};
// make api call to backend server
function ajaxCall() {
    $.ajax({
        type: 'GET',
        url: apiURL + channels[i] + '?callback=?',
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log('error');
        }
    });
};