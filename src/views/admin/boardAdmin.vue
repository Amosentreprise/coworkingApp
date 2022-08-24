<template>
  <layoutComponent
    :name="profil.name"
    :image="profil.source"
    :options="options"
  ></layoutComponent>
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
        name: "Admin",
        source: profileImage,
      },
      options: [
        {
          icons: " bx bxs-group",
          optionName: "Mes clients",
        },
        {
          icons: "bx bxs-offer",
          optionName: "Publier une offre",
        },
        {
          icons: "bx bxs-bell",
          optionName: "Envoyer une notifications",
        },
      ],
    };
  },
};
</script>
<style></style>