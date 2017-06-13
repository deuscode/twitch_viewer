// global variables
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var apiURL = 'https://kaypeter.com/homebase/channels/'

// iterate through channels
channels.forEach(channel => ajaxCall(channel));
// make api call to backend server
function ajaxCall(channel) {
    $.ajax({
        type: 'GET',
        url: apiURL + channel,
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log('error', err);
        }
    });
};

$(document).ready(function() {

});
// test localStorage method for saving data
// localStorage.setItem('channels', JSON.stringify(channels))
// JSON.parse()

// data attribute in HTML
// data-chanl="ESL_SC2"