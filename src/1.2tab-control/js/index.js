;(function(doc,tools){

    var Tab = function(){
        this.oTab = doc.getElementsByClassName('J_tab')[0];

        this.oNav = doc.createElement('div');
        this.oNav.className = 'nav';
        this.oPage = doc.createElement('div');
        this.oPage.className = 'page';

        this.navItemTpl = doc.getElementById('J_navItemIpl').innerHTML;
        this.pageItemTpl = doc.getElementById('J_pageItemIpl').innerHTML;
        this.cityData = JSON.parse(doc.getElementById('J_cityData').innerHTML);

        this.curIndex = 0;
    }
    
    Tab.prototype.init = function(){
        this.render();
        this.bindEvent();
    }

    Tab.prototype.render = function(){

        var oFrag = doc.createDocumentFragment(),
            lists = this.renderList(this.cityData);

        this.oNav.innerHTML = lists.Navlist;
        this.oPage.innerHTML = lists.Pagelist;
        
        oFrag.appendChild(this.oNav);
        oFrag.appendChild(this.oPage);
        this.oTab.appendChild(oFrag);
    }

    Tab.prototype.renderList = function(data){
        var Navlist = '';
        var Pagelist = '';

        data.forEach(function (item,index){

            Navlist += this.navItemTpl.replace(/{{(.*?)}}/g, function(node,key){
                return {
                    navStyleClass: !index ? 'nav-item current' : 'nav-item',
                    navItemTitle: item.city_name
                }[key];
            });

            Pagelist += this.pageItemTpl.replace(/{{(.*?)}}/g, function(node,key){
                return {
                    pageStyleClass: !index ? 'page-item current' : 'page-item',
                    cityName: item.city_name,
                    intro:  item.intro
                }[key];
            });
            
        },this);
        return {
            Navlist: Navlist,
            Pagelist: Pagelist
        };
    }

    Tab.prototype.bindEvent = function(){
        this.oNavItems = this.oNav.getElementsByClassName('nav-item');
        this.oPageItems = this.oPage.getElementsByClassName('page-item');
        this.oNav.addEventListener('click',this.onNavClick.bind(this),false);
    }
    
    Tab.prototype.onNavClick = function(ev){
        var tar = tools.getTarget(ev),
            className = tar.className;
        
        console.log("tar",className)
        if(className === 'nav-item'){
            this.oNavItems[this.curIndex].className = 'nav-item';
            this.oPageItems[this.curIndex].className = 'page-item';
            this.curIndex = [].indexOf.call(this.oNavItems,tar);
            this.oNavItems[this.curIndex].className = 'nav-item current';
            this.oPageItems[this.curIndex].className = 'page-item current';
        }
    }

    window.Tab = Tab;

})(document,initToolsModule);