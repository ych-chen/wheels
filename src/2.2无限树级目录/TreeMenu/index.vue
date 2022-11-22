<template>
  <div class="tree-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'TreeMenu'
}

</script>

<style scoped>

.tree-menu{
    width: 100%;
    background-color: black;
    color: white;
}
</style>
