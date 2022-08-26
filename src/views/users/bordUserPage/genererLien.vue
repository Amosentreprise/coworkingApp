<template>
  <div class="generator">
    <input type="text" placeholder="" v-model="lien" />
    <div class="generateur-bouton">
      <buttonComponent
        color
        msg="Generer"
        id="buttonGenerer"
        v-show="surveillantk"
      ></buttonComponent>
      <div class="specialBtn" v-show="surveillant">
        <buttonComponent msg="Copy" id="buttonCopy"></buttonComponent>
        <buttonComponent msg="share" id="buttonShare"></buttonComponent>
      </div>
    </div>
  </div>
</template>
<script>
import buttonComponent from "../../../components/buttonComponent.vue";

export default {
  components: {
    buttonComponent,
  },
  data() {
    return {
      etat: false,
      lien: "",
    };
  },
  computed: {
    surveillant() {
      if (this.lien) {
        return this.etat === false;
      } else {
        return this.etat === true;
      }
    },
    surveillantk() {
      if (this.lien) {
        return this.etat === true;
      } else {
        return this.etat === false;
      }
    },
  },
};
</script>
<style scoped>
.generator {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.generator input {
  width: 400px;
  height: 40px;
}
.generateur-bouton {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
}
.specialBtn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>