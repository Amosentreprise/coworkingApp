<template>
  <div class="push">
    <notificationComponent>
      <template v-slot:header> </template>
      <template v-slot:paragraph>
        <p>Bienvenue sur cette page</p>
      </template>
    </notificationComponent>
  </div>
</template>
<script>
import notificationComponent from "@/components/notificationComponent.vue";
export default {
  components: {
    notificationComponent,
  },
};
</script>
<style scoped>
.push {
  height: 100%;
  width: 100%;
}
p {
  font-size: 125%;
}
</style>
