<template>
  <div class="board">
    <layoutComponent
      color
      :name="profil.name"
      :image="profil.source"
      :user="profil.lien"
    >
      <template v-slot:options>
        <nav class="options">
          <router-link to="/notifications">
            <div class="option" >
              <i class="bx bxs-bell"></i>
              <small class="optionName">Mes notifications</small>
            </div>
          </router-link>
          <router-link to="/boardUser">
            <div class="option">
              <i class="bx bxs-offer"></i>
              <small class="optionName">Voir les offres</small>
            </div>
          </router-link>
          <router-link to="/afilies">
            <div class="option">
              <i class="bx bxs-group"></i>
              <small class="optionName">Mes affiliés</small>
            </div>
          </router-link>
          <router-link to="/Lien">
            <div class="option">
              <i class="bx bx-link"></i>
              <small class="optionName">Generer un lien</small>
            </div>
          </router-link>
        </nav>
      </template>
      <template v-slot:right> 
        <router-view />
      </template>
    </layoutComponent>
  </div>
</template>
<script>
import layoutComponent from "../../components/layoutComponent.vue";


import profileImage from "@/assets/user.png";
export default {
  components: {
    layoutComponent,
  
  },
  data() {
    return {
      profil: {
        name: "Someone",
        source: profileImage,
        lien: "/profile",
      },
    };
  },
};
</script>
<style scoped>
.option .optionName {
  text-align: center;
  color: #fff;
  font-size: 20px;
}

i {
  font-size: 30px;
  padding: 10px;
  color: #fff;
}

.option {
  cursor: pointer;
  margin: auto;
  padding: 0px 40px;
}
.option:hover {
  background-color: #41b883;
}
.router-link-active {
  background-color: #41b883;
}
</style>