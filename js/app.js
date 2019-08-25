$(function() {
    var headerHeight = $('img#header').height();

    $('main').height(headerHeight / 2);

    // Change nav marker position
    alterNavMarker();
})

$(window).resize(function() {
    var headerHeight = $('img#header').height();

    $('main').height(headerHeight / 2);

    // Change nav marker position
    alterNavMarker();
})

$( window ).on( "orientationchange", function( event ) {
  var headerHeight = $('img#header').height();

    $('main').height(headerHeight / 2);

    // Change nav marker position
    alterNavMarker();
});

window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    
    if (scrolled < 0)
        scrolled = 0;
    else if (scrolled > 100) 
        scrolled = 100;
    
    document.getElementById('inner-marker').style.top = scrolled + "%";
}

function alterNavMarker() {
    var main = document.getElementsByTagName('main')[0];
    // Change nav marker position
    var mainTop = getDivTop(main);

    $('#marker').css('position', 'fixed');
    $('#marker').css('top', '25%');
    $('#marker').height($('main').height());
}

function getDivTop(element) {
    // distance scrolled on body
    var distanceScrolled = document.body.scrollTop;
    
    // create viewport offset object
    var elRect = element.getBoundingClientRect();
    
    // offset from element to the viewport
    var elViewportOffset = elRect.top;
    
    // add them together
    var totalOffset = distanceScrolled + elViewportOffset;

    // return total offset
    return totalOffset;
}