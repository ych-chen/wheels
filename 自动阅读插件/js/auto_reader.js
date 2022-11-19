;(function(){

    var wHeight = getViewportSize().height,
        sHeight = getScrollSize().height,
        playing = false,
        t = null;

    var AutoReader = function(opt){
        this.sTopBtn = opt.sTopBtn;
        this.playBtn = opt.playBtn;

        var _self = this;
        
        // 窗口滚动显示小火箭
        addEvent(window,'scroll',function(){
            _self.sTopBtnShow();
        });

        // 点击小火箭回到顶部
        addEvent(this.sTopBtn,'click',function(){
            window.scrollTo(0, 0);
            clearInterval(t);
            _self.playBtn.style.backgroundImage = 'url(img/play.jpg)';
            playing = false;
        });

        addEvent(this.playBtn,'click',function(){
            _self.setAutoPlay();
        });
    }

    AutoReader.prototype = {
        sTopBtnShow: function(){
            var sTop = getScrollOffset().top;

            this.sTopBtn.style.display = sTop ? 'block' : 'none';
        },

        setAutoPlay: function(){
            var sTop = getScrollOffset().top,
                _self = this.playBtn;

            // 如果文档高度等于窗口高度加上滑动高度
            if(sHeight === wHeight + sTop){
                return;
            }

            if(!playing){
                t = setInterval(function(){
                    sTop = getScrollOffset().top;
                    console.log(sHeight,wHeight,sTop);
                    if(sHeight <= wHeight + sTop){
                        clearInterval(t);
                        _self.style.backgroundImage = 'url(img/play.jpg)';
                        playing = false;
                        return;
                    } else{
                        window.scrollBy(0,1);
                        _self.style.backgroundImage = 'url(img/pause.jpg)';
                    }
                }, 1);
                playing = true;
            } else{
                clearInterval(t);
                _self.style.backgroundImage = 'url(img/play.jpg)';
                playing = false;
            }
        }

    }

    window.AutoReader = AutoReader;
})();