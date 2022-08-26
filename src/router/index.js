import Vue from 'vue'
import VueRouter from 'vue-router'
import welcomePage from '../views/common/welcomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: welcomePage,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/common/loginPage.vue"),
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: () => import("../views/users/signUp.vue"),
  },
  {
    path: "/boardUser",
    name: "boardUser",
    component: () => import("../views/users/boardUser.vue"),
    children: [
      {
        path: "",
        name: "Offres",
        component: () => import("../views/users/bordUserPage/mesOffres.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () =>
          import("../views/users/bordUserPage/profilePage.vue"),
      },
      {
        path: "/notifications",
        name: "mes Notifications",
        component: () =>
          import("../views/users/bordUserPage/notificationPage.vue"),
      },
      {
        path: "/afilies",
        name: "mes afilies",
        component: () => import("../views/users/bordUserPage/mesAfilies.vue"),
      },
      {
        path: "/Lien",
        name: "generer",
        component: () => import("../views/users/bordUserPage/genererLien.vue"),
      },
    ],
  },
  {
    path: "/boardAdmin",
    name: "boardAdmin",
    component: () => import("../views/admin/boardAdmin.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/common/PageNotFound.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
