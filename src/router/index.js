import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import ScheduleView from "@/views/ScheduleView.vue";
import { nextTick } from "vue";
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";

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
      meta: { requiresAuth: false },
    },
    {
      path: "/schedule",
      name: "schedule",
      component: ScheduleView,
    },

    {
      path: "/income",
      component: () => import("../views/IncomeView.vue"),
    },
    {
      path: "/income/add",
      name: "add-income",
      component: () => import("../views/AddIncome.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/income/edit/:id",
      name: "edit-income",
      component: () => import("../views/EditIncome.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/expense",
      name: "expense",
      component: () => import("../views/ExpensesView.vue"),
    },
    {
      path: "/expense/add",
      name: "add-expense",
      component: () => import("../views/AddExpense.vue"),
      meta: { requiresAuth: true, allowedRoles: ["superAdmin", "leader"] },
    },
    {
      path: "/expense/edit/:id",
      name: "edit-expense",
      component: () => import("../views/EditExpense.vue"),
      meta: { requiresAuth: true, allowedRoles: ["superAdmin", "leader"] },
    },
    {
      path: "/recap",
      name: "recap",
      component: () => import("../views/RecapView.vue"),
    },
  ],
});

router.beforeEach((to, from, nextTick) => {
  const { isLogin, checkLogin, role } = useAuthStore();
  checkLogin();

  if (to.meta.requiresAuth && !isLogin) {
    nextTick({ name: "login" });
  } else if (to.name === "login" && isLogin) {
    nextTick({ name: "home" });
  } else if (to.meta.allowedRoles && !to.meta.allowedRoles.includes(role)) {
    console.log(role);

    nextTick({ name: "home" });
  } else {
    nextTick();
  }
});

export default router;
