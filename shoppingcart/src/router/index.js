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
    path: "/cart/purchase",
    name: "Purchase",
    component: Purchase
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
