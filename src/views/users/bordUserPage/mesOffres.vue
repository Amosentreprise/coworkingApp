<template>
  <div class="carousel">
    <carouselComponent>
      <carouselSlide
        v-for="(slide) in slideImages"
        :key="slide"
        ><img :src="slide" />
      </carouselSlide>
    </carouselComponent>
  </div>
</template>
<script>
import carouselComponent from "../../../components/carouselComponent.vue";
import carouselSlide from "../../../components/carouselSlide.vue";
import image1 from "../../../assets/1.jpg";
import image2 from "../../../assets/2.jpg";
import image3 from "../../../assets/3.jpg";
export default {
  components: { carouselComponent, carouselSlide },

  data() {
    return {
      slideImages: [image1, image2, image3],
      
    };
  },
  computed: {
    
  },
  methods: {
   
  },
};
</script>
<style>
.carousel {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
img {
  width: 90%;
  height: 90%;
}
</style>
