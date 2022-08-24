<template>
  <div class="inscription">
    <div class="page" id="sign">Page d'inscription</div>

    <div class="imagee">
      <img src="../../assets/user.png" alt="" class="userIcon" />
    </div>
    <div class="error">
      <p></p>
    </div>

    <div class="champs" v-for="input in inputs" :key="input">
      <champComponent
        :type="input.type"
        :message="input.message"
        :model="input.valeur"
      ></champComponent>
    </div>
    <router-link to="/boardUser">
      <buttonComponent color msg="Inscription" id="button1"></buttonComponent>
    </router-link>
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
  data() {
    return {
      inputs: [
        {
          type: "text",
          message: "Nom d'utilisateur",
          valeur: "",
        },
        {
          type: "email",
          message: "Email",
          valeur: "",
          pattern: "[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}",
          valid: true,
        },
        {
          type: "Tel",
          message: "Numéros",
          valeur: "",
          pattern: "[+0-9]{8,12}",
          valid: true,
        },
        {
          type: "password",
          message: "Mot de passe",
          valeur: "",
          pattern: "[a-zA-z0-9._@]{6,}",
          valid: true,
        },
        {
          type: "password",
          message: "Retapez mot de passe",
          valeur: "",
          pattern: "[a-zA-z0-9._@]{6,}",
          valid: true,
        },
      ],
      //traitement des erreurs
      errors: [],
      // methods: {
      //   verification() {
      //     this.errors = [];
      //     this.inputs.forEach((field) => {
      //       if (!field.pattern.test(field.valeur)) {
      //         field.valid = false;
      //         this.errors.push("imposible")
      //       } else {
      //         field.valid = true;
      //       }
      //     });
      //   },
      // },
    };
  },
};
</script>
<style>
.inscription {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 50px;
  left: 50px;
  transform: translate(-50px, -50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imagee .userIcon {
  width: 100px;
  height: 100px;
}
#button1 {
  width: 465px;
  margin-left: 25px;
  margin-right: 25px;
  text-align: center;
}
#sign {
  margin-bottom: 20px;
}
</style>
