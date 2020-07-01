import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Item from "../views/Item.vue";
import Category from "../views/Category.vue";
import Cart from "../views/Cart.vue";
import Purchase from "../views/Purchase.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Order from "../views/Order.vue";
import Thankyou from "../views/Thankyou.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/shop/product/:id",
    name: "Product",
    component: Product
  },
  {
    path: "/shop/category/:id",
    name: "Item",
    component: Item
  },
  {
    path: "/shop",
    name: "Category",
    component: Category
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/order",
    name: "Order",
    component: Order
  },
  {
    path: "/cart/purchase",
    name: "Purchase",
    component: Purchase
  },
  {
    path: "/thankyou",
    name: "Thankyou",
    component: Thankyou
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      guest: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("token") == null) {
      next();
    } else {
      next({ name: "Home" });
    }
  } else {
    next();
  }
});

export default router;
