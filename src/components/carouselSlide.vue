<template>
  <transition :name="transition">
    <div v-show="visible" class="carousel-slide">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    visible() {
      return this.index === this.$parent.index;
    },
    transition() {
      if (this.$parent.direction) {
        return "slide-" + this.$parent.direction;
      }
      return null
    },
  },
};
</script>
<style>
.carousel-slide {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.slide-right-enter-active {
  animation: slideInright 0.5s;
}
.slide-right-leave-active {
  animation: slideOutright 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

@keyframes slideInright {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slideOutright {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

/*left*/
.slide-left-enter-active {
  animation: slideOutleft 0.5s;
}
.slide-left-leave-active {
  animation: slideOutleft 0.5s;
}
@keyframes slideOutleft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slideOutleft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>