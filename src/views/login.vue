<template>
  <div>
    <div v-if="error">{{ error.message }}</div>
    register
    <form @submit.prevent="submited">
      <div class="email">
        <input v-model="email" type="email" name="email" id="email" />
      </div>
      <div class="password">
        <input v-model="password" type="password" name="password" id="pass" />
      </div>
      <button type="submit">log in</button>
    </form>
  </div>
</template>

<script>
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      error: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submited() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((userCredential) => {
          const user = userCredential;
          console.log({user});
          this.$router.replace({ name: "secret" });
        })
        .catch((e) => {
          console.log({e});
        });
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  margin: 20px;
  padding: 10px;
}
</style>