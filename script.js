$(document).ready(function() {
    // make api call to backend server
    $.ajax({
        type: 'GET',
        url: 'http://localhost:11646/streams/freecodecamp',
        success: function(data) {
            console.log(data);
        },
        error: function(err) {
            console.log('error');
        }
    });
});