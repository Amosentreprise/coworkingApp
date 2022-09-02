<template>
  <div class="pageNotFound">
    <div class="imagePart">
      <img src="../../assets/internet.png" alt="" />
    </div>
    <div class="text">
      <h1>404</h1>
      <h2>Oops, This Page not page Not Found</h2>
      <h3>The link might be corrupted</h3>
      <h4>or the page may have been removed</h4>
    </div>
    <router-link to="/">
      <buttonComponent color msg="GO BACK HOME" id="backHome"></buttonComponent>
    </router-link>
  </div>
</template>
<script>
import buttonComponent from "../../components/buttonComponent.vue";
export default {
  components: {
    buttonComponent,
  },
};
</script>
<style>
.pageNotFound {
  widows: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ecf0f3;
}
.imagePart img {
  width: 100px;
  height: 100px;
}
#backHome {
  background-color: black;
  color: #fff;
  margin-top: -40px;
}
h1,
h2,
h3,
h4 {
  text-align: center;
}
h2,
h3,
h4 {
  font-weight: 400;
  color: #333;
  font-size: 30px;
}
h3,
h4 {
  font-size: 20px;
}
</style>