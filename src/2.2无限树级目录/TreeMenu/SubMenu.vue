<template>
  <div class="sub-menu"
    @mouseenter="showSubMenu"
    @mouseleave="hiddenSubMenu"
  >
    <div class="title">
        <slot name="title"></slot>
        <span class="icon">&gt;</span>
    </div>
    <div class="sub-item" v-show="subMenuShow">
        <slot></slot>
    </div>
  </div>
</template>

<script>

import {ref} from 'vue';

export default {
    name:"SubMenu",
    setup(){
        const subMenuShow = ref(false);

        const showSubMenu = () => {
            subMenuShow.value = true;
        }

        const hiddenSubMenu = () => {
            subMenuShow.value = false;
        }

        return {
            subMenuShow,
            showSubMenu,
            hiddenSubMenu
        }
    }
}

</script>

<style scoped>

.sub-menu{
    position: relative;
}

.title{
    position: relative;
    text-align: center;
    line-height: 50px;
}

.icon{
    position: absolute;
    top: 0;
    right: 15px;
}

.sub-item{
    position: absolute;
    left: 100%;
    top: 0;
    width: 100%;
    background-color: #333;
}
</style>
