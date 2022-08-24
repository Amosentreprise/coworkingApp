<template>
  <div>
    <input :v-model="model" :type="type"  :placeholder="message" />
  </div>
</template>
<script>
export default {
  name: "champComponent",
  props: {
    type: String,
    message: String,
    model: String,
    
  },
};
</script>