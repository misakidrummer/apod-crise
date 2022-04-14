const APIKEY = 'IzApCKJE3vx49alW3H0AgYrCayVNDdfduv6KKk6R';
$("form").submit(function (EVENT){
    EVENT.preventDefault();
} ) 

$("#submit").click(function () {
    let DATA = $("#SetData").val();

$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&date=${DATA}`,
    success: function (response) {

        if(response.media_type == 'image') {
            $('#resposta').attr('src', response.url);
            $('#resposta').css('display', 'block')
            $('#resposto').css('display', 'none')
        } else if (response.media_type == 'video') {
             $('#resposto').attr('src', response.url);
             $('#resposto').css('display', 'block')
             $('#resposta').css('display', 'none')
        }
        const description = document.createElement('p');
        $('#textinho').text(`${response.explanation}`)


           } 
     })
});


