<template>
  <div class="layout">
    <div id="left" :class="{ blue: color, rose: !color }">
      <slot name="options"></slot>
    </div>
    <div id="right">
      <slot name="sideBare">
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    color: Boolean,
  },
};
</script>
<style>
.blue {
  background-color: #2072c3;
}
.rose {
  background-color: #e30045;
}
.layout {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: relative;
}
#left {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 25%;
  height: 100%;
}
#right {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 75%;
  height: 100%;
}
</style>