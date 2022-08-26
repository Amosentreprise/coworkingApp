<template>
  <div class="button">
    <button :class="{ btn1: color, btn2: !color }" :id="id" v-on:click="eventClick" >
      {{ msg }}
    </button>
  </div>
</template>
<style></style>
<script>
export default {
  name: "buttonComponent",
  props: {
    msg: String,
    color: Boolean,
    id: String,
    eventClick: String,
    
  },
};
</script>
<style>
.btn1 {
  background-color: #2072c3;
}
.btn2 {
  background-color: #e30045;
}
</style>