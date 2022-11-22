import Carousel from './Carousel/index.vue';
import CarItem from './Carousel/Item.vue';

let UI = {};

UI.install = function(Vue){
    Vue.component(Carousel.name, Carousel);
    Vue.component(CarItem.name, CarItem);
}
console.log(123123)

export default UI;