<template>
  <div class="welcomme_page">
    <div class="image">
      <img src="../../assets/logo_it.png" alt="" />
    </div>
    <div class="text">
      <p>
        Bienvenue sur l'application de gestion d'espace de coworking au sein de
        l'entreprise
      </p>
    </div>
    <div class="button">
      <router-link to="/signUp">
        <buttonComponent color msg="M'inscrire ?"></buttonComponent>
      </router-link>
      <router-link to="/login"
        ><buttonComponent msg="Me Connecter ?"></buttonComponent
      ></router-link>
      <router-view />
    </div>
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
.welcomme_page {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 50px;
  left: 50px;
  transform: translate(-50px, -50px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
}
.image {
  margin-bottom: 30px;
}
.text {
  width: 500px;
  font-size: 25px;
  margin-bottom: 50px;
}

button {
  border: none;
  padding: 10px 20px;
  font-size: 15px;
  color: #f1f8f4;
  margin-right: 20px;
}
.button {
  display: flex;
}
a {
  text-decoration: none;
}
</style>