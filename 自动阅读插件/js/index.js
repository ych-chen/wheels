
var sTopBtn = document.getElementsByClassName('s-top-btn')[0];

addEvent(window, 'scroll', function(){
    var sTop = getScrollOffset().top;
    
    sTopBtn.style.display = sTop ? 'block' : 'none';
})

addEvent(window, 'click', function(){
    window.scrollTo(0, 0);
})