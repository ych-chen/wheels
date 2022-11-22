

import TreeMenu from './TreeMenu/index.vue';
import MenuItem from './TreeMenu/MenuItem.vue';
import SubMenu from './TreeMenu/SubMenu.vue';
import ReSubMenu from './TreeMenu/ReSubMenu.vue';


let UI = {};

UI.install = function(Vue){

    Vue.component(TreeMenu.name, TreeMenu);
    Vue.component(MenuItem.name, MenuItem);
    Vue.component(SubMenu.name, SubMenu);
    Vue.component(ReSubMenu.name, ReSubMenu);

}

export default UI;