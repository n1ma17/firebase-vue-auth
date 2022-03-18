import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import { initializeApp } from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSdgaoh6Udpv81s0rkFSp8DhwsLQKAzaA",
  authDomain: "jwt-auth-7c6db.firebaseapp.com",
  projectId: "jwt-auth-7c6db",
  storageBucket: "jwt-auth-7c6db.appspot.com",
  messagingSenderId: "198441382562",
  appId: "1:198441382562:web:41c07daa0404a590a55dfb"
};
// Initialize Firebase
initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
