<template>
  <div class="login">
    <div class="page" id="page">Page de connexion</div>
    <form class="loginField">
      <input
        v-model.trim="$v.username.$model"
        type="text"
        placeholder="Username"
        :class="{ error: $v.username.$error, succes: !$v.username.$error }"
      />
      <input
        v-model.trim="$v.password.$model"
        type="password"
        placeholder="Password"
        :class="{ error: $v.password.$error, succes: !$v.password.$error }"
      />
      <div class="btn">
        <router-link to="" v-if="this.$v.$invalid">
          <buttonComponent color msg="Connexion" id="button"></buttonComponent
        ></router-link>
        <router-link to="/boardUser" v-else-if="!this.$v.$invalid">
          <buttonComponent color msg="Connexion" id="button"></buttonComponent
        ></router-link>
        <router-link to="/boardAdmin" v-else-if="appelBord">
          <buttonComponent color msg="Connexion" id="button"></buttonComponent
        ></router-link>
        <buttonComponent color msg="Erreur" id="button" v-else></buttonComponent>

        <span>Mot de passe oublié ?</span>
      </div>
    </form>
  </div>
</template>
<script>
import buttonComponent from "../../components/buttonComponent.vue";
import { required } from "vuelidate/lib/validators";
export default {
  components: {
    buttonComponent,
    // champComponent,
  },
  data() {
    return {
      username: "",
      password: "",
      interface: true,
    };
  },
  validations: {
    username: {
      required,
    },
    password: {
      required,
    },
  },
  computed: {
    appelBord() {
      if (this.username === "Admin" && this.password === "Admini") {
        return this.interface === true;
      } else {
        return this.interface === false;
      }
    },
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
  margin-bottom: 30px;
}
#page::before,
#page::after {
  margin-top: 80px;
}
.loginField {
  display: flex;
  flex-direction: column;
}
.error {
  border: 2px solid rgb(167, 13, 13);
}
.succes {
  border: 2px solid #2072c3;
}
</style>