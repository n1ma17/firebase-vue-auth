<template>
  <v-app>
    <v-container
      ><v-app-bar elevate-on-scroll flat app color="black">
        <v-btn color="#560bad" text class="body" @click="signOut">
          signout
        </v-btn>
        <v-btn disabled dark text>{{ user }}</v-btn>
        <v-spacer></v-spacer>
        <div v-for="(item, i) in menu" class="px-3 menu-items" :key="i">
          <router-link :to="item.route">{{ item.text }}</router-link>
        </div>
      </v-app-bar></v-container
    >
    <v-main>
        <v-container class="pt-6">
          <router-view />
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
export default {
  name: "App",
  data() {
    return {
      user: null,
      menu: [
        {
          route: "/",
          text: "Login",
        },
        {
          route: "/register",
          text: "Register",
        },
        {
          route: "/secret",
          text: "Secret",
        },
      ],
    };
  },
  created() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.user = user.email;
      } else {
        this.signOut();
      }
    });
  },
  methods: {
    signOut() {
      signOut(getAuth())
        .then(() => {
          this.user = null;
          this.$router.replace({ name: "login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff !important;
}
</style>