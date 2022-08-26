<template>
  <div class="carouselParent">
    <slot></slot>

    <button @click="next" id="next" class="carousel-btn">
      <img src="@/assets/next.png" />
    </button>
    <button @click="prev" id="prev" class="carousel-btn">
      <img src="@/assets/prev.png" />
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      slides: [],
      direction: null,
    };
  },
  mounted() {
    this.slides = this.$children;
    this.slides.forEach((slide, i) => {
      slide.index = i;
    });
  },
  computed: {
    slideCount() {
      return this.slides.length;
    },
  },
  methods: {
    next() {
      this.index++;
      this.direction = "right";
      if (this.index >= this.slideCount) {
        this.index = 0;
      }
    },
    prev() {
      this.index--;
      this.direction = "left";
      if (this.index < 0) {
        this.index = this.slideCount - 1;
      }
    },
  },
};
</script>
<style scoped>
.carouselParent {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.carousel-btn {
  position: absolute;
  height: 40px;
  width: 50px;
  top: 50%;
  margin-top: -30px;
  background-color: #c5c5c5;
  object-fit: cover;
}
#next {
  right: 50px;
  background-image: url("@/assets/next.png");
  width: 63px;
  height: 63px;
}
#prev {
  left: 100px;
  background-image: url("@/assets/prev.png");
  width: 63px;
  height: 63px;
  background-color: #c5c5c5;
}


</style>