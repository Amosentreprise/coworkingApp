<template>
  <div class="board">
    <layoutComponent
      color
      :name="profil.name"
      :image="profil.source"
      :options="options"
      :user="profil.lien"
     
    >
      <router-view/>
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
      options: [
        {
          icons: "bx bxs-bell",
          optionName: "Mes notifications",
          lien: "/notifications",
        
        },
        {
          icons: "bx bxs-offer",
          optionName: "Voir les offres",
          lien: "/boardUser",
        },
        {
          icons: "bx bxs-group",
          optionName: "Voir mes affiliés",
          lien: "/afilies",
        },
        {
          icons: "bx bx-link",
          optionName: "Generer un lien",
          lien: "/Lien",
        },
      ],
    };
  },
 
};
</script>
<style></style>