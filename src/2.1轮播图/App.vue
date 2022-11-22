


<template>
  <div>
    <div class="container">
      <carousel
        :autoplay="true"
        :duration="3000"
        :initial="3"
        :hasDot="true"
        :hasDirector="true"
        dotBgColor="black"
      >
        <car-item
          v-for="(item, index) of carData"
          :key="index"
        >
          <img :src="'./img/' + item.img_name" > 
        </car-item>
      </carousel>
    </div>
  </div>
</template>

<script >
// 传递轮播图数据
import carData from './data/carousel';

import { reactive,toRef,toRefs} from 'vue';

export default{
  name: "App",
  setup(){

    const state = reactive({
      a: '123',
      b: '456'
    });

    console.log(state)
    console.log(toRefs(state));
    console.log({
      ...toRefs(state)
    })
    return {
      carData
    }
  }

}
</script>

<style scoped>
.container{
  width: 520px;
  height: 280px;
  margin: 100px auto;
}
</style>
