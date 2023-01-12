
// 添加事件处理函数
function addEvent(el, type, fn){
    if(el.addEventListener){
        el.addEventListener(type, fn, false)
    } else if(el.attachEvent){
        el.attachEvent('on' + type, function(){
            handle.call(el);
        })
    } else{
        el['on' + type] = fn;
    }
}

// 返回窗口距离左边距和上边距
function getScrollOffset(){
    if(window.pageXOffset){
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else {
        return {
            left: document.body.scrollLeft + document.documentElement.scrollLeft,
            top: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

// 返回浏览器可视高度
function getViewportSize(){
    if(window.innerWidth){
        return{
            width: window.innerWidth,
            height: window.innerHeight
        } 
    } else {
        if(document.compatMode === 'BackCompat'){
            return{
                width: document.body.clientWidth,
            	height: document.body.clientHeight
            }
        } else{
            return{
                width: document.documentElement.clientWidth,
            	height: document.body.clientHeight
            }
        }
    }
}

// 返回窗口总宽度和总长度（不变值）
function getScrollSize(){
    if(document.body.scrollHeight){
        return {
            width: document.body.scrollWidth,
            height: document.body.scrollHeight
        }
    } else {
        return {
            width: document.documentElement.scrollWidth,
            height: document.documentElement.scrollHeight
        }
    }
}