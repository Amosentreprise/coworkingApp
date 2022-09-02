<template>
  <div class="notification">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="paragraph">
      <slot name="paragraph"></slot>
    </div>
    <div class="time">
      <slot name="time"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.notification {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 50px);
  min-height: 40px;
  height: 100px;
  margin: 20px;
  box-shadow: -5px 5px 6px -2px #000000;
  position:relative;
  background-color:#fff;
  
}
</style>