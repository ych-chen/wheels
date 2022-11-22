

(function(opt){

    var ScrollToTop = function(opt){

        var sTopBtn = document.getElementsByClassName(opt.TopElement)[0];

        addEvent(window, 'scroll', function(){
            var sTop = getScrollOffset().top;
            sTopBtn.style.display = sTop ? 'block' : 'none';
        })
    
        addEvent(window, 'click', function(){
            window.scrollTo(0, 0);
        })
    }

    window.ScrollToTop = ScrollToTop;

}());



