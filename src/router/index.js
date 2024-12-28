import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { hideSidebar: true },
    },

    {
      path: "/income",
      name: "income",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/IncomeView.vue"),
    },
    {
      path: "/income/add",
      name: "add-income",
      component: () => import("../views/AddIncome.vue"),
    },
    {
      path: "/expense",
      name: "expense",
      component: () => import("../views/ExpensesView.vue"),
    },
    {
      path: "/expense/add",
      name: "add-expense",
      component: () => import("../views/AddOutcome.vue"),
    },
    {
      path: "/recap",
      name: "recap",
      component: () => import("../views/RecapView.vue"),
    },
  ],
});

export default router;
