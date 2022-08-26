<template>
  <div class="inscription">
    <div class="page" id="sign">Page d'inscription</div>

    <div class="imagee">
      <img src="../../assets/user.png" alt="" class="userIcon" />
    </div>

    <form class="champs">
      <input
        v-model.trim="$v.username.$model"
        type="text"
        placeholder="Nom d'utilisateur"
        :class="{ error: $v.username.$error, succes: !$v.username.$error }"
      />
      <div class="error-message">
        <small v-if="!$v.username.required"></small>
        <small v-if="!$v.username.minLength"
          >ce champ doit comporter
          {{ $v.username.$params.minLength.min }}</small
        >
      </div>

      <input
        v-model.trim="$v.email.$model"
        type="email"
        placeholder="Email"
        :class="{ error: $v.email.$error, succes: !$v.email.$error }"
        
      />
      <div class="error-message">
        <small v-if="!$v.email.required"></small>
        <small v-if="!$v.email.email">mail incorrect</small>
      </div>

      <input
        v-model.trim="$v.tel.$model"
        type="tel"
        placeholder="Telephone"
        :class="{ error: $v.tel.$error, succes: !$v.tel.$error }"
      />
      <div class="error-message">
        <small></small>
      </div>

      <input
        v-model.trim="$v.password.$model"
        type="password"
        placeholder="Mot de passe"
        :class="{ error: $v.password.$error, succes: !$v.password.$error }"
      />
      <div class="error-message">
        <small v-if="!$v.password.required"></small>
        <small v-if="!$v.password.minLength"
          >Le mot de passe doit comporter au moins 6 lettres</small
        >
      </div>

      <input
        v-model.trim="$v.passwordAgain.$model"
        type="password"
        placeholder="Repeter le mot de passe"
        :class="{
          error: $v.passwordAgain.$error,
          succes: !$v.passwordAgain.$error,
        }"
      />
      <div class="error-message">
        <small v-if="!$v.passwordAgain.sameAsPassword"></small>
      </div>
      <router-link to="/signUp" v-if="this.$v.$invalid">
        <buttonComponent color msg="Inscription" id="button1" :eventClick ="click"></buttonComponent>
      </router-link>
      <router-link to="/boardUser" v-else>
        <buttonComponent color msg="Inscription" id="button1"></buttonComponent>
      </router-link>
    </form>
  </div>
</template>

<script>
import buttonComponent from "../../components/buttonComponent.vue";
import {
  required,
  minLength,
  sameAs,
  email,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";
export default {
  components: {
    buttonComponent,
    //champComponent,
  },

  data() {
    return {
      username: "",
      email: "",
      tel: "",
      password: "",
      passwordAgain: "",
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
    tel: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(12),
      numeric,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    passwordAgain: {
      required,
      sameAspassword: sameAs("password"),
    },
  },
  methods: {
    click() {
      alert("veuillez remplir tous les champs")
    }
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

  text-align: center;
}
#sign {
  margin-bottom: 20px;
}
.champs {
  display: flex;
  flex-direction: column;
}

.error-message small {
  font-size: 16px;
  font-style: italic;
  font-weight: 700;
  color: rgb(168, 18, 18);
}
.error {
  border: 2px solid rgb(167, 13, 13);
}
.succes {
  border: 2px solid #2072c3;
}
</style>
