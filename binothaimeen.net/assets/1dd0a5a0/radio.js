$('#radio-player-stop').on('click', function() {
    $('#player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $('#radio-player-play').removeClass("hide-important");
    $(this).addClass("hide-important");
});

$('#radio-player-play').on('click', function() {
    $('#player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    $('#radio-player-stop').removeClass("hide-important");
    $(this).addClass("hide-important");
});
