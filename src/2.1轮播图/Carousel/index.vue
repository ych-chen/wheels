<template>
  <div class="carousel"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <div class="inner">
      <CarDot
      :itemLen="itemLen"
      :currentIndex="currentIndex"
      :hasDot="hasDot"
      :dotBgColor="dotBgColor"
      @dotClick="dotClick"
      />
      <Director
        dir="prev"
        @dirClick="dirClick"
      />
      <Director
        dir="next"
        @dirClick="dirClick"
      />
      <slot></slot>
    </div>
    
  </div>
</template>

<script>

import { 
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance
} from 'vue';

import CarDot from './Dot.vue';
import Director from './Directive.vue';

export default {
    name: "Carousel",
    components:{
      CarDot,
      Director
    },
    props:{
      autoplay:{
        type: Boolean,
        default: true
      },
      duration:{
        type: Number,
        default: 3000
      },
      initial:{
        type: Number,
        default:0
      },
      hasDot:{
        type: Boolean,
        default: true
      },
      hasDirector:{
        type: Boolean,
        default: true
      },
      dotBgColor:String
    },
    setup(props){
      const instance = getCurrentInstance();
      const state = reactive({
        currentIndex: props.initial,
        itemLen: instance.slots.default()[0].children.length
      });

      let t = null;
      const autoPlay = () =>{
        if(props.autoplay){
          t = setInterval(() =>{
            setIndex("next");
          },props.duration)
        }
      }
      const setIndex = (direction) => {
        switch(direction){
          case "next":
            state.currentIndex += 1;
            if(state.currentIndex === state.itemLen){
              state.currentIndex = 0;
            }
            break;
          case "prev":
            state.currentIndex -= 1;
              if(state.currentIndex === -1){
                state.currentIndex = state.itemLen-1;
              }
              break;
          default:
            break;
        }
      }

      const dotClick = (index) => {
        state.currentIndex = index
      }

      const dirClick = (dir) => {
        setIndex(dir)
      }

      // 鼠标移入移出 暂停轮播
      const mouseEnter = () => {
        clearInterval(t);
        t = null;
      }
      const mouseLeave = () =>{
        autoPlay();
      }

      // 初次渲染前 启动轮播；被销毁前 暂停轮播
      onMounted(() =>{
        autoPlay();
      });
      onBeforeUnmount(() =>{
        clearInterval(t);
        t = null;
      })

      return {
        ...toRefs(state),
        dotClick,
        mouseEnter,
        mouseLeave,
        dirClick
      }
    }
}
</script>

<style scoped>
.carousel{
  width: 100%;
  height: 100%;
}
.inner{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>
