<template>
  <div class="login">
    <div class="page" id="page">
      Page de connexion</div>
    <div class="error">
      <p>error</p>
    </div>
    <div class="loginField">
      <champComponent type="text" message="Username"></champComponent>
      <champComponent type="password" message="Password"></champComponent>
    </div>
    <div class="btn">
      <router-link to="/404">
        <buttonComponent color msg="Connexion" id="button"></buttonComponent
      ></router-link>

      <span>Mot de passe oublié ?</span>
    </div>
  </div>
</template>
<script>
import buttonComponent from "../../components/buttonComponent.vue";
import champComponent from "../../components/champComponent.vue";
export default {
  components: {
    buttonComponent,
    champComponent,
  },
};
</script>
<style>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#button {
  width: 465px;
  margin-left: 25px;
  margin-right: 25px;
  text-align: center;
}
span {
  margin-top: 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  font-style: italic;
  font-weight: 600;
  color: #cd1b1b;
  cursor: pointer;
}
#page {
  margin-bottom: 60px;
}
#page::before,
#page::after {
  margin-top: 80px;
}
</style>