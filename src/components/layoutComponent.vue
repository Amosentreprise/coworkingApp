<template>
  <div class="layout">
    <div id="left" :class="{ blue: color, rose: !color }">
      <div class="profil">
        <img :src="image" alt="" />
        <span class="name">{{ name }}</span>
      </div>
      <div v-for="option in options" :key="option">
        <router-link :to="option.lien">
          <div class="options">
            <i :class="option.icons"></i>
            <small class="optionName">{{ option.optionName }}</small>
          </div>
        </router-link>
      </div>
      <router-link to="/login">
        <div class="logout">
          <i class="bx bx-log-in-circle"></i>
          <small class="textLogout">Deconnexion</small>
        </div>
      </router-link>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "layoutComponent",
  props: {
    color: Boolean,
    name: String,
    image: String,
    options: Array,
  },
};
</script>
<style>
.blue {
  background-color: #2072c3;
}
.rose {
  background-color: #e30045;
}
.layout {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: relative;
}
#left {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 25%;
  height: 100%;
}
.profil img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}
.profil {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.name {
  color: #fff;
  font-style: normal;
  font-size: 20px;
  padding-bottom: 10px;
}
.options {
  border-top: 2px solid #fff;
  cursor: pointer;
  margin: auto;
  padding: 0px 40px;
}
.options .optionName,
.textLogout {
  text-align: center;
  color: #fff;
  font-size: 20px;
}
i {
  font-size: 30px;
  padding: 10px;
}
.logout {
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
}
</style>