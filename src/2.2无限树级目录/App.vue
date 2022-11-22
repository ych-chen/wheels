
<template>
  <div>
    <div class="side-bar">
      <tree-menu>
        <template v-for="item of menuData">
          <menu-item
            v-if="!item.children"
            :key="item.id"
          >{{item.title}}</menu-item>
          <re-sub-menu
            v-else
            :key="item.id"
            :data="item"
          ></re-sub-menu>
        </template>
      </tree-menu>
    </div>
  </div>
</template>

<script >
// 传递轮播图数据
import menuData from './data/menu';

export default{
  name: "App",
  setup(){
    return {
      menuData
    }
  }

}
</script>

<style scoped>
.side-bar{
  margin-top: auto;
  width: 300px;
}
</style>
