<template>
  <div class="profile">
    <div class="profile_image">
      <img src="@/assets/user.png" />
    </div>
    <div class="nom">Someone</div>
    <div class="temps_restant"></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.profile {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.profile_image {
  height: 100px;
  width: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}
.profile_image img {
  height: 100px;
  width: 100px;
}
.nom {
  font-size: 20px;
}
</style>